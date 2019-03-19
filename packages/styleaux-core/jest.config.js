module.exports = {
  transform: {
    '\\.ts$': 'ts-jest',
  },
  testEnvironment: 'node',
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  //collectCoverageFrom: ['{src}/**/*.js'],
  //  modulePathIgnorePatterns: ['/__fixtures__/'],
  // roots: ['<rootDir>/packages'],
  //testRunner: 'jest-circus/runner',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: '((\\.|/)(test|spec))\\.ts?$',
}
