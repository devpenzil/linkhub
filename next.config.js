/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    ENDPOINT: process.env.ENDPOINT,
    PROJECTID: process.env.PROJECTID,
    COLLECTIONID: process.env.COLLECTIONID,
    BUCKETID: process.env.BUCKETID,
  },
};

module.exports = nextConfig;
