module.exports = function babelConfig(api) {
  api.cache(true)
  return {
    presets: [
      'react-app',
    ],

    env: {
      test: {
        presets: [
          'react-app',
        ],
      },
      docz: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
          '@babel/preset-flow',
        ],
      },
    },
  }
}
