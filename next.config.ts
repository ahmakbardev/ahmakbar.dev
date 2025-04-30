import createNextIntlPlugin from "next-intl/plugin";
import type { RemotePattern } from "next/dist/shared/lib/image-config";

const withNextIntl = createNextIntlPlugin();

const remotePatterns: RemotePattern[] = [
  {
    protocol: "https",
    hostname: "your-images.com",
    pathname: "/**",
  },
  {
    protocol: "https",
    hostname: "i.pravatar.cc",
    pathname: "/**",
  },
];

const nextConfig = {
  images: {
    remotePatterns,
  },
};

export default withNextIntl(nextConfig);
