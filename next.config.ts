import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 60 = hero (groot, met overlay eroverheen — mag steviger gecomprimeerd),
    // 75 = default voor de overige foto's.
    qualities: [60, 75],
  },
};

export default nextConfig;
