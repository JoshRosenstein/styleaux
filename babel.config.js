'use strict'

module.exports = api => {
  const isTest = api.env('test')

  api.cache(() => JSON.stringify({isTest}))

  const presets = ['@babel/react', '@babel/typescript']
  const plugins = []

  if (isTest) {
    presets.push(['@babel/env', {targets: {node: true}}])
  } else {
    // plugins.push([
    //   ('transform-module-imports',
    //   {
    //     'typed-is': {
    //       // eslint-disable-next-line no-template-curly-in-string
    //       transform: 'typed-is/lib/${member}',
    //       preventFullImport: true,
    //     },
    //   }),
    // ])
  }

  return {presets, plugins}
}
