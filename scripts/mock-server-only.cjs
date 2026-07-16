/**
 * Allow tsx CLI scripts to import Next server-only modules.
 * Usage: node --require ./scripts/mock-server-only.cjs ...
 */
const Module = require('module');
const originalLoad = Module._load;
Module._load = function (request, parent, isMain) {
  if (request === 'server-only') {
    return {};
  }
  return originalLoad.apply(this, arguments);
};
