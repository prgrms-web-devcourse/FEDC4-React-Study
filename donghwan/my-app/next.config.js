const { isJSDocReturnTag } = require("typescript");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images/unsplash.com",
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: "/products/deleted_forever",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/products/temp",
        destination: "/products",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
