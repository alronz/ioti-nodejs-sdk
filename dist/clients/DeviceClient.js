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
    global.DeviceClient = mod.exports;
  }
})(this, function (exports) {
  "use strict";
  var util = require('util');
  var BaseClient = require('./BaseClient');
  var requestFactory = require('../utils/requestWrapper');
  var helper = require('../utils/helper');

  function DeviceClient(configs) {
    BaseClient.call(this, configs);

    this.configs = {
      credentials: this.getCredentials(),
      baseUrl: this.baseUrl
    };
  }
  util.inherits(DeviceClient, BaseClient);

  // Registers a new device in the system. Admin access required.
  DeviceClient.prototype.createDevice = function (device, callback) {

    if (!helper.isDefined(device)) {
      return new Error('[DeviceClient:createDevice] Missing parameters:', 'device');
    }

    var parameters = {
      options: {
        url: this.baseUrl + '/device',
        method: 'POST',
        json: true,
        body: device
      },
      withCSRF: true,
      configs: this.configs
    };

    return requestFactory(parameters, callback);
  };

  // Returns information for the device with the specified id.
  DeviceClient.prototype.getDevicesPerId = function (deviceId, callback) {

    if (!helper.isDefined(deviceId)) {
      return new Error('[DeviceClient:getDevicesPerId] Missing parameters:', 'deviceId');
    }

    var parameters = {
      options: {
        url: this.baseUrl + '/device/' + deviceId,
        method: 'GET',
        json: true
      },
      withCSRF: true,
      configs: this.configs
    };

    return requestFactory(parameters, callback);
  };

  // Returns information on all the devices registered for the authenticated user.
  DeviceClient.prototype.getDevicesForAuthUser = function (callback) {

    var parameters = {
      options: {
        url: this.baseUrl + '/device',
        method: 'GET',
        json: true
      },
      withCSRF: true,
      configs: this.configs
    };

    return requestFactory(parameters, callback);
  };

  // Deletes the device with the specified id from the system. Admin access required.
  DeviceClient.prototype.deleteDevicePerId = function (deviceId, callback) {

    if (!helper.isDefined(deviceId)) {
      return new Error('[DeviceClient:deleteDevicePerId] Missing parameters:', 'deviceId');
    }

    var parameters = {
      options: {
        url: this.baseUrl + '/device/' + deviceId,
        method: 'DELETE',
        json: true
      },
      withCSRF: true,
      configs: this.configs
    };

    return requestFactory(parameters, callback);
  };

  // Deletes attribute {attributeName} from the device with the specified id. Admin access required.
  DeviceClient.prototype.deleteDeviceAttribute = function (deviceId, attributeName, callback) {

    if (!helper.isDefined(deviceId)) {
      return new Error('[DeviceClient:deleteDeviceAttribute] Missing parameters:', 'deviceId');
    }

    if (!helper.isDefined(attributeName)) {
      return new Error('[DeviceClient:deleteDeviceAttribute] Missing parameters:', 'attributeName');
    }

    var parameters = {
      options: {
        url: this.baseUrl + '/device/' + deviceId + '/' + attributeName,
        method: 'DELETE',
        json: true
      },
      withCSRF: true,
      configs: this.configs
    };

    return requestFactory(parameters, callback);
  };

  // Sets attribute {attributeName} of the device with the specified {id}. The attribute is created if it does not exist. Admin access required.
  DeviceClient.prototype.setDeviceAttribute = function (deviceId, attributeName, attributeValue, callback) {

    if (!helper.isDefined(deviceId)) {
      return new Error('[DeviceClient:setDeviceAttribute] Missing parameters:', 'deviceId');
    }

    if (!helper.isDefined(attributeName)) {
      return new Error('[DeviceClient:setDeviceAttribute] Missing parameters:', 'attributeName');
    }

    if (!helper.isDefined(attributeValue)) {
      return new Error('[DeviceClient:setDeviceAttribute] Missing parameters:', 'attributeValue');
    }

    var parameters = {
      options: {
        url: this.baseUrl + '/device/' + deviceId + '/' + attributeName + '/' + attributeValue,
        method: 'POST',
        json: true
      },
      withCSRF: true,
      configs: this.configs
    };

    return requestFactory(parameters, callback);
  };

  // Returns information for all the devices registered in the system. Admin access required.
  DeviceClient.prototype.getAllDevices = function (callback) {

    var parameters = {
      options: {
        url: this.baseUrl + '/device/all',
        method: 'GET',
        json: true
      },
      withCSRF: true,
      configs: this.configs
    };

    return requestFactory(parameters, callback);
  };

  // Returns information on all the devices registered for the specified user. Admin access required.
  DeviceClient.prototype.getDevicesPerUser = function (username, callback) {

    if (!helper.isDefined(username)) {
      return new Error('[DeviceClient:getDevicesPerUser] Missing parameters:', 'username');
    }

    var parameters = {
      options: {
        url: this.baseUrl + '/device/byUser/' + username,
        method: 'GET',
        json: true
      },
      withCSRF: true,
      configs: this.configs
    };

    return requestFactory(parameters, callback);
  };

  // Updates the status of the device with the specified id. Admin access required.
  DeviceClient.prototype.updateDevice = function (deviceId, newDevice, callback) {

    if (!helper.isDefined(deviceId)) {
      return new Error('[DeviceClient:updateDevice] Missing parameters:', 'deviceId');
    }

    if (!helper.isDefined(newDevice)) {
      return new Error('[DeviceClient:updateDevice] Missing parameters:', 'newDevice');
    }

    var parameters = {
      options: {
        url: this.baseUrl + '/device/device/' + deviceId,
        method: 'PUT',
        json: true,
        body: newDevice
      },
      withCSRF: true,
      configs: this.configs
    };

    return requestFactory(parameters, callback);
  };

  module.exports = DeviceClient;
});