/* eslint-disable @typescript-eslint/no-require-imports */
const withNextIntl = require("next-intl/plugin")();

module.exports = withNextIntl({
  // config Next.js biasa
  experimental: {
    serverActions: true,
  },
});
