import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    ADOBE_API_TOKEN: process.env.ADOBE_API_TOKEN,
    ADOBE_PROJECT_ID: process.env.ADOBE_PROJECT_ID,
  },
  // Correctly set up `sassOptions` with ES module compatibility
  sassOptions: {
    includePaths: [join(dirname(fileURLToPath(import.meta.url)), 'styles')],
  },
};

export default nextConfig;