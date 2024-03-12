/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'i.annihil.us',
        port: '',
        pathname: '/u/prod/marvel/i/mg/**',
      },
    ],
    deviceSizes: [480, 768, 1024, 1920],
    imageSizes: [124, 140, 160, 190, 210, 320],
  },
};

export default nextConfig;
