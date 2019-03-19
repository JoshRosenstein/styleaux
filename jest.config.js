module.exports = {
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  watchPlugins: ['jest-watch-lerna-packages'],
  testEnvironment: 'node',
  collectCoverageFrom: ['{src}/**/*.{js,jsx,ts,tsx}', '!{src}/**/*.d.ts'],

  //  modulePathIgnorePatterns: ['/__fixtures__/'],
  // roots: ['<rootDir>/packages'],
  //testRunner: 'jest-circus/runner',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: '((\\.|/)(test|spec))\\.ts?$'


}
