/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,  // Enables React Strict Mode for development
  
    // Remove the 'productionSourceMaps' setting as it is not valid in Next.js 15.x
    devIndicators: {
      autoPrerender: false,  // Disables the automatic prerendering indicator in development
    },
  };
  
  export default nextConfig;
  
