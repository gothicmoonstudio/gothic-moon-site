const API_KEY = import.meta.env.VITE_ADOBE_API_KEY;

const PROJECT_ID = 'wig7gea';

const BASE_URL = 'https://adobe-fonts-api.com/v1';

const EMBED_LINK = 'https://use.typekit.net/wig7gea.css';

/**
 * Function to list all fonts in your specific Adobe Fonts project.
 * @returns {Promise<object[]>} - Returns a list of fonts in the specified project.
 */
export async function listFontsInProject() {
  try {
    const response = await fetch(`${BASE_URL}/projects/${PROJECT_ID}/fonts`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching project fonts:', error);
    return null;
  }
}

/**
 * Function to get the embed link of your Adobe Fonts project.
 * @returns {string} - Returns the embed link for the specified project.
 */
export function getEmbedLink() {
  return EMBED_LINK;
}

/**
 * Function to inject the Adobe Fonts embed link into the document head.
 */
export function injectFontLink() {
  const linkElement = document.createElement('link');
  linkElement.rel = 'stylesheet';
  linkElement.href = getEmbedLink();
  document.head.appendChild(linkElement);
}
