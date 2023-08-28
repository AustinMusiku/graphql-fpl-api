module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:prettier/recommended',
		'plugin:@typescript-eslint/recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['@typescript-eslint', 'prettier'],
	rules: {
		'prettier/prettier': ['error']
	},
	overrides: [
		{
			files: ['*.graphql'],
			parser: '@graphql-eslint/eslint-plugin',
			plugins: ['@graphql-eslint'],
			rules: {
				'@graphql-eslint/alphabetize': [
					'error',
					{
						fields: ['ObjectTypeDefinition']
					}
				]
			}
		}
	]
}
