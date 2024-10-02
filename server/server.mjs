import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Determine the directory of the current file (required for ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Log the current working directory and the directory of the .env file
console.log(`Current working directory: ${process.cwd()}`);
console.log(`Directory of the current file: ${__dirname}`);

// Path to the .env file in the server directory
const envPath = path.resolve(__dirname, '.env');
console.log(`Attempting to load environment variables from: ${envPath}`);

// Check if .env file exists at the specified path and log the result
if (fs.existsSync(envPath)) {
  console.log('.env file found');
} else {
  console.error('.env file not found at the specified path');
}

// Load environment variables from .env file
const result = dotenv.config({ path: envPath });

// Log if dotenv encountered an error while loading the .env file
if (result.error) {
  console.error('Failed to load .env file:', result.error);
} else {
  console.log('.env file loaded successfully');
}

// Log all environment variables (for debugging purposes)
console.log('All loaded environment variables:', process.env);

// Log the individual environment variables to check if they are loaded correctly
console.log(`ADOBE_API_TOKEN: ${process.env.ADOBE_API_TOKEN}`);
console.log(`ADOBE_PROJECT_ID: ${process.env.ADOBE_PROJECT_ID}`);

const app = express();
const PORT = process.env.PORT || 3001;
const adobeFontsApiUrl = `https://typekit.com/api/v1/json/kits/${process.env.ADOBE_PROJECT_ID}/published`;

// Log the Adobe Fonts API URL to verify it's correct
console.log(`Adobe Fonts API URL: ${adobeFontsApiUrl}`);

app.use(cors());

// Define the /api/fonts route to fetch and return Adobe Fonts data
app.get('/api/fonts', async (req, res) => {
  try {
    console.log(`Fetching Adobe Fonts data with URL: ${adobeFontsApiUrl}`);
    console.log(`Using Authorization: Bearer ${process.env.ADOBE_API_TOKEN}`);

    const response = await fetch(adobeFontsApiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.ADOBE_API_TOKEN}`,
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

    // **Filter out the project ID before sending the response**
    if (data && data.kit && data.kit.id) {
      console.log('Removing project ID from response data');
      delete data.kit.id; // Remove the 'id' field from the 'kit' object
    }

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

// Start the server
app.listen(PORT, () => {
  console.log(`Proxy server is running at http://localhost:${PORT}`);
});
