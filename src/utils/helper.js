"use strict";

module.exports =
{

  isDefined: function(variable) {
    return ((typeof variable !== 'undefined') && (variable !== null) );
  },

  getMissingParams: function(params, requires) {

    var missing;

    if (!requires) {
      return null;
    } else if (!params) {
      missing = requires;
    } else {
      missing = [];

      requires.forEach(function(require) {
        if (!params[require])
          missing.push(require);
      });
    }

    return missing.length > 0 ? missing.join(', ') : null;
  }

};
