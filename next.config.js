const environment = process.env.FINAL_ENV;
const netlifyHost = environment === 'production'? process.env.NEXT_PUBLIC_NETLIFY_HOST && `https://${process.env.NEXT_PUBLIC_NETLIFY_HOST}`: '';

const nextConfig = {
reactStrictMode: true,
trailingSlash: true,
assetPrefix: netlifyHost,
}
 
module.exports = nextConfig
 