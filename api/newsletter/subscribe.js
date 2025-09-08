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
    const requestBody = {
      email,
      attributes: {
        FIRSTNAME: firstName || '',
        LASTNAME: lastName || '',
      },
      listIds: [parseInt(process.env.VITE_BREVO_LIST_ID || '1')],
      updateEnabled: true,
    };

    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.VITE_BREVO_API_KEY || '',
      },
      body: JSON.stringify(requestBody),
    });

    if (response.ok || response.status === 204) {
      console.log('Brevo subscription successful');
      return res.status(200).json({ 
        success: true, 
        message: 'Successfully subscribed to newsletter!' 
      });
    } else {
      const errorData = await response.json().catch(() => ({}));
      
      if (errorData.code === 'duplicate_parameter') {
        return res.status(400).json({ 
          success: false,
          message: 'You are already subscribed to our newsletter!' 
        });
      }
      
      console.error('Brevo API error:', errorData);
      return res.status(400).json({ 
        success: false, 
        message: 'Failed to subscribe. Please try again.' 
      });
    }
  } catch (error) {
    console.error('Brevo subscription error:', error);
    
    return res.status(500).json({ 
      success: false,
      message: 'Failed to subscribe. Please try again.' 
    });
  }
}
