/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["http://localhost:3000"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
