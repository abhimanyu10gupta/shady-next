/** @type {import('next').NextConfig} */
const nextConfig = {    
    typescript: {
    ignoreBuildErrors: true
},
eslint: {
    ignoreDuringBuilds:true
},
images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        pathname: "f/*",
      },
    ],
  },
};

export default nextConfig;
