/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static-friendly: the guidelines site has no server data needs.
  // Vercel serves this as static output; remove `output` for ISR/SSR later.
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: false,
};
export default nextConfig;
