/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'imgs.search.brave.com',
            port: '',
          },
        ],
      },
};

export default nextConfig;
