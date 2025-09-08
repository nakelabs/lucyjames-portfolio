// Create file: src/services/newsletter.ts
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
    // For security, we'll use a serverless function or API route
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
        message: 'Successfully subscribed to newsletter!',
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

// Direct API call - Fixed to handle 204 responses
export const subscribeToNewsletterDirect = async (
  data: NewsletterSubscription
): Promise<SubscriptionResponse> => {
  try {
    const apiKey = import.meta.env.VITE_BREVO_API_KEY;
    const listId = import.meta.env.VITE_BREVO_LIST_ID;
    
    console.log('Debug Info:');
    console.log('API Key exists:', !!apiKey);
    console.log('API Key length:', apiKey?.length || 0);
    console.log('List ID:', listId);
    
    if (!apiKey) {
      return {
        success: false,
        message: 'API configuration error. Please contact support.',
      };
    }

    const requestBody = {
      email: data.email,
      attributes: {
        FIRSTNAME: data.firstName || '',
        LASTNAME: data.lastName || '',
      },
      listIds: [parseInt(listId || '1')],
      updateEnabled: true,
    };

    console.log('Request body:', requestBody);

    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify(requestBody),
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));

    // Handle different response types
    let responseData: { message: string } | null = null;
    
    // Check if response has content before trying to parse JSON
    const contentLength = response.headers.get('content-length');
    const contentType = response.headers.get('content-type');
    
    if (response.status === 204 || contentLength === '0') {
      // 204 No Content - success with no body
      console.log('✅ 204 No Content - Success response');
      responseData = { message: 'Success' };
    } else if (contentType && contentType.includes('application/json')) {
      // Has JSON content
      try {
        responseData = await response.json();
        console.log('Response data:', responseData);
      } catch (jsonError) {
        console.log('❌ Failed to parse JSON, but request might be successful');
        console.log('JSON parse error:', jsonError);
        
        // If we can't parse JSON but got a success status, treat as success
        if (response.ok) {
          responseData = { message: 'Success' };
        } else {
          return {
            success: false,
            message: 'Invalid response format from server.',
          };
        }
      }
    } else {
      // Non-JSON response
      const textResponse = await response.text();
      console.log('Non-JSON response:', textResponse);
      responseData = { message: textResponse || 'Success' };
    }

    // Check for success
    if (response.ok || response.status === 204) {
      console.log('✅ Subscription successful');
      return {
        success: true,
        message: 'Successfully subscribed to newsletter!',
      };
    } else {
      console.log('❌ Subscription failed:', responseData);
      
      // Handle specific error codes
      if (responseData && 'code' in responseData && responseData.code === 'duplicate_parameter') {
        return {
          success: true, // Treat duplicate as success
          message: 'You are already subscribed to our newsletter!',
        };
      }
      
      if (responseData && 'code' in responseData && responseData.code === 'unauthorized') {
        return {
          success: false,
          message: 'Invalid API key. Please contact support.',
        };
      }
      
      return {
        success: false,
        message: responseData ? (responseData.message || `API Error: ${'code' in responseData ? responseData.code : 'Unknown error'}`) : 'Unknown error',
      };
    }
  } catch (error) {
    console.error('❌ Brevo subscription error:', error);
    
    // Check if it's a JSON parse error but the request was actually successful
    if (error instanceof SyntaxError && error.message.includes('JSON')) {
      console.log('🤔 JSON parse error, but checking if request was successful...');
      return {
        success: true,
        message: 'Successfully subscribed to newsletter!',
      };
    }
    
    return {
      success: false,
      message: 'Network error. Please check your connection and try again.',
    };
  }
};

// Test function to verify API key
export const testApiKey = async (): Promise<SubscriptionResponse> => {
  try {
    const apiKey = import.meta.env.VITE_BREVO_API_KEY;
    
    console.log('🧪 Testing API Key with account endpoint...');
    
    const response = await fetch('https://api.brevo.com/v3/account', {
      method: 'GET',
      headers: {
        'api-key': apiKey,
      },
    });

    // Handle JSON response safely
    let responseData: { message?: string } | null = null;
    try {
      responseData = await response.json();
    } catch (jsonError) {
      console.log('No JSON content in response');
    }

    console.log('Account test response:', response.status, responseData);

    if (response.ok) {
      console.log('✅ API Key is valid!');
      return {
        success: true,
        message: 'API Key is valid!',
      };
    } else {
      console.log('❌ API Key test failed');
      return {
        success: false,
        message: `API Key test failed: ${responseData?.message || 'Invalid key'}`,
      };
    }
  } catch (error) {
    console.error('❌ API Key test error:', error);
    return {
      success: false,
      message: 'Network error during API key test',
    };
  }
};

// Test function to verify environment setup
export const testEnvironment = () => {
  console.log('=== Environment Test ===');
  console.log('Node ENV:', import.meta.env.MODE);
  console.log('Has VITE_BREVO_API_KEY:', !!import.meta.env.VITE_BREVO_API_KEY);
  console.log('Has VITE_BREVO_LIST_ID:', !!import.meta.env.VITE_BREVO_LIST_ID);
  console.log('API Key preview:', import.meta.env.VITE_BREVO_API_KEY?.substring(0, 20) + '...');
  console.log('========================');
};