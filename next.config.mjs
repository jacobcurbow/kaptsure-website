/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.kaptsure.com" }],
        destination: "https://kaptsure.com/:path*",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
