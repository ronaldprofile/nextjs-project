/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'api-logista.s3.amazonaws.com'
      }
    ]
  }
}

export default nextConfig
