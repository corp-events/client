import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	typedRoutes: true,
	logging: false,
	turbopack: {
		rules: {
			"*.svg": {
				loaders: ["@svgr/webpack"],
				as: "*.js",
			},
		},
	},
};

export default nextConfig;
