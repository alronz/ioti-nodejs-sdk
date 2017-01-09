"use strict";

describe('HazardEvent Client', function () {

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

  var iotIHazardEvent = new IotIClient.IotIHazardEvent(configs);
  var testHazardEvent = {"data": "value"};

  before(function () {

    nock(baseUrl)
      .get('/hazardEvent/byHazardId/testHazardEventID')
      .reply(200, {"data": "value"});

    nock(baseUrl)
      .get('/hazardEvent/byId/testID')
      .reply(200, {"data": "value"});

    nock(baseUrl)
      .get('/hazardEvent/aggregated')
      .query({
        param1: 'value'
      })
      .reply(200, {"data": "value"});

    nock(baseUrl)
      .get('/hazardEvent')
      .reply(200, {"data": "value"});

    nock(baseUrl)
      .get('/hazardEvent/all')
      .reply(200, {"data": "value"});

    nock(baseUrl)
      .post('/hazardEvent', testHazardEvent)
      .reply(200, {"data": "value"});

    nock(baseUrl)
      .delete('/hazardEvent/byId/testHazardEventID')
      .reply(200, {"data": "value"});

    nock(baseUrl)
      .delete('/hazardEvent/byUsername/username')
      .reply(200, {"data": "value"});

    nock(baseUrl)
      .delete('/hazardEvent/testHazardEventID/testAttributeName')
      .reply(200, {"data": "value"});

    nock(baseUrl)
      .post('/hazardEvent/testHazardEventID/testAttributeName/testAttributeValue')
      .reply(200, {"data": "value"});

    nock(baseUrl)
      .put('/hazardEvent/testHazardEventID/validationType/testValidationType')
      .reply(200, {"data": "value"});

  });

  after(function () {
    nock.cleanAll();
  });

  describe('createHEvent()', function () {
    it('should check no parameters provided', function () {
      var result = iotIHazardEvent.createHEvent(null, function (error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should create hazardEvent successfully', function (done) {
      iotIHazardEvent.createHEvent(testHazardEvent, function (error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('getHEventPerHEventId()', function () {
    it('should check no parameters provided', function () {
      var result = iotIHazardEvent.getHEventPerHEventId(null, function (error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should get hazardEvent successfully', function (done) {
      iotIHazardEvent.getHEventPerHEventId('testHazardEventID', function (error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('getHEventPerId()', function () {
    it('should check no parameters provided', function () {
      var result = iotIHazardEvent.getHEventPerId(null, function (error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should get hazardEvent successfully', function (done) {
      iotIHazardEvent.getHEventPerId('testID', function (error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('getHEventsForAuthUser()', function () {

    it('should get hazardEvents successfully', function (done) {
      iotIHazardEvent.getHEventsForAuthUser(function (error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('deleteHEventPerId()', function () {

    it('should check no parameters provided', function () {
      var result = iotIHazardEvent.deleteHEventPerId(null, function (error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should delete hazardEvent successfully', function (done) {
      iotIHazardEvent.deleteHEventPerId('testHazardEventID', function (error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('deleteHEventsPerUser()', function () {

    it('should check no parameters provided', function () {
      var result = iotIHazardEvent.deleteHEventsPerUser(null, function (error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should delete hazardEvent successfully', function (done) {
      iotIHazardEvent.deleteHEventsPerUser('username', function (error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('deleteHEventAttribute()', function () {

    it('should check no parameters provided', function () {
      var result = iotIHazardEvent.deleteHEventAttribute(null, null, function (error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should delete hazardEvent attribute successfully', function (done) {
      iotIHazardEvent.deleteHEventAttribute('testHazardEventID', 'testAttributeName', function (error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('setHazardEventAttribute()', function () {

    it('should check no parameters provided', function () {
      var result = iotIHazardEvent.setHEventAttribute(null, null, null, function (error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should set hazardEvent attribute successfully', function (done) {
      iotIHazardEvent.setHEventAttribute('testHazardEventID', 'testAttributeName', "testAttributeValue", function (error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('getAllHEvents()', function () {

    it('should get all hazardEvents successfully', function (done) {
      iotIHazardEvent.getAllHEvents(function (error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('getHEventsAggregated()', function () {

    it('should check no parameters provided', function () {
      var result = iotIHazardEvent.getHEventsAggregated(null, function (error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should get aggregated hazardEvents successfully', function (done) {
      iotIHazardEvent.getHEventsAggregated({param1: 'value'}, function (error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('updateHEventValidationType()', function () {

    it('should check no parameters provided', function () {
      var result = iotIHazardEvent.updateHEventValidationType(null, null, function (error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should update hazardEvent validation type successfully', function (done) {
      iotIHazardEvent.updateHEventValidationType("testHazardEventID", "testValidationType", function (error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });
});
