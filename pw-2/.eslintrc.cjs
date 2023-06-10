module.exports = {
	env: {
		browser: false,
		es2021: true,
	},
	extends: [
		'xo',
		'plugin:sonarjs/recommended'
	],
	plugins: [
		'sonarjs'
	],
	overrides: [
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
	},
};
