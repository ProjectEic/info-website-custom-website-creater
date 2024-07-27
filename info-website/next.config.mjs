/** @type {import("next").NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
                port: "",
                pathname: "**",
            },
        ],
    },
    assetPrefix: '',
    basePath: '/info',
};

export default nextConfig;
