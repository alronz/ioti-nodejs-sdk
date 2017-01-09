"use strict";

describe('Global Client', function () {

  var nock = require('nock');
  var should = require('chai').should();
  var IotIClient = require('../../src/ioti-client');
  var baseUrl = "https://iot4insurance-api.eu-gb.mybluemix.net";

  var configs =
  {
    uri: baseUrl,
    userid: "testuserid",
    password: "testpassword"
  };

  var iotIGlobal = new IotIClient.IotIGlobal(configs);
  var testPayload = {"data": "value"};
  var testPushNotification = {"data": "value"};

  before(function () {

    nock(baseUrl)
      .post('/global/sendPushNotification', testPushNotification)
      .reply(200, {"data": "value"});

    nock(baseUrl)
      .post('/global/sendPayloadToMQTT/outputType/deviceType/deviceId/type', testPayload)
      .reply(200, {"data": "value"});

  });

  after(function () {
    nock.cleanAll();
  });

  describe('sendPushNotification()', function () {
    it('should check no parameters provided', function () {
      var result = iotIGlobal.sendPushNotification(null, function (error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should send push notification successfully', function (done) {
      iotIGlobal.sendPushNotification(testPushNotification, function (error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('sendPayloadToMQTT()', function () {
    it('should check no parameters provided', function () {
      var result = iotIGlobal.sendPayloadToMQTT(null, null, null, null, null, function (error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should send payload successfully', function (done) {
      iotIGlobal.sendPayloadToMQTT("outputType", "deviceType", "deviceId", "type", testPayload, function (error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

});
