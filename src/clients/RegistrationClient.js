"use strict";
var util = require('util');
var BaseClient = require('./BaseClient');
var requestFactory = require('../utils/requestWrapper');
var helper = require('../utils/helper');

function RegistrationClient(configs) {
  BaseClient.call(this, configs);

  this.configs = {
    credentials: this.getCredentials(),
    baseUrl: this.baseUrl
  }
}
util.inherits(RegistrationClient, BaseClient);

// Registers a new device to the system adding the device tokens in the database.
RegistrationClient.prototype.createRegistrationDevice = function (device, callback) {

  if (!helper.isDefined(device)) {
    return new Error('[RegistrationClient:createRegistrationDevice] Missing parameters:', 'device');
  }

  var parameters = {
    options: {
      url: this.baseUrl + '/registration/device',
      method: 'POST',
      json: true,
      body: device
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};

// Returns the token for the device with the specified id.
RegistrationClient.prototype.getRegistrationDevicePerId = function (deviceId, callback) {

  if (!helper.isDefined(deviceId)) {
    return new Error('[RegistrationClient:getRegistrationDevicePerId] Missing parameters:', 'deviceId');
  }

  var parameters = {
    options: {
      url: this.baseUrl + '/registration/device/byid/' + deviceId,
      method: 'GET',
      json: true
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};

// Returns all the tokens registered for the user with the specified username.
RegistrationClient.prototype.getRegistrationsPerUser = function (username, callback) {

  var parameters = {
    options: {
      url: this.baseUrl + '/registration/device/byusername/' + username,
      method: 'GET',
      json: true
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};

// Returns all the device tokens for the specified provider.
RegistrationClient.prototype.getRegistrationsPerProvider = function (provider, callback) {

  if (!helper.isDefined(provider)) {
    return new Error('[RegistrationClient:getRegistrationsPerProvider] Missing parameters:', 'provider');
  }

  var parameters = {
    options: {
      url: this.baseUrl + '/registration/tokens/' + provider,
      method: 'GET',
      json: true
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};

// Removes the device token from the system.
RegistrationClient.prototype.deleteRegistrationPerDeviceId = function (deviceId, callback) {

  if (!helper.isDefined(deviceId)) {
    return new Error('[RegistrationClient:deleteRegistrationPerDeviceId] Missing parameters:', 'deviceId');
  }

  var parameters = {
    options: {
      url: this.baseUrl + '/registration/device/' + deviceId,
      method: 'DELETE',
      json: true
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};

// Updates the token for the device with the specified id.
RegistrationClient.prototype.updateRegistrationDevice = function (deviceId, newDevice, callback) {

  if (!helper.isDefined(deviceId)) {
    return new Error('[RegistrationClient:updateRegistrationDevice] Missing parameters:', 'deviceId');
  }

  if (!helper.isDefined(newDevice)) {
    return new Error('[RegistrationClient:updateRegistrationDevice] Missing parameters:', 'newDevice');
  }

  var parameters = {
    options: {
      url: this.baseUrl + '/registration/device/' + deviceId,
      method: 'PUT',
      json: true,
      body: newDevice
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};


module.exports = RegistrationClient;
