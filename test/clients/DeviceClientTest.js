"use strict";

describe('Device Client', function() {

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

  var iotIDevice = new IotIClient.IotIDevice(configs);
  var testDevice = {
    "id": "id",
    "username": "username",
    "sensor_pod_id": "sensor_pod_id",
    "name": "name",
    "device_manufacturer": "device_manufacturer",
    "model_name": "model_name",
    "manufacturer_device_model": "manufacturer_device_model",
    "location": "location",
    "status": "status"
  };

  before(function() {

    nock(baseUrl)
    .get('/device/testDeviceID')
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .post('/device', testDevice)
    .reply(200, {"data": "value"});

  });

  after(function() {
    nock.cleanAll();
  });

  describe('createDevice()', function() {
    it('should check no parameters provided', function() {
      var result = iotIDevice.createDevice(null, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should create device successfully', function(done) {
      iotIDevice.createDevice(testDevice, function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('getDevicesPerId()', function() {
    it('should check no parameters provided', function() {
      var result = iotIDevice.getDevicesPerId(null, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should create device successfully', function(done) {
      iotIDevice.getDevicesPerId('testDeviceID', function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });
});
