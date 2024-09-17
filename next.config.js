/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Optional jika menggunakan Next.js Images, GitHub Pages tidak mendukung Image Optimization.
  },
  assetPrefix: "./", // Ini untuk memastikan resource diakses dengan path yang benar di GitHub Pages.
  basePath: "/next-static-export", // Ganti dengan nama repositori GitHub Anda
};

module.exports = nextConfig;

