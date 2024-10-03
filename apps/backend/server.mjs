import express from 'express';
import cors from 'cors';
import fontRoutes from './api/fonts.mjs';

const app = express();
const PORT = process.env.PORT || 3000;

// Allowed origins for CORS configuration
const allowedOrigins = [
  'https://gothic-moon-site-server.vercel.app', 
  'https://gothic-moon-site.vercel.app'
];

// Set up CORS middleware with the allowed origins
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

// Parse incoming JSON requests
app.use(express.json());

// Use the imported font routes for the '/api/fonts' endpoint
app.use('/api/fonts', fontRoutes);

// Base route to show the server is running
app.get('/', (res) => {
  res.send('<h1>Welcome to the Adobe Fonts API Proxy Server</h1><p>This server is for development and testing purposes. For font data, please use the <a href="/api/fonts">/api/fonts</a> endpoint in production.</p>');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Proxy server is running at http://localhost:${PORT}`);
});