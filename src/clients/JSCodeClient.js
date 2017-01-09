"use strict";
var util = require('util');
var BaseClient = require('./BaseClient');
var requestFactory = require('../utils/requestWrapper');
var helper = require('../utils/helper');

function JSCodeClient(configs) {
  BaseClient.call(this, configs);

  this.configs = {
    credentials: this.getCredentials(),
    baseUrl: this.baseUrl
  }
}
util.inherits(JSCodeClient, BaseClient);

// Adds Java Script code to the system. The code must be associated with a shield to become operational. Admin access required.
JSCodeClient.prototype.createJSCode = function (jsCode, callback) {

  if (!helper.isDefined(jsCode)) {
    return new Error('[JSCodeClient:createJSCode] Missing parameters:', 'jsCode');
  }

  var parameters = {
    options: {
      url: this.baseUrl + '/jscode',
      method: 'POST',
      json: true,
      body: jsCode
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};

// Update Java Script code from shielddefinitions directory. Admin access required.
JSCodeClient.prototype.updateAll = function (callback) {

  var parameters = {
    options: {
      url: this.baseUrl + '/jscode/updateall',
      method: 'POST',
      json: true
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};

// Returns the Java Script shield code for the shield with the specified uuid. Admin access required.
JSCodeClient.prototype.getJSCodesPerShieldUUUID = function (shieldUUUID, queryParams, callback) {

  if (!helper.isDefined(shieldUUUID)) {
    return new Error('[JSCodeClient:getJSCodesPerShieldUUUID] Missing parameters:', 'shieldUUUID');
  }

  var parameters = {
    options: {
      url: this.baseUrl + '/jscode/byuuid/' + shieldUUUID,
      method: 'GET',
      json: true,
      qs: queryParams
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};


// Returns all the common Java Script code from the database. This code consists of helper functions and utilities that can be used when writing shields. Admin access required.
JSCodeClient.prototype.getCommonJSCodes = function (queryParams, callback) {

  var parameters = {
    options: {
      url: this.baseUrl + '/jscode/common',
      method: 'GET',
      json: true,
      qs: queryParams
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};

// Adds Java Script code to the system. The code must be associated with a shield to become operational. Admin access required.
JSCodeClient.prototype.getAllJSCodes = function (queryParams, callback) {

  var parameters = {
    options: {
      url: this.baseUrl + '/jscode',
      method: 'GET',
      json: true,
      qs: queryParams
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};


// Returns the Java Script code for all the shields associated with the specified user. Dashboard access level required.
JSCodeClient.prototype.getJSCodesPerUser = function (username, queryParams, callback) {

  if (!helper.isDefined(username)) {
    return new Error('[JSCodeClient:getJSCodesPerUser] Missing parameters:', 'username');
  }

  var parameters = {
    options: {
      url: this.baseUrl + '/jscode/byuser/' + username,
      method: 'GET',
      json: true,
      qs: queryParams
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};

// Updates the Java Script code specified by id. The ID of the shield code must be provided, not the ID of associated shield. Admin access required
JSCodeClient.prototype.updateJSCode = function (jsCodeId, code, callback) {

  if (!helper.isDefined(jsCodeId)) {
    return new Error('[JSCodeClient:updateJSCode] Missing parameters:', 'jsCodeId');
  }

  if (!helper.isDefined(code)) {
    return new Error('[JSCodeClient:updateJSCode] Missing parameters:', 'code');
  }

  var parameters = {
    options: {
      url: this.baseUrl + '/jscode/' + jsCodeId + '/code/' + code,
      method: 'PUT',
      json: true
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};


module.exports = JSCodeClient;
