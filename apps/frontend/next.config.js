/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
      ADOBE_API_TOKEN: process.env.ADOBE_API_TOKEN,
      ADOBE_PROJECT_ID: process.env.ADOBE_PROJECT_ID,
    },
  }
  
export default nextConfig;