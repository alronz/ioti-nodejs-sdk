"use strict";

describe('ShieldAssociation Client', function() {

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

  var iotIShieldAssociation = new IotIClient.IotIShieldAssociation(configs);
  var testShieldAssociation = {"data": "value"};

  before(function() {

    nock(baseUrl)
    .get('/shieldassociation/testShieldAssociationID')
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .get('/shieldassociation')
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .get('/shieldassociation/all')
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .get('/shieldassociation/byuser/' + "testUserName")
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .post('/shieldassociation', testShieldAssociation)
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .delete('/shieldassociation/testShieldAssociationID')
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .delete('/shieldassociation')
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .delete('/shieldassociation/testShieldAssociationID/testAttributeName')
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .post('/shieldassociation/testShieldAssociationID/testAttributeName/testAttributeValue')
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .post('/shieldassociation/oncloud', testShieldAssociation)
    .reply(200, {"data": "value"});

  });

  after(function() {
    nock.cleanAll();
  });

  describe('createShieldAssociation()', function() {
    it('should check no parameters provided', function() {
      var result = iotIShieldAssociation.createShieldAssociation(null, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should create shieldAssociation successfully', function(done) {
      iotIShieldAssociation.createShieldAssociation(testShieldAssociation, function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('getShieldAssociationsPerId()', function() {
    it('should check no parameters provided', function() {
      var result = iotIShieldAssociation.getShieldAssociationsPerId(null, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should get shieldAssociation successfully', function(done) {
      iotIShieldAssociation.getShieldAssociationsPerId('testShieldAssociationID', function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('getShieldAssociationsForAuthUser()', function() {

    it('should get shieldAssociations successfully', function(done) {
      iotIShieldAssociation.getShieldAssociationsForAuthUser(function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('deleteShieldAssociationPerId()', function() {

    it('should check no parameters provided', function() {
      var result = iotIShieldAssociation.deleteShieldAssociationPerId(null, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should delete shieldAssociation successfully', function(done) {
      iotIShieldAssociation.deleteShieldAssociationPerId('testShieldAssociationID', function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('deleteAllShieldAssociations()', function() {

    it('should delete shieldAssociation successfully', function(done) {
      iotIShieldAssociation.deleteAllShieldAssociations(function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('deleteShieldAssociationAttribute()', function() {

    it('should check no parameters provided', function() {
      var result = iotIShieldAssociation.deleteShieldAssociationAttribute(null, null, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should delete shieldAssociation attribute successfully', function(done) {
      iotIShieldAssociation.deleteShieldAssociationAttribute('testShieldAssociationID', 'testAttributeName', function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('setShieldAssociationAttribute()', function() {

    it('should check no parameters provided', function() {
      var result = iotIShieldAssociation.setShieldAssociationAttribute(null, null, null, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should set shieldAssociation attribute successfully', function(done) {
      iotIShieldAssociation.setShieldAssociationAttribute('testShieldAssociationID', 'testAttributeName', "testAttributeValue", function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('getAllShieldAssociations()', function() {

    it('should get all shieldAssociations successfully', function(done) {
      iotIShieldAssociation.getAllShieldAssociations(function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('getShieldAssociationsPerUser()', function() {

    it('should check no parameters provided', function() {
      var result = iotIShieldAssociation.getShieldAssociationsPerUser(null, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should get user shieldAssociations successfully', function(done) {
      iotIShieldAssociation.getShieldAssociationsPerUser("testUserName", function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('setShieldAssociationOnCloud()', function() {

    it('should check no parameters provided', function() {
      var result = iotIShieldAssociation.setShieldAssociationOnCloud(null, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should update shieldAssociation successfully', function(done) {
      iotIShieldAssociation.setShieldAssociationOnCloud(testShieldAssociation, function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });
});
