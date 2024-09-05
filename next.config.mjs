/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.daisycon.io',
            port: '',
          },
        ],
      },
};

export default nextConfig;
