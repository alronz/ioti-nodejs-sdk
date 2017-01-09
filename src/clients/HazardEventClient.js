"use strict";
var util = require('util');
var BaseClient = require('./BaseClient');
var requestFactory = require('../utils/requestWrapper');
var helper = require('../utils/helper');

function HazardEventClient(configs) {
  BaseClient.call(this, configs);

  this.configs = {
    credentials: this.getCredentials(),
    baseUrl: this.baseUrl
  }
}
util.inherits(HazardEventClient, BaseClient);

// Adds a hazard event to the system. Admin access required.
HazardEventClient.prototype.createHEvent = function (hazardEvent, callback) {

  if (!helper.isDefined(hazardEvent)) {
    return new Error('[HazardEventClient:createHEvent] Missing parameters:', 'hazardEvent');
  }

  var parameters = {
    options: {
      url: this.baseUrl + '/hazardEvent',
      method: 'POST',
      json: true,
      body: hazardEvent
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};

// Returns all the hazard events for the hazard with specified id. Dashboard access level required.
HazardEventClient.prototype.getHEventPerHEventId = function (hazardEventId, callback) {

  if (!helper.isDefined(hazardEventId)) {
    return new Error('[HazardEventClient:getHEventPerHEventId] Missing parameters:', 'hazardEventId');
  }

  var parameters = {
    options: {
      url: this.baseUrl + '/hazardEvent/byHazardId/' + hazardEventId,
      method: 'GET',
      json: true
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};

// Returns the hazard event with the specified id. Dashboard access level required.
HazardEventClient.prototype.getHEventPerId = function (id, callback) {

  if (!helper.isDefined(id)) {
    return new Error('[HazardEventClient:getHEventPerId] Missing parameters:', 'id');
  }

  var parameters = {
    options: {
      url: this.baseUrl + '/hazardEvent/byId/' + id,
      method: 'GET',
      json: true
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};

// Returns all the hazard events for the authenticated user. Dashboard access level required.
HazardEventClient.prototype.getHEventsForAuthUser = function (callback) {

  var parameters = {
    options: {
      url: this.baseUrl + '/hazardEvent',
      method: 'GET',
      json: true
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};

// Removes the hazard event with the specified id from the system. Admin access required.
HazardEventClient.prototype.deleteHEventPerId = function (hazardEventId, callback) {

  if (!helper.isDefined(hazardEventId)) {
    return new Error('[HazardEventClient:deleteHEventPerId] Missing parameters:', 'hazardEventId');
  }

  var parameters = {
    options: {
      url: this.baseUrl + '/hazardEvent/byId/' + hazardEventId,
      method: 'DELETE',
      json: true
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};

// Removes all the hazard events for the specified user from the system. Admin access required.
HazardEventClient.prototype.deleteHEventsPerUser = function (username, callback) {

  if (!helper.isDefined(username)) {
    return new Error('[HazardEventClient:deleteHEventsPerUser] Missing parameters:', 'username');
  }

  var parameters = {
    options: {
      url: this.baseUrl + '/hazardEvent/byUsername/' + username,
      method: 'DELETE',
      json: true
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};

// Removes attribute {attributeName} name from the hazard event with the specified id. Admin access required.
HazardEventClient.prototype.deleteHEventAttribute = function (hazardEventId, attributeName, callback) {

  if (!helper.isDefined(hazardEventId)) {
    return new Error('[HazardEventClient:deleteHEventAttribute] Missing parameters:', 'hazardEventId');
  }

  if (!helper.isDefined(attributeName)) {
    return new Error('[HazardEventClient:deleteHEventAttribute] Missing parameters:', 'attributeName');
  }

  var parameters = {
    options: {
      url: this.baseUrl + '/hazardEvent/' + hazardEventId + '/' + attributeName,
      method: 'DELETE',
      json: true
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};

// Sets attribute {attributeName} for the hazard event with the specified id. The attribute is created if it does not exist. Admin access required.
HazardEventClient.prototype.setHEventAttribute = function (hazardEventId, attributeName, attributeValue, callback) {

  if (!helper.isDefined(hazardEventId)) {
    return new Error('[HazardEventClient:setHEventAttribute] Missing parameters:', 'hazardEventId');
  }

  if (!helper.isDefined(attributeName)) {
    return new Error('[HazardEventClient:setHEventAttribute] Missing parameters:', 'attributeName');
  }

  if (!helper.isDefined(attributeValue)) {
    return new Error('[HazardEventClient:setHEventAttribute] Missing parameters:', 'attributeValue');
  }

  var parameters = {
    options: {
      url: this.baseUrl + '/hazardEvent/' + hazardEventId + '/' + attributeName + '/' + attributeValue,
      method: 'POST',
      json: true
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};


// Returns all hazard events. Admin access required.
HazardEventClient.prototype.getAllHEvents = function (callback) {

  var parameters = {
    options: {
      url: this.baseUrl + '/hazardEvent/all',
      method: 'GET',
      json: true
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};


// Returns the aggregated hazard events over time.
HazardEventClient.prototype.getHEventsAggregated = function (queryParams, callback) {

  if (!helper.isDefined(queryParams)) {
    return new Error('[HazardEventClient:getHEventsAggregated] Missing parameters:', 'queryParams');
  }

  var parameters = {
    options: {
      url: this.baseUrl + '/hazardEvent/aggregated',
      method: 'GET',
      json: true,
      qs: queryParams
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};

// Updates the status of the hazardEvent with the specified id. Admin access required.
HazardEventClient.prototype.updateHEventValidationType = function (hazardEventId, validationType, callback) {

  if (!helper.isDefined(hazardEventId)) {
    return new Error('[HazardEventClient:updateHEventValidationType] Missing parameters:', 'hazardEventId');
  }

  if (!helper.isDefined(validationType)) {
    return new Error('[HazardEventClient:updateHEventValidationType] Missing parameters:', 'validationType');
  }

  var parameters = {
    options: {
      url: this.baseUrl + '/hazardEvent/' + hazardEventId + '/validationType/' + validationType,
      method: 'PUT',
      json: true
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};


module.exports = HazardEventClient;
