module.exports = {
  transform: {
    '\\.ts$': 'ts-jest',
  },
  watchPlugins: ['jest-watch-lerna-packages'],
  testEnvironment: 'node',
  collectCoverageFrom: ['{packages}/**/*.js'],
  //  modulePathIgnorePatterns: ['/__fixtures__/'],
  // roots: ['<rootDir>/packages'],
  //testRunner: 'jest-circus/runner',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: '((\\.|/)(test|spec))\\.ts?$',
}
