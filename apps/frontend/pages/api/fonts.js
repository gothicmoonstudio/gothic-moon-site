import fetch from 'node-fetch';

// Allowed origins for CORS
const allowedOrigins = [
  'http://localhost:3000', // Your local development URL
  'https://gothic-moon-site.vercel.app', // Add your production URL here
];

export default async function handler(req, res) {
  const projectId = process.env.ADOBE_PROJECT_ID;
  const apiToken = process.env.ADOBE_API_TOKEN;

  // CORS configuration
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    // Handle preflight requests
    return res.status(200).end();
  }

  // Check for the required environment variables
  if (!projectId || !apiToken) {
    return res.status(500).json({ error: 'Missing environment variables' });
  }

  const adobeFontsApiUrl = `https://typekit.com/api/v1/json/kits/${projectId}/published`;

  try {
    const response = await fetch(adobeFontsApiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({ error: errorText });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching Adobe Fonts data:', error);
    return res.status(500).json({ error: error.message });
  }
}