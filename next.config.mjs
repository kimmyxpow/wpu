/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/**'
            }
        ]
    }
}

export default nextConfig
