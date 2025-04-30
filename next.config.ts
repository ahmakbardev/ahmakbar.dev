import createNextIntlPlugin from "next-intl/plugin";
// import type { RemotePattern } from "next/dist/shared/lib/image-config";

const withNextIntl = createNextIntlPlugin();
export default withNextIntl({});

// const remotePatterns: RemotePattern[] = [
//   {
//     protocol: "https",
//     hostname: "your-images.com",
//     pathname: "/**",
//   },
//   {
//     protocol: "https",
//     hostname: "i.pravatar.cc",
//     pathname: "/**",
//   },
// ];
