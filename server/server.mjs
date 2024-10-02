// server.mjs

// Import required modules
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

// Set up the Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Construct the Adobe Fonts API URL using environment variables from Vercel
const adobeFontsApiUrl = `https://typekit.com/api/v1/json/kits/${process.env.VITE_ADOBE_PROJECT_ID}/published`;

// Log the Adobe Fonts API URL to verify it's correct
console.log(`Adobe Fonts API URL: ${adobeFontsApiUrl}`);

// Enable CORS for all requests
app.use(cors());

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

    // Check if response is not OK and throw an error with status details
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch Adobe Fonts data: ${response.status} ${response.statusText} - ${errorText}`);
    }

    // Parse the response data
    const data = await response.json();

    // Filter out the project ID from the response data before sending it to the client
    if (data && data.kit && data.kit.id) {
      console.log('Removing project ID from response data');
      delete data.kit.id; // Remove the 'id' field from the 'kit' object
    }

    // Send the filtered data as the response
    res.json(data);
  } catch (error) {
    console.error('Error fetching Adobe Fonts data:', error.message);
    res.status(500).json({ error: error.message });
  }
});

// Define the root route (/) to provide a welcome message
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Adobe Fonts API Proxy Server</h1><p>Visit <a href="/api/fonts">/api/fonts</a> to get Adobe Fonts data.</p>');
});

// Start the server and log the URL
app.listen(PORT, () => {
  console.log(`Proxy server is running at http://localhost:${PORT}`);
});