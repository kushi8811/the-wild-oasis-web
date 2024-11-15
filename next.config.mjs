/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aqhnqawvjcgtdnogsnef.supabase.co", // The correct hostname from the error message
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
      {
        protocol: "https",
        hostname: "dclaevazetcjjkrzczpc.supabase.co", // Add this if needed for other images
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },
  // output: "export",
};

export default nextConfig;
