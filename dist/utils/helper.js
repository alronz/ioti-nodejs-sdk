(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.helper = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  module.exports = {

    isDefined: function isDefined(variable) {
      return typeof variable !== 'undefined' && variable !== null;
    },

    getMissingParams: function getMissingParams(params, requires) {

      var missing;

      if (!requires) {
        return null;
      } else if (!params) {
        missing = requires;
      } else {
        missing = [];

        requires.forEach(function (require) {
          if (!params[require]) missing.push(require);
        });
      }

      return missing.length > 0 ? missing.join(', ') : null;
    }

  };
});