module.exports = {
  extends: ['plugin:import/errors', 'prettier'],
  plugins: ['import', 'prettier', 'babel'],
  parser: 'babel-eslint',

  rules: {
    'arrow-body-style': 2,
    'import/no-duplicates': 2,
    'import/order': 0,
    'no-console': 1,
    'no-unused-vars': 2,
    'prettier/prettier': [
      2,
      {
        bracketSpacing: false,
        printWidth: 80,
        singleQuote: true,
        semi: false,
        trailingComma: 'all',
      },
    ],
  },
}
