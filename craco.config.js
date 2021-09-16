// craco.config.js
module.exports = {
	style: {
		postcss: {
			plugins: [
				require("tailwindcss"),
				require("autoprefixer"),
			],
		},
	},
	plugins: [
		{
			plugin: require("craco-alias"),
			options: {
				source: "jsconfig",
				jsConfigPath: "jsconfig.paths.json",
			},
		},
	],
}