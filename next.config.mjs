// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      // Disables ESLint during production builds
      ignoreDuringBuilds: true,
    },
    trailingSlash: true, // Adds a trailing slash to paths
    output: 'export',   // Tells Next.js to export the app as static files
  };
  
  export default nextConfig;
  
  
  