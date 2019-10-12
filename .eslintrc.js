module.exports = {
	extends: [
		"airbnb",
		"prettier",
		"prettier/react"
	],
	plugins: [
		"prettier"
	],
	env: {
		browser: true,
		commonjs: true,
		node: true,
		jest: true,
	},
	rules: {
		"react/jsx-one-expression-per-line": "off",
		"react/no-unescaped-entities": "off",
    "no-underscore-dangle": "off",
    "no-plusplus": "off",
		quotes: [
			"error",
			"single",
			{
				allowTemplateLiterals: true,
			},
		],
		"prettier/prettier": [
			"error",
			{
				trailingComma: "es5",
				singleQuote: true,
				printWidth: 80,
				useTabs: true
			}
		],
	}
}
