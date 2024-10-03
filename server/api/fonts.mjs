import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

const allowedOrigins = [
  'https://gothic-moon-site-server.vercel.app', // Backend main URL
  'https://gothic-moon-site.vercel.app' // Frontend main URL
];

// Function to filter out sensitive information from the Adobe Fonts API response
function filterSensitiveData(data) {
  if (data && data.kit && data.kit.id) {
    // Remove the project ID to protect sensitive information
    console.log('Removing sensitive project ID from response data');
    delete data.kit.id;
  }
  return data;
}

// Create the route to handle requests to /api/fonts
router.get('/', async (req, res) => {
  const adobeFontsApiUrl = `https://typekit.com/api/v1/json/kits/${process.env.VITE_ADOBE_PROJECT_ID}/published`;

  try {
    // Log the constructed URL and token for debugging purposes
    console.log(`Fetching Adobe Fonts data from: ${adobeFontsApiUrl}`);
    console.log(`Using Authorization token: ${process.env.VITE_ADOBE_API_TOKEN}`);

    // Make the request to the Adobe Typekit API
    const response = await fetch(adobeFontsApiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.VITE_ADOBE_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch Adobe Fonts data: ${response.status} ${response.statusText} - ${errorText}`);
    }

    let data = await response.json();
    data = filterSensitiveData(data);  // Call the function to filter sensitive information

    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    } else {
      res.setHeader('Access-Control-Allow-Origin', '*');
    }
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    res.json(data);
  } catch (error) {
    console.error('Error fetching Adobe Fonts data:', error.message);

    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    } else {
      res.setHeader('Access-Control-Allow-Origin', '*');
    }

    res.status(500).json({ error: error.message });
  }
});

export default router;