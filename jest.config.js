module.exports = {
  preset: '@roseys/jest-preset',
  watchPlugins: ['jest-watch-select-projects'],
  projects: ['<rootDir>/packages/*'],
};
