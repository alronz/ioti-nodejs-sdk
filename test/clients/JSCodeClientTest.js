"use strict";

describe('JSCode Client', function() {

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

  var iotIJSCode = new IotIClient.IotIJSCode(configs);
  var testJSCode = {"data": "value"};
  var testCode = "testCode";

  before(function() {

    nock(baseUrl)
    .get('/jscode/byuuid/testShieldUUID')
    .query({
      param1: 'value'
    })
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .get('/jscode/testJSCodeID')
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .get('/jscode/common')
    .query({
      param1: 'value'
    })
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .get('/jscode')
    .query({
      param1: 'value'
    })
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .get('/jscode/byuser/' + "testUserName")
    .query({
      param1: 'value'
    })
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .post('/jscode', testJSCode)
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .post('/jscode/updateall')
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .put('/jscode/testJSCodeID/code/testCode')
    .reply(200, {"data": "value"});

  });

  after(function() {
    nock.cleanAll();
  });

  describe('createJSCode()', function() {
    it('should check no parameters provided', function() {
      var result = iotIJSCode.createJSCode(null, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should create jsCode successfully', function(done) {
      iotIJSCode.createJSCode(testJSCode, function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('updateAll()', function() {
    it('should update all jsCodes successfully', function(done) {
      iotIJSCode.updateAll(function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('getJSCodesPerShieldUUUID()', function() {
    it('should check no parameters provided', function() {
      var result = iotIJSCode.getJSCodesPerShieldUUUID(null, null, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should get jsCode successfully', function(done) {
      iotIJSCode.getJSCodesPerShieldUUUID('testShieldUUID', {param1: 'value'}, function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('getCommonJSCodes()', function() {

    it('should get jsCode successfully', function(done) {
      iotIJSCode.getCommonJSCodes({param1: 'value'}, function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('getAllJSCodes()', function() {

    it('should get jsCodes successfully', function(done) {
      iotIJSCode.getAllJSCodes({param1: 'value'}, function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('getJSCodesPerUser()', function() {

    it('should check no parameters provided', function() {
      var result = iotIJSCode.getJSCodesPerUser(null, {param1: 'value'}, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should get jsCode successfully', function(done) {
      iotIJSCode.getJSCodesPerUser('testUserName', {param1: 'value'}, function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('updateJSCode()', function() {

    it('should check no parameters provided', function() {
      var result = iotIJSCode.updateJSCode(null, null, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should update jsCode successfully', function(done) {
      iotIJSCode.updateJSCode("testJSCodeID", testCode, function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });
});
