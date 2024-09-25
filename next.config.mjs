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
        // pathname: "f/" + process.env.UPLOADTHING_SECRET + "/*",
      },
    ],
  },
};

export default nextConfig;
