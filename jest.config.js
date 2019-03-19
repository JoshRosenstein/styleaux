module.exports = {
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  watchPlugins: ['jest-watch-lerna-packages'],
  testEnvironment: 'node',
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!{**/*.d.ts'],

  //  modulePathIgnorePatterns: ['/__fixtures__/'],
  // roots: ['<rootDir>/packages'],
  //testRunner: 'jest-circus/runner',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: [
    '**/__tests__/**/*.{js,jsx,ts,tsx}',
    '**/?(*.)(spec|test).{js,jsx,ts,tsx}',
  ],
}
