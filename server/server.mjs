import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 3001;

// Define Adobe Fonts API URL using environment variables
const adobeFontsApiUrl = `https://typekit.com/api/v1/json/kits/${process.env.VITE_ADOBE_PROJECT_ID}/published`;

console.log(`Adobe Fonts API URL: ${adobeFontsApiUrl}`);

// Configure CORS options
const corsOptions = {
  origin: [
    'https://gothic-moon-site-6pc6fhu55-mary-sargents-projects.vercel.app', // Your front-end URL
    'https://gothic-moon-site.vercel.app' // Additional front-end URL if needed
  ],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Allow credentials like cookies and headers
};

// Apply CORS middleware with the specified options
app.use(cors(corsOptions));

// Manually set CORS headers for every response to ensure correct CORS handling
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://gothic-moon-site-6pc6fhu55-mary-sargents-projects.vercel.app'); // Add your primary front-end URL
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

// Define the /api/fonts route to fetch and return Adobe Fonts data
app.get('/api/fonts', async (req, res) => {
  try {
    console.log(`Fetching Adobe Fonts data with URL: ${adobeFontsApiUrl}`);
    console.log(`Using Authorization: Bearer ${process.env.VITE_ADOBE_API_TOKEN}`);

    const response = await fetch(adobeFontsApiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.VITE_ADOBE_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    console.log(`Response status: ${response.status}`);
    console.log(`Response status text: ${response.statusText}`);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch Adobe Fonts data: ${response.status} ${response.statusText} - ${errorText}`);
    }

    const data = await response.json();

    if (data && data.kit && data.kit.id) {
      console.log('Removing project ID from response data');
      delete data.kit.id;
    }

    // Return the JSON data response with CORS headers
    res.json(data);
  } catch (error) {
    console.error('Error fetching Adobe Fonts data:', error.message);
    res.status(500).json({ error: error.message });
  }
});

// Root route to display a welcome message
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Adobe Fonts API Proxy Server</h1><p>Visit <a href="/api/fonts">/api/fonts</a> to get Adobe Fonts data.</p>');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Proxy server is running at http://localhost:${PORT}`);
});