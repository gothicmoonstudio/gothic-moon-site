import fetch from 'node-fetch';

// Define the allowed origins for CORS
const allowedOrigins = [
  'https://gothic-moon-site-server.vercel.app', // Backend main URL
  'https://gothic-moon-site.vercel.app' // Frontend main URL
];

export default async function handler(req, res) {
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

    // Check if the response is successful
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch Adobe Fonts data: ${response.status} ${response.statusText} - ${errorText}`);
    }

    // Parse the response data
    const data = await response.json();

    // Remove any sensitive information before sending the data to the front-end
    if (data && data.kit && data.kit.id) {
      console.log('Removing project ID from response data');
      delete data.kit.id;
    }

    // Set CORS headers for the response before sending it
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    } else {
      res.setHeader('Access-Control-Allow-Origin', '*'); // Optional: Enable wildcard CORS for other origins
    }
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    // Send the filtered data as JSON
    res.json(data);
  } catch (error) {
    console.error('Error fetching Adobe Fonts data:', error.message);
    
    // Set CORS headers for error response as well
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    } else {
      res.setHeader('Access-Control-Allow-Origin', '*'); // Optional: Enable wildcard CORS for other origins
    }

    res.status(500).json({ error: error.message });
  }
}