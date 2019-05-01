module.exports = {
  extends: '@roseys/eslint-config',
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    strict: [0, 'safe'],
    'no-console': 0,
  },
}
