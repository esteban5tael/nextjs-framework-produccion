import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // UI Avatars (para avatares generados)
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
        pathname: '/api/**',
      },
/*       // Unsplash (fotos stock)
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      // Lorem Picsum (imágenes placeholder)
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      // Pexels
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      // Cloudinary (si usas este servicio)
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      // GitHub avatars (si usas GitHub)
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      // Google (para imágenes de Google)
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      // Amazon S3 (si tienes buckets públicos)
      {
        protocol: 'https',
        hostname: '*.amazonaws.com',
      }, */
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // Para tu pregunta anterior del linter
  },
};

export default nextConfig;