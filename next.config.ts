import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder assets are locally-authored, trusted SVGs. Enabling SVG lets
    // next/image serve them; replace the files in public/images/projects with
    // real screenshots (PNG/JPG) to drop this requirement.
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
