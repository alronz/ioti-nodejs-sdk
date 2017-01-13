"use strict";
var util = require('util');
var BaseClient = require('./BaseClient');
var requestFactory = require('../utils/requestWrapper');
var helper = require('../utils/helper');

function ShieldAssociationClient(configs) {
  BaseClient.call(this, configs);

  this.configs = {
    credentials: this.getCredentials(),
    baseUrl: this.baseUrl
  }
}
util.inherits(ShieldAssociationClient, BaseClient);

// Creates a user to shield association in the system. Admin access required.
ShieldAssociationClient.prototype.createShieldAssociation = function (shieldAssociation, callback) {

  if (!helper.isDefined(shieldAssociation)) {
    return new Error('[ShieldAssociationClient:createShieldAssociation] Missing parameters:', 'shieldAssociation');
  }

  var parameters = {
    options: {
      url: this.baseUrl + '/shieldassociation',
      method: 'POST',
      json: true,
      body: shieldAssociation
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};

// Returns the shield association with the specified id. Dashboard access level required.
ShieldAssociationClient.prototype.getShieldAssociationsPerId = function (shieldAssociationId, callback) {

  if (!helper.isDefined(shieldAssociationId)) {
    return new Error('[ShieldAssociationClient:getShieldAssociationsPerId] Missing parameters:', 'shieldAssociationId');
  }

  var parameters = {
    options: {
      url: this.baseUrl + '/shieldassociation/' + shieldAssociationId,
      method: 'GET',
      json: true
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};

// Returns all the shield associations for the authenticated user. Dashboard access level required.
ShieldAssociationClient.prototype.getShieldAssociationsForAuthUser = function (callback) {

  var parameters = {
    options: {
      url: this.baseUrl + '/shieldassociation',
      method: 'GET',
      json: true
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};

// Removes the user to shield association from the system. Admin access required.
ShieldAssociationClient.prototype.deleteShieldAssociationPerId = function (shieldAssociationId, callback) {

  if (!helper.isDefined(shieldAssociationId)) {
    return new Error('[ShieldAssociationClient:deleteShieldAssociationPerId] Missing parameters:', 'shieldAssociationId');
  }

  var parameters = {
    options: {
      url: this.baseUrl + '/shieldassociation/' + shieldAssociationId,
      method: 'DELETE',
      json: true
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};

// Removes all the shield associations from the system. Admin access required.
ShieldAssociationClient.prototype.deleteAllShieldAssociations = function (callback) {

  var parameters = {
    options: {
      url: this.baseUrl + '/shieldassociation',
      method: 'DELETE',
      json: true
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};

// Removes attribute {attributeName} from the shield association with the specified id. Admin access required.
ShieldAssociationClient.prototype.deleteShieldAssociationAttribute = function (shieldAssociationId, attributeName, callback) {

  if (!helper.isDefined(shieldAssociationId)) {
    return new Error('[ShieldAssociationClient:deleteShieldAssociationAttribute] Missing parameters:', 'shieldAssociationId');
  }

  if (!helper.isDefined(attributeName)) {
    return new Error('[ShieldAssociationClient:deleteShieldAssociationAttribute] Missing parameters:', 'attributeName');
  }

  var parameters = {
    options: {
      url: this.baseUrl + '/shieldassociation/' + shieldAssociationId + '/' + attributeName,
      method: 'DELETE',
      json: true
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};

// Sets attribute {attributeName} of the shield association with the specified id. The attribute is created if it does not exist. Admin access required.
ShieldAssociationClient.prototype.setShieldAssociationAttribute = function (shieldAssociationId, attributeName, attributeValue, callback) {

  if (!helper.isDefined(shieldAssociationId)) {
    return new Error('[ShieldAssociationClient:setShieldAssociationAttribute] Missing parameters:', 'shieldAssociationId');
  }

  if (!helper.isDefined(attributeName)) {
    return new Error('[ShieldAssociationClient:setShieldAssociationAttribute] Missing parameters:', 'attributeName');
  }

  if (!helper.isDefined(attributeValue)) {
    return new Error('[ShieldAssociationClient:setShieldAssociationAttribute] Missing parameters:', 'attributeValue');
  }

  var parameters = {
    options: {
      url: this.baseUrl + '/shieldassociation/' + shieldAssociationId + '/' + attributeName + '/' + attributeValue,
      method: 'POST',
      json: true
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};


// Returns all shield associations. Admin access required.
ShieldAssociationClient.prototype.getAllShieldAssociations = function (callback) {

  var parameters = {
    options: {
      url: this.baseUrl + '/shieldassociation/all',
      method: 'GET',
      json: true
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};


// Returns the shields associations for the user with the specified username. Dashboard access level required.
ShieldAssociationClient.prototype.getShieldAssociationsPerUser = function (username, callback) {

  if (!helper.isDefined(username)) {
    return new Error('[ShieldAssociationClient:getShieldAssociationsPerUser] Missing parameters:', 'username');
  }

  var parameters = {
    options: {
      url: this.baseUrl + '/shieldassociation/byuser/' + username,
      method: 'GET',
      json: true
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};

// Update shield oncloud detection for user. Admin access required.
ShieldAssociationClient.prototype.setShieldAssociationOnCloud = function (shieldAssociation, callback) {

  if (!helper.isDefined(shieldAssociation)) {
    return new Error('[ShieldAssociationClient:setShieldAssociationOnCloud] Missing parameters:', 'shieldAssociation');
  }

  var parameters = {
    options: {
      url: this.baseUrl + '/shieldassociation/oncloud',
      method: 'POST',
      json: true,
      body: shieldAssociation
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};


module.exports = ShieldAssociationClient;
