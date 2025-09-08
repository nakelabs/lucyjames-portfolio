interface NewsletterSubscription {
  email: string;
  firstName?: string;
  lastName?: string;
}

interface SubscriptionResponse {
  success: boolean;
  message: string;
}

export const subscribeToNewsletter = async (
  data: NewsletterSubscription
): Promise<SubscriptionResponse> => {
  try {
    // Use the API route for better security
    const response = await fetch('/api/newsletter/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      return {
        success: true,
        message: result.message || 'Successfully subscribed to newsletter!',
      };
    } else {
      return {
        success: false,
        message: result.message || 'Failed to subscribe. Please try again.',
      };
    }
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return {
      success: false,
      message: 'Network error. Please check your connection and try again.',
    };
  }
};

// Fallback: Direct API call (less secure, use only for testing)
export const subscribeToNewsletterDirect = async (
  data: NewsletterSubscription
): Promise<SubscriptionResponse> => {
  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': import.meta.env.VITE_BREVO_API_KEY || '',
      },
      body: JSON.stringify({
        email: data.email,
        attributes: {
          FIRSTNAME: data.firstName || '',
          LASTNAME: data.lastName || '',
        },
        listIds: [parseInt(import.meta.env.VITE_BREVO_LIST_ID || '1')],
        updateEnabled: true,
      }),
    });

    if (response.ok) {
      return {
        success: true,
        message: 'Successfully subscribed to newsletter!',
      };
    } else {
      const error = await response.json();
      
      if (error.code === 'duplicate_parameter') {
        return {
          success: false,
          message: 'You are already subscribed to our newsletter!',
        };
      }
      
      return {
        success: false,
        message: 'Failed to subscribe. Please try again.',
      };
    }
  } catch (error) {
    console.error('Brevo subscription error:', error);
    return {
      success: false,
      message: 'Network error. Please check your connection and try again.',
    };
  }
};
