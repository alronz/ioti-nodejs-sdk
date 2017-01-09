"use strict";
var util = require('util');
var BaseClient = require('./BaseClient');
var requestFactory = require('../utils/requestWrapper');
var helper = require('../utils/helper');

function GlobalClient(configs) {
  BaseClient.call(this, configs);

  this.configs = {
    credentials: this.getCredentials(),
    baseUrl: this.baseUrl
  }
}
util.inherits(GlobalClient, BaseClient);

// Publishes an MQTT payload to the associated IoT Platform service. The payload can be an event or a command for the systems'components. This function can be used to simulate events in the system. Admin access required.
GlobalClient.prototype.sendPayloadToMQTT = function (outputType, deviceType, deviceId, type, payload, callback) {

  if (!helper.isDefined(outputType)) {
    return new Error('[GlobalClient:sendPayloadToMQTT] Missing parameters:', 'outputType');
  }

  if (!helper.isDefined(deviceType)) {
    return new Error('[GlobalClient:sendPayloadToMQTT] Missing parameters:', 'deviceType');
  }

  if (!helper.isDefined(deviceId)) {
    return new Error('[GlobalClient:sendPayloadToMQTT] Missing parameters:', 'deviceId');
  }

  if (!helper.isDefined(type)) {
    return new Error('[GlobalClient:sendPayloadToMQTT] Missing parameters:', 'type');
  }

  if (!helper.isDefined(payload)) {
    return new Error('[GlobalClient:sendPayloadToMQTT] Missing parameters:', 'payload');
  }

  var parameters = {
    options: {
      url: this.baseUrl + '/global/sendPayloadToMQTT/' + outputType + '/' + deviceType + '/' + deviceId + '/' + type,
      method: 'POST',
      json: true,
      body: payload
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};


// Sends a push notification to the phone described in the body parameter. Admin access required.
GlobalClient.prototype.sendPushNotification = function (pushNotification, callback) {

  if (!helper.isDefined(pushNotification)) {
    return new Error('[GlobalClient:sendPushNotification] Missing parameters:', 'pushNotification');
  }

  var parameters = {
    options: {
      url: this.baseUrl + '/global/sendPushNotification',
      method: 'POST',
      json: true,
      body: pushNotification
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};


module.exports = GlobalClient;
