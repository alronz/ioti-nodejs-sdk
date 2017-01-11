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
    global.ShieldClient = mod.exports;
  }
})(this, function (exports) {
  "use strict";
  var util = require('util');
  var BaseClient = require('./BaseClient');
  var requestFactory = require('../utils/requestWrapper');
  var helper = require('../utils/helper');

  function ShieldClient(configs) {
    BaseClient.call(this, configs);

    this.configs = {
      credentials: this.getCredentials(),
      baseUrl: this.baseUrl
    };
  }
  util.inherits(ShieldClient, BaseClient);

  // Adds a new shield to the system. A shield code and users must be associated with the shield for it to become functional. Admin access required.
  ShieldClient.prototype.createShield = function (shield, callback) {

    if (!helper.isDefined(shield)) {
      return new Error('[ShieldClient:createShield] Missing parameters:', 'shield');
    }

    var parameters = {
      options: {
        url: this.baseUrl + '/shield',
        method: 'POST',
        json: true,
        body: shield
      },
      withCSRF: true,
      configs: this.configs
    };

    return requestFactory(parameters, callback);
  };

  // Returns the shield with the specified id. Dashboard access level required.
  ShieldClient.prototype.getShieldsPerId = function (shieldId, callback) {

    if (!helper.isDefined(shieldId)) {
      return new Error('[ShieldClient:getShieldsPerId] Missing parameters:', 'shieldId');
    }

    var parameters = {
      options: {
        url: this.baseUrl + '/shield/' + shieldId,
        method: 'GET',
        json: true
      },
      withCSRF: true,
      configs: this.configs
    };

    return requestFactory(parameters, callback);
  };

  // Returns the shields associated with user {username}.
  ShieldClient.prototype.getShieldsPerUser = function (username, callback) {

    if (!helper.isDefined(username)) {
      return new Error('[ShieldClient:getShieldsPerUser] Missing parameters:', 'username');
    }

    var parameters = {
      options: {
        url: this.baseUrl + '/shield/byusername/' + username,
        method: 'GET',
        json: true
      },
      withCSRF: true,
      configs: this.configs
    };

    return requestFactory(parameters, callback);
  };

  // Returns the shield with the specified uuid. Dashboard access level required.
  ShieldClient.prototype.getShieldsPerUUID = function (uuid, callback) {

    if (!helper.isDefined(uuid)) {
      return new Error('[ShieldClient:getShieldsPerUUID] Missing parameters:', 'uuid');
    }

    var parameters = {
      options: {
        url: this.baseUrl + '/shield/byuuid/' + uuid,
        method: 'GET',
        json: true
      },
      withCSRF: true,
      configs: this.configs
    };

    return requestFactory(parameters, callback);
  };

  // Removes the shield with the specified id from the system. Admin access required.
  ShieldClient.prototype.deleteShieldPerId = function (shieldId, callback) {

    if (!helper.isDefined(shieldId)) {
      return new Error('[ShieldClient:deleteShieldPerId] Missing parameters:', 'shieldId');
    }

    var parameters = {
      options: {
        url: this.baseUrl + '/shield/' + shieldId,
        method: 'DELETE',
        json: true
      },
      withCSRF: true,
      configs: this.configs
    };

    return requestFactory(parameters, callback);
  };

  // Removes all shields from the system. Admin access required.
  ShieldClient.prototype.deleteAllShields = function (callback) {

    var parameters = {
      options: {
        url: this.baseUrl + '/shield',
        method: 'DELETE',
        json: true
      },
      withCSRF: true,
      configs: this.configs
    };

    return requestFactory(parameters, callback);
  };

  // Deletes attribute {attributeName} from the shield with the specified id. Admin access required.
  ShieldClient.prototype.deleteShieldAttribute = function (shieldId, attributeName, callback) {

    if (!helper.isDefined(shieldId)) {
      return new Error('[ShieldClient:deleteShieldAttribute] Missing parameters:', 'shieldId');
    }

    if (!helper.isDefined(attributeName)) {
      return new Error('[ShieldClient:deleteShieldAttribute] Missing parameters:', 'attributeName');
    }

    var parameters = {
      options: {
        url: this.baseUrl + '/shield/' + shieldId + '/' + attributeName,
        method: 'DELETE',
        json: true
      },
      withCSRF: true,
      configs: this.configs
    };

    return requestFactory(parameters, callback);
  };

  // Sets attribute {attributeName} of the shield with the specified {id}. The attribute is created if it does not exist. Admin access required.
  ShieldClient.prototype.setShieldAttribute = function (shieldId, attributeName, attributeValue, callback) {

    if (!helper.isDefined(shieldId)) {
      return new Error('[ShieldClient:setShieldAttribute] Missing parameters:', 'shieldId');
    }

    if (!helper.isDefined(attributeName)) {
      return new Error('[ShieldClient:setShieldAttribute] Missing parameters:', 'attributeName');
    }

    if (!helper.isDefined(attributeValue)) {
      return new Error('[ShieldClient:setShieldAttribute] Missing parameters:', 'attributeValue');
    }

    var parameters = {
      options: {
        url: this.baseUrl + '/shield/' + shieldId + '/' + attributeName + '/' + attributeValue,
        method: 'POST',
        json: true
      },
      withCSRF: true,
      configs: this.configs
    };

    return requestFactory(parameters, callback);
  };

  // Returns all the shields in the system. Dashboard access level required.
  ShieldClient.prototype.getAllShields = function (callback) {

    var parameters = {
      options: {
        url: this.baseUrl + '/shield/all',
        method: 'GET',
        json: true
      },
      withCSRF: true,
      configs: this.configs
    };

    return requestFactory(parameters, callback);
  };

  module.exports = ShieldClient;
});