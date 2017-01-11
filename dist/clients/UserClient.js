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
    global.UserClient = mod.exports;
  }
})(this, function (exports) {
  "use strict";
  var util = require('util');
  var BaseClient = require('./BaseClient');
  var requestFactory = require('../utils/requestWrapper');
  var helper = require('../utils/helper');

  function UserClient(configs) {
    BaseClient.call(this, configs);

    this.configs = {
      credentials: this.getCredentials(),
      baseUrl: this.baseUrl
    };
  }
  util.inherits(UserClient, BaseClient);

  // Adds a user to the system. A record will be created in the database and in the associated IoT Platform service . Returns the IoT Platform registeration result.
  UserClient.prototype.createUser = function (user, callback) {

    if (!helper.isDefined(user)) {
      return new Error('[UserClient:createUser] Missing parameters:', 'user');
    }

    var parameters = {
      options: {
        url: this.baseUrl + '/user',
        method: 'POST',
        json: true,
        body: user
      },
      withCSRF: true,
      configs: this.configs
    };

    return requestFactory(parameters, callback);
  };

  // Returns the information for the authenticated user. Dashboard access level required.
  UserClient.prototype.getAuthUser = function (callback) {

    var parameters = {
      options: {
        url: this.baseUrl + '/user',
        method: 'GET',
        json: true
      },
      withCSRF: true,
      configs: this.configs
    };

    return requestFactory(parameters, callback);
  };

  // Authenticates using Basic Authentication.
  UserClient.prototype.checkUserLogin = function (callback) {

    var parameters = {
      options: {
        url: this.baseUrl + '/checkuser/login',
        method: 'GET',
        json: true
      },
      withCSRF: true,
      configs: this.configs
    };

    return requestFactory(parameters, callback);
  };

  // Logout the authenticated user.
  UserClient.prototype.checkUserLogout = function (callback) {

    var parameters = {
      options: {
        url: this.baseUrl + '/checkuser/logout',
        method: 'GET',
        json: true
      },
      withCSRF: true,
      configs: this.configs
    };

    return requestFactory(parameters, callback);
  };

  // Removes the user with the specified id from the system. The user is deleted from the database and from the IoT Platform. Admin access required.
  UserClient.prototype.deleteUserPerUserName = function (username, callback) {

    if (!helper.isDefined(username)) {
      return new Error('[UserClient:deleteUserPerUserName] Missing parameters:', 'username');
    }

    var parameters = {
      options: {
        url: this.baseUrl + '/user/' + username,
        method: 'DELETE',
        json: true
      },
      withCSRF: true,
      configs: this.configs
    };

    return requestFactory(parameters, callback);
  };

  // Removes attribute {attributeName} from the user with the specified username. Admin access required.
  UserClient.prototype.deleteUserAttribute = function (userName, attributeName, callback) {

    if (!helper.isDefined(userName)) {
      return new Error('[UserClient:deleteUserAttribute] Missing parameters:', 'userName');
    }

    if (!helper.isDefined(attributeName)) {
      return new Error('[UserClient:deleteUserAttribute] Missing parameters:', 'attributeName');
    }

    var parameters = {
      options: {
        url: this.baseUrl + '/user/attribute/' + userName + '/' + attributeName,
        method: 'DELETE',
        json: true
      },
      withCSRF: true,
      configs: this.configs
    };

    return requestFactory(parameters, callback);
  };

  // Sets attribute {attributeName} for the user with the specified username. The attribute is created if it does not exist. Admin access required.
  UserClient.prototype.setUserAttribute = function (userName, attributeName, attributeValue, callback) {

    if (!helper.isDefined(userName)) {
      return new Error('[UserClient:setUserAttribute] Missing parameters:', 'userName');
    }

    if (!helper.isDefined(attributeName)) {
      return new Error('[UserClient:setUserAttribute] Missing parameters:', 'attributeName');
    }

    if (!helper.isDefined(attributeValue)) {
      return new Error('[UserClient:setUserAttribute] Missing parameters:', 'attributeValue');
    }

    var parameters = {
      options: {
        url: this.baseUrl + '/user/attribute/' + userName + '/' + attributeName + '/' + attributeValue,
        method: 'POST',
        json: true
      },
      withCSRF: true,
      configs: this.configs
    };

    return requestFactory(parameters, callback);
  };

  // Set the access level for the user with the specified username. The access level determines what data is accesisble by the user. Admin access level is 3 and dashboard is 10. Admin access level required.
  UserClient.prototype.setUserAccessLevel = function (userName, accessLevel, callback) {

    if (!helper.isDefined(userName)) {
      return new Error('[UserClient:setUserAccessLevel] Missing parameters:', 'userName');
    }

    if (!helper.isDefined(accessLevel)) {
      return new Error('[UserClient:setUserAccessLevel] Missing parameters:', 'accessLevel');
    }

    var parameters = {
      options: {
        url: this.baseUrl + '/user/attribute/' + userName + '/accessLevel/' + accessLevel,
        method: 'POST',
        json: true
      },
      withCSRF: true,
      configs: this.configs
    };

    return requestFactory(parameters, callback);
  };

  // Returns all the users in the system. Admin access required.
  UserClient.prototype.getAllUsers = function (callback) {

    var parameters = {
      options: {
        url: this.baseUrl + '/user/all',
        method: 'GET',
        json: true
      },
      withCSRF: true,
      configs: this.configs
    };

    return requestFactory(parameters, callback);
  };

  // Returns the information for the user with the specified username. Dashboard access level required.
  UserClient.prototype.getUserPerUserName = function (userName, callback) {

    if (!helper.isDefined(userName)) {
      return new Error('[UserClient:getUserPerUserName] Missing parameters:', 'userName');
    }

    var parameters = {
      options: {
        url: this.baseUrl + '/user/name/' + userName,
        method: 'GET',
        json: true
      },
      withCSRF: true,
      configs: this.configs
    };

    return requestFactory(parameters, callback);
  };

  // Returns all the sensors for all the users.
  UserClient.prototype.getUserSensors = function (callback) {

    var parameters = {
      options: {
        url: this.baseUrl + '/user/sensors/getAllUserSensors',
        method: 'GET',
        json: true
      },
      withCSRF: true,
      configs: this.configs
    };

    return requestFactory(parameters, callback);
  };

  // Updates the device if for the user with the specified id.
  UserClient.prototype.updateUserDevice = function (userName, deviceId, callback) {

    if (!helper.isDefined(userName)) {
      return new Error('[UserClient:updateUserDevice] Missing parameters:', 'userName');
    }

    if (!helper.isDefined(deviceId)) {
      return new Error('[UserClient:updateUserDevice] Missing parameters:', 'deviceId');
    }

    var parameters = {
      options: {
        url: this.baseUrl + '/user/device/' + userName + '/deviceID/' + deviceId,
        method: 'PUT',
        json: true
      },
      withCSRF: true,
      configs: this.configs
    };

    return requestFactory(parameters, callback);
  };

  module.exports = UserClient;
});