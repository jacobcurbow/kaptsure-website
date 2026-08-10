/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "kaptsure.com" }],
        destination: "https://www.kaptsure.com/:path*",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
