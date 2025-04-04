import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**.clerk.com', // Allow all subdomains of clerk.com
				port: '',
				pathname: '/**', // Allow all paths
			},
		],
	},
}

export default nextConfig
