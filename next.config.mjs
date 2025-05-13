/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "devapi.emotion.co.kr",
      },
      {
        protocol: "http",
        hostname: "10.80.0.254",
      },
      {
        protocol: "http",
        hostname: "new-www.kyoga.or.kr",
      },
    ],
  },
  // API 요청 리다이렉트 설정 (CORS 해결)
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
