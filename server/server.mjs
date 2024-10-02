import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 3001;

// Construct the Adobe Fonts API URL using environment variables
const adobeFontsApiUrl = `https://typekit.com/api/v1/json/kits/${process.env.VITE_ADOBE_PROJECT_ID}/published`;

// Define the allowed origins for CORS (only include main URLs)
const allowedOrigins = [
  'https://gothic-moon-site-server.vercel.app', // Backend main URL
  'https://gothic-moon-site.vercel.app' // Frontend main URL
];

// Configure CORS options
app.use(cors({
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// Handle the /api/fonts route to fetch and return Adobe Fonts data
app.get('/api/fonts', async (req, res) => {
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
    }
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    res.json(data);
  } catch (error) {
    console.error('Error fetching Adobe Fonts data:', error.message);
    // Include CORS headers even in error responses
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.status(500).json({ error: error.message });
  }
});

// Root route to provide a welcome message
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Adobe Fonts API Proxy Server</h1><p>Visit <a href="/api/fonts">/api/fonts</a> to get Adobe Fonts data.</p>');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Proxy server is running at http://localhost:${PORT}`);
});