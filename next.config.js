/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve optimised images from these external domains
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "res.cloudinary.com" }, // production CDN
    ],
    // Auto-generate modern formats — avif first (50% smaller), then webp
    formats: ["image/avif", "image/webp"],
    // Cache optimised images for 60 days on the CDN edge
    minimumCacheTTL: 60 * 60 * 24 * 60,
    // Responsive breakpoints matching Tailwind screen sizes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
};

module.exports = nextConfig;
