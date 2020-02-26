/**
 * componentExists
 *
 * Check whether the given component exist in either the components or pages directory
 */

const fs = require('fs');
const path = require('path');

const conteiner = fs.readdirSync(path.join(__dirname, '../../../app/pages'));
const atomic = fs.readdirSync(path.join(__dirname, '../../../app/components/atoms'));

const molecular = fs.readdirSync(path.join(__dirname, '../../../app/components/molecules'));

const organism = fs.readdirSync(path.join(__dirname, '../../../app/components/organisms'));

const components = conteiner
  .concat(atomic)
  .concat(molecular)
  .concat(organism);

function componentExists(comp) {
  return components.indexOf(comp) >= 0;
}

module.exports = componentExists;
