"use strict";

describe('Shield Client', function() {

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

  var iotIShield = new IotIClient.IotIShield(configs);
  var testShield = {"data":"value"};

  before(function() {

    nock(baseUrl)
    .get('/shield/testShieldID')
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .get('/shield/byuuid/testUUID')
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .get('/shield/all')
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .get('/shield/byusername/' + "testUserName")
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .post('/shield', testShield)
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .delete('/shield/testShieldID')
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .delete('/shield')
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .delete('/shield/testShieldID/testAttributeName')
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .post('/shield/testShieldID/testAttributeName/testAttributeValue')
    .reply(200, {"data": "value"});

  });

  after(function() {
    nock.cleanAll();
  });

  describe('createShield()', function() {
    it('should check no parameters provided', function() {
      var result = iotIShield.createShield(null, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should create shield successfully', function(done) {
      iotIShield.createShield(testShield, function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('getShieldsPerId()', function() {
    it('should check no parameters provided', function() {
      var result = iotIShield.getShieldsPerId(null, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should get shield successfully', function(done) {
      iotIShield.getShieldsPerId('testShieldID', function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('getShieldsPerUUID()', function() {
    it('should check no parameters provided', function() {
      var result = iotIShield.getShieldsPerUUID(null, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should get shield successfully', function(done) {
      iotIShield.getShieldsPerUUID('testUUID', function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });


  describe('deleteShieldPerId()', function() {

    it('should check no parameters provided', function() {
      var result = iotIShield.deleteShieldPerId(null, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should delete shield successfully', function(done) {
      iotIShield.deleteShieldPerId('testShieldID', function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('deleteShieldAttribute()', function() {

    it('should check no parameters provided', function() {
      var result = iotIShield.deleteShieldAttribute(null, null, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should delete shield attribute successfully', function(done) {
      iotIShield.deleteShieldAttribute('testShieldID', 'testAttributeName', function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('deleteAllShields()', function() {

    it('should delete shield attribute successfully', function(done) {
      iotIShield.deleteAllShields( function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('setShieldAttribute()', function() {

    it('should check no parameters provided', function() {
      var result = iotIShield.setShieldAttribute(null, null, null, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should set shield attribute successfully', function(done) {
      iotIShield.setShieldAttribute('testShieldID', 'testAttributeName', "testAttributeValue", function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('getAllShields()', function() {

    it('should get all shields successfully', function(done) {
      iotIShield.getAllShields(function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('getShieldsPerUser()', function() {

    it('should check no parameters provided', function() {
      var result = iotIShield.getShieldsPerUser(null, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should get user shields successfully', function(done) {
      iotIShield.getShieldsPerUser("testUserName", function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });
});
