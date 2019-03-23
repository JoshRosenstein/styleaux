
module.exports = {
  name: '@styleaux/styles-base',
  mode: 'modules',
  hideGenerator: true,
  readme: 'none',
  includes: './',
  theme: 'markdown',
  exclude: [
    '**/__tests__/**/*',
    '**/__test_utils__/**/*',
    '**/*.spec.ts',
    '**/*.test.ts',
    '**/index.ts',
    '*/index.ts',
  ],
  out: './docs',
  //mode: 'file',
  excludeExternals: true,
  excludeNotExported: true,
  excludePrivate: true,
}
