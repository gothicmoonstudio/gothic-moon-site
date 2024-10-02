const API_KEY = import.meta.env.VITE_ADOBE_API_KEY;
const PROJECT_ID = 'wig7gea';
const BASE_URL = `https://typekit.com/api/v1/json/kits/${PROJECT_ID}/published`;
const EMBED_LINK = 'https://use.typekit.net/wig7gea.css';

/**
 * Function to list all fonts in your specific Adobe Fonts project.
 * @returns {Promise<object[]>} - Returns a list of fonts in the specified project.
 */
export async function listFontsInProject() {
  try {
    const response = await fetch(BASE_URL, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      // Handle specific error codes
      const errorData = await response.json();
      handleTypekitErrors(response.status, errorData);
      return null;
    }

    const data = await response.json();
    console.log('Fetched Fonts Data:', data); // Debugging: Log the response data
    return data.kit.families || []; // Return the font families in the kit
  } catch (error) {
    console.error('Unexpected error fetching project fonts:', error);
    return null;
  }
}

/**
 * Error handling for Typekit API based on HTTP status codes.
 * @param {number} statusCode - The HTTP status code of the response.
 * @param {object} errorData - The error data returned from the Typekit API.
 */
function handleTypekitErrors(statusCode, errorData) {
  switch (statusCode) {
    case 400:
      console.error('Bad request:', errorData.errors.join(', '));
      break;
    case 401:
      console.error('Unauthorized. Please check your API key.');
      break;
    case 403:
      console.error('Rate limit exceeded or forbidden:', errorData.errors.join(', '));
      break;
    case 404:
      console.error('Resource not found:', errorData.errors.join(', '));
      break;
    case 500:
      console.error('Internal server error. Please try again later.');
      break;
    case 503:
      console.error('Service unavailable. The Typekit API may be down for maintenance.');
      break;
    default:
      console.error('An unknown error occurred:', errorData.errors.join(', '));
  }
}

/**
 * Function to get the embed link of your Adobe Fonts project.
 * @returns {string} - Returns the embed link for the specified project.
 */
export function getEmbedLink() {
  console.log('Adobe Fonts Embed Link:', EMBED_LINK); // Debugging: Log the embed link
  return EMBED_LINK;
}

/**
 * Function to inject the Adobe Fonts embed link into the document head.
 */
export function injectFontLink() {
  console.log('Injecting Adobe Fonts link into document head.'); // Debugging: Log before injection
  const linkElement = document.createElement('link');
  linkElement.rel = 'stylesheet';
  linkElement.href = getEmbedLink();
  document.head.appendChild(linkElement);
  console.log('Successfully injected Adobe Fonts link.'); // Debugging: Log after injection
}

/**
 * Function to verify the API key and project ID.
 * Makes a simple GET request to validate the credentials.
 * @returns {Promise<boolean>} - Returns true if the credentials are valid, false otherwise.
 */
export async function verifyApiCredentials() {
  try {
    const response = await fetch(BASE_URL, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      console.log('API credentials are valid.'); // Debugging: Log successful validation
      return true;
    } else {
      const errorData = await response.json();
      handleTypekitErrors(response.status, errorData);
      return false;
    }
  } catch (error) {
    console.error('Error verifying API credentials:', error);
    return false;
  }
}
