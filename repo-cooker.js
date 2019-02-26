/* eslint-disable */
/* tslint-disable */

var Cooker = require('repo-cooker')

modules.exports = {
  cooker: Cooker(process.argv, {
    path: '.',
    packagesGlobs: ['packages/*'],
  }),
}
