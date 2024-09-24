/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    eslint: {
        // Deshabilitar ESLint en producción
        ignoreDuringBuilds: isProd,
      },
};

export default nextConfig;
