/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: '/:path*',
				destination: `https://auth-api.stage-travel.com/:path*`,
			},
		]
	},
};

module.exports = nextConfig
