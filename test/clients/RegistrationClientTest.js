"use strict";

describe('Registration Client', function() {

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

  var iotIRegistration = new IotIClient.IotIRegistration(configs);
  var testRegistration = {"data": "value"};

  before(function() {

    nock(baseUrl)
    .get('/registration/device/byid/testRegistrationID')
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .get('/registration/tokens/testProvider')
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .get('/registration/device/byusername/' + "testUserName")
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .post('/registration/device', testRegistration)
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .delete('/registration/device/testRegistrationID')
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .put('/registration/device/testDeviceID', testRegistration)
    .reply(200, {"data": "value"});

  });

  after(function() {
    nock.cleanAll();
  });

  describe('createRegistrationDevice()', function() {
    it('should check no parameters provided', function() {
      var result = iotIRegistration.createRegistrationDevice(null, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should create registration device successfully', function(done) {
      iotIRegistration.createRegistrationDevice(testRegistration, function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('getRegistrationDevicePerId()', function() {
    it('should check no parameters provided', function() {
      var result = iotIRegistration.getRegistrationDevicePerId(null, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should get registration successfully', function(done) {
      iotIRegistration.getRegistrationDevicePerId('testRegistrationID', function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('getRegistrationsPerUser()', function() {

    it('should get registrations successfully', function(done) {
      iotIRegistration.getRegistrationsPerUser("testUserName", function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('getRegistrationsPerProvider()', function() {

    it('should check no parameters provided', function() {
      var result = iotIRegistration.getRegistrationsPerProvider(null, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should get registration successfully', function(done) {
      iotIRegistration.getRegistrationsPerProvider('testProvider', function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('deleteRegistrationPerDeviceId()', function() {

    it('should check no parameters provided', function() {
      var result = iotIRegistration.deleteRegistrationPerDeviceId(null, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should delete registration attribute successfully', function(done) {
      iotIRegistration.deleteRegistrationPerDeviceId('testRegistrationID', function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('updateRegistrationDevice()', function() {

    it('should check no parameters provided', function() {
      var result = iotIRegistration.updateRegistrationDevice(null, null, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should update registration successfully', function(done) {
      iotIRegistration.updateRegistrationDevice("testDeviceID", testRegistration, function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });
});
