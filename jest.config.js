module.exports = {
  transform: {
    '\\.ts$': 'ts-jest',
  },
  watchPlugins: ['jest-watch-lerna-packages'],
  testEnvironment: 'node',
  collectCoverageFrom: ['{src}/**/*.js'],
   modulePathIgnorePatterns: ['/next/'],
  // roots: ['<rootDir>/packages'],
  //testRunner: 'jest-circus/runner',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: '((\\.|/)(test|spec))\\.ts?$',
}
