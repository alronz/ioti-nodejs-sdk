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
    global.BaseClient = mod.exports;
  }
})(this, function (exports) {
  "use strict";
  var helper = require('../utils/helper');

  function BaseClient(configs) {

    if (!(this instanceof BaseClient)) {
      throw new Error('"new" keyword required to create IoTI instances');
    }

    if (!helper.isDefined(configs)) {
      throw new Error('[BaseClient:constructor] configs are missing');
    }
    if (!helper.isDefined(configs.userid)) {
      throw new Error('[BaseClient:constructor] configs must contain userid');
    }
    if (!helper.isDefined(configs.password)) {
      throw new Error('[BaseClient:constructor] configs must contain password');
    }
    if (!helper.isDefined(configs.uri)) {
      throw new Error('[BaseClient:constructor] configs must contain uri');
    }

    this.user = configs.userid;
    this.pass = configs.password;
    this.baseUrl = configs.uri.replace(/\/$/, "");
  }

  BaseClient.prototype.getConfigs = function () {
    return {
      user: this.user,
      pass: this.pass,
      baseUrl: this.baseUrl
    };
  };

  BaseClient.prototype.getCredentials = function () {
    return {
      user: this.user,
      pass: this.pass
    };
  };

  module.exports = BaseClient;
});