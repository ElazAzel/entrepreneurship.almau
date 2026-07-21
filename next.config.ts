import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [640, 768, 1024, 1280, 1536],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/grants",
        destination: "/admission/grants-and-tuition",
        permanent: true,
      },
      {
        source: "/ent",
        destination: "/ent/matematika-geografiya",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
