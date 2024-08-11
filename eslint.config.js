export default [
	{
		files: ['src/**/*.js'],
		extends: ['eslint:recommended', 'prettier'],
		plugins: ['prettier', 'simple-import-sort', 'import'],
		rules: {
			'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
			'react-hooks/exhaustive-deps': 'off',

			// import sort Config
			'simple-import-sort/imports': 'error',
			'simple-import-sort/exports': 'error',
			'import/first': 'error',
			'import/newline-after-import': 'error',
			'import/no-duplicates': 'error',

			// Before
			'prefer-destructuring': [
				'error',
				{
					VariableDeclarator: {
						array: false,
						object: true,
					},
					AssignmentExpression: {
						array: false,
						object: false,
					},
				},
				{
					enforceForRenamedProperties: false,
				},
			],
			'react/jsx-filename-extension': [
				'error',
				{ extensions: ['.js', '.jsx', '.tsx', '.ts'] },
			],
			'prettier/prettier': [
				'error',
				{
					semi: true,
					trailingComma: 'es5',
					singleQuote: true,
					printWidth: 80,
					tabWidth: 2,
					useTabs: true,
				},
			],
			'react/jsx-uses-react': 'error',
			'react/jsx-wrap-multilines': [
				'error',
				{
					prop: 'ignore',
				},
			],
			'react/button-has-type': ['error'],
			'no-console': [
				'error',
				{
					allow: ['warn', 'error', 'info'],
				},
			],
			'no-restricted-imports': ['error'],
		},
		parserOptions: {
			sourceType: 'module',
			ecmaVersion: 'latest',
		},
	},
];
