const brevo = require('@getbrevo/brevo');

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, firstName, lastName } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Please enter a valid email address' });
  }

  try {
    const apiInstance = new brevo.ContactsApi();
    apiInstance.setApiKey(brevo.ContactsApiApiKeys.apiKey, process.env.VITE_BREVO_API_KEY);

    const createContact = new brevo.CreateContact();
    createContact.email = email;
    createContact.attributes = {
      FIRSTNAME: firstName || '',
      LASTNAME: lastName || '',
    };
    createContact.listIds = [parseInt(process.env.VITE_BREVO_LIST_ID || '1')];
    createContact.updateEnabled = true;

    const response = await apiInstance.createContact(createContact);

    console.log('Brevo subscription successful:', response);

    return res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter!' 
    });
  } catch (error) {
    console.error('Brevo subscription error:', error);
    
    // Handle duplicate email
    if (error.status === 400 && error.body?.code === 'duplicate_parameter') {
      return res.status(400).json({ 
        success: false,
        message: 'You are already subscribed to our newsletter!' 
      });
    }

    // Handle other errors
    return res.status(500).json({ 
      success: false,
      message: 'Failed to subscribe. Please try again.' 
    });
  }
}
