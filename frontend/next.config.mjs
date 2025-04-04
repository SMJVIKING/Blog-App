/** @type {import('next').NextConfig} */

const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"http",
                hostname:"localhost",
                port:"5000",
                pathname:"/uploads/**",
                // pathname can't be an array
            },
        ],
    },
    logging:{
        fetches:{
            fullUrl:true,
        }
    },
    // experimental: {
    //     ppr: 'incremental',
    //   }
};

export default nextConfig;