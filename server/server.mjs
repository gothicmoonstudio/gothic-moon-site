import express from 'express';
import cors from 'cors';
import fontRoutes from './api/fonts.mjs'; // Make sure the path is correct

const app = express();
const PORT = process.env.PORT || 3001;

// Define the allowed origins for CORS
const allowedOrigins = [
  'https://gothic-moon-site-server.vercel.app', // Backend main URL
  'https://gothic-moon-site.vercel.app' // Frontend main URL
];

// Configure CORS options
app.use(cors({
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// Use the fontRoutes for the /api/fonts endpoint
app.use('/api/fonts', fontRoutes);

// Root route to provide a welcome message
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Adobe Fonts API Proxy Server</h1><p>This server is for development and testing purposes. For font data, please use the <a href="/api/fonts">/api/fonts</a> endpoint in production.</p>');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Proxy server is running at http://localhost:${PORT}`);
});