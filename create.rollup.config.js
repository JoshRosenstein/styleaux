const path = require('path')

const babel = require('rollup-plugin-babel')
const resolve = require('rollup-plugin-node-resolve')
const autoExternal = require('rollup-plugin-auto-external')

exports.default = function createRollup(cwd) {
  const nodeI = path.join(cwd, 'dist-src/index.js')
  const nodeO = path.join(cwd, 'dist-node/index.js')

  const buildnode = {
    input: nodeI,
    output: {
      file: nodeO,
      format: 'cjs',
      exports: 'named',
    },
    plugins: [
      autoExternal(),
      resolve({
        customResolveOptions: {
          moduleDirectory: 'dist-src',
        },
      }),
      babel({
        babelrc: false,
        presets: [
          ['@babel/env', {modules: false, targets: {node: '6'}, spec: true}],
        ],
        plugins: [
          '@babel/syntax-import-meta',
          'babel-plugin-dynamic-import-node-babel-7',
          '@babel/syntax-dynamic-import',
        ],
      }),
    ],
  }

  const webI = nodeI
  const webO = path.join(cwd, 'dist-web/index.js')
  const buildweb = {
    input: webI,
    output: {
      file: webO,
      format: 'esm',
      //  exports: 'named',
    },
    plugins: [
      autoExternal(),
      resolve(),
      babel({
        compact: false,
        babelrc: false,
        presets: [
          [
            '@babel/env',
            {modules: false, targets: {esmodules: true}, spec: true},
          ],
        ],
        plugins: ['@babel/syntax-dynamic-import', '@babel/syntax-import-meta'],
      }),
    ],
  }

  return [buildnode, buildweb]
}
