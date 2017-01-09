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
    .get('/device')
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .get('/device/all')
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .get('/device/byUser/' + "testUserName")
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .post('/device', testDevice)
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .delete('/device/testDeviceID')
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .delete('/device/testDeviceID/testAttributeName')
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .post('/device/testDeviceID/testAttributeName/testAttributeValue')
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .put('/device/device/testDeviceID', testDevice)
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

    it('should get device successfully', function(done) {
      iotIDevice.getDevicesPerId('testDeviceID', function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('getDevicesForAuthUser()', function() {

    it('should get devices successfully', function(done) {
      iotIDevice.getDevicesForAuthUser(function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('deleteDevicePerId()', function() {

    it('should check no parameters provided', function() {
      var result = iotIDevice.deleteDevicePerId(null, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should delete device successfully', function(done) {
      iotIDevice.deleteDevicePerId('testDeviceID', function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('deleteDeviceAttribute()', function() {

    it('should check no parameters provided', function() {
      var result = iotIDevice.deleteDeviceAttribute(null, null, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should delete device attribute successfully', function(done) {
      iotIDevice.deleteDeviceAttribute('testDeviceID', 'testAttributeName', function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('setDeviceAttribute()', function() {

    it('should check no parameters provided', function() {
      var result = iotIDevice.setDeviceAttribute(null, null, null, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should set device attribute successfully', function(done) {
      iotIDevice.setDeviceAttribute('testDeviceID', 'testAttributeName', "testAttributeValue", function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('getAllDevices()', function() {

    it('should get all devices successfully', function(done) {
      iotIDevice.getAllDevices(function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('getDevicesPerUser()', function() {

    it('should check no parameters provided', function() {
      var result = iotIDevice.getDevicesPerUser(null, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should get user devices successfully', function(done) {
      iotIDevice.getDevicesPerUser("testUserName", function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('updateDevice()', function() {

    it('should check no parameters provided', function() {
      var result = iotIDevice.updateDevice(null, null, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should update device successfully', function(done) {
      iotIDevice.updateDevice("testDeviceID", testDevice, function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });
});
