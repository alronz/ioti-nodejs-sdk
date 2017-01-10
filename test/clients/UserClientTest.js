"use strict";

describe('User Client', function() {

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

  var iotIUser = new IotIClient.IotIUser(configs);
  var testUser = {"data": "value"};

  before(function() {

    nock(baseUrl)
    .get('/checkuser/logout')
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .get('/checkuser/login')
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .get('/user')
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .get('/user/all')
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .get('/user/name/' + "testUserName")
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .post('/user', testUser)
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .get("/user/sensors/getAllUserSensors")
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .delete('/user/testUserName')
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .delete('/user/attribute/testUserID/testAttributeName')
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .post('/user/attribute/testUserID/testAttributeName/testAttributeValue')
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .post('/user/attribute/testUserID/accessLevel/testAttributeValue')
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .put('/user/device/testUserName/deviceID/testDeviceID')
    .reply(200, {"data": "value"});

  });

  after(function() {
    nock.cleanAll();
  });

  describe('createUser()', function() {
    it('should check no parameters provided', function() {
      var result = iotIUser.createUser(null, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should create user successfully', function(done) {
      iotIUser.createUser(testUser, function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('getUserPerUserName()', function() {
    it('should check no parameters provided', function() {
      var result = iotIUser.getUserPerUserName(null, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should get user successfully', function(done) {
      iotIUser.getUserPerUserName('testUserName', function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('checkUserLogin()', function() {

    it('should check user login successfully', function(done) {
      iotIUser.checkUserLogin(function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('checkUserLogout()', function() {

    it('should check user logout successfully', function(done) {
      iotIUser.checkUserLogout(function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('deleteUserPerUserName()', function() {

    it('should check no parameters provided', function() {
      var result = iotIUser.deleteUserPerUserName(null, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should delete user successfully', function(done) {
      iotIUser.deleteUserPerUserName('testUserName', function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('deleteUserAttribute()', function() {

    it('should check no parameters provided', function() {
      var result = iotIUser.deleteUserAttribute(null, null, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should delete user attribute successfully', function(done) {
      iotIUser.deleteUserAttribute('testUserID', 'testAttributeName', function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('setUserAttribute()', function() {

    it('should check no parameters provided', function() {
      var result = iotIUser.setUserAttribute(null, null, null, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should set user attribute successfully', function(done) {
      iotIUser.setUserAttribute('testUserID', 'testAttributeName', "testAttributeValue", function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('setUserAccessLevel()', function() {

    it('should check no parameters provided', function() {
      var result = iotIUser.setUserAccessLevel(null, null, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should set user access level successfully', function(done) {
      iotIUser.setUserAccessLevel('testUserID', "testAttributeValue", function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('getAllUsers()', function() {

    it('should get all users successfully', function(done) {
      iotIUser.getAllUsers(function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('getUserSensors()', function() {

    it('should get all users sensors successfully', function(done) {
      iotIUser.getUserSensors(function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('updateUserDevice()', function() {

    it('should check no parameters provided', function() {
      var result = iotIUser.updateUserDevice(null, null, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should update user successfully', function(done) {
      iotIUser.updateUserDevice("testUserName", "testDeviceID", function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });
});
