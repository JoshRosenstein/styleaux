module.exports = {
  // transform: {
  //   //  '\\.css$': '<rootDir>/test/styleTransform.js',
  //   '^.+\\.js?$': 'babel-jest'
  // },
  clearMocks: true,
  testEnvironment: 'node',
  collectCoverageFrom: ['{packages}/**/*.js'],
  modulePathIgnorePatterns: ['/__fixtures__/'],
  roots: ['<rootDir>/packages'],
  testRunner: 'jest-circus/runner',
}
