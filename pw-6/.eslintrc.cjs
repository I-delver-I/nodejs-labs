module.exports = {
	env: {
		browser: false,
		es2021: true,
	},
	extends: 'xo',
	overrides: [
		{
			extends: [
				'xo-typescript',
			],
			files: [
				'*.ts',
				'*.tsx',
			],
			rules: {
				'@typescript-eslint/indent': ['error', 4],
				"new-cap": [
					"error",
					{
						"capIsNewExceptions": [
							"Expose",
							"IsString",
							"Length"
						]
					}
				]
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
	},
};
