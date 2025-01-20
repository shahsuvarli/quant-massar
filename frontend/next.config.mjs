/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        // pathname: "/account123/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
        port: "",
        // pathname: "/account123/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "eodhd.com",
        port: "",
        // pathname: "/account123/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
