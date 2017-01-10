"use strict";

describe('Promotion Client', function() {

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

  var iotIPromotion = new IotIClient.IotIPromotion(configs);
  var testPromotion = {"data": "value"};

  before(function() {

    nock(baseUrl)
    .get('/promotion/testPromotionID')
    .reply(200, {"data": "value"});


    nock(baseUrl)
    .get('/promotion/all')
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .post('/promotion', testPromotion)
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .delete('/promotion/testPromotionID')
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .delete('/promotion/testPromotionID/testAttributeName')
    .reply(200, {"data": "value"});

    nock(baseUrl)
    .post('/promotion/testPromotionID/testAttributeName/testAttributeValue')
    .reply(200, {"data": "value"});

  });

  after(function() {
    nock.cleanAll();
  });

  describe('createPromotion()', function() {
    it('should check no parameters provided', function() {
      var result = iotIPromotion.createPromotion(null, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should create promotion successfully', function(done) {
      iotIPromotion.createPromotion(testPromotion, function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('getPromotionsPerId()', function() {
    it('should check no parameters provided', function() {
      var result = iotIPromotion.getPromotionsPerId(null, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should get promotion successfully', function(done) {
      iotIPromotion.getPromotionsPerId('testPromotionID', function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('deletePromotionPerId()', function() {

    it('should check no parameters provided', function() {
      var result = iotIPromotion.deletePromotionPerId(null, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should delete promotion successfully', function(done) {
      iotIPromotion.deletePromotionPerId('testPromotionID', function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('deletePromotionAttribute()', function() {

    it('should check no parameters provided', function() {
      var result = iotIPromotion.deletePromotionAttribute(null, null, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should delete promotion attribute successfully', function(done) {
      iotIPromotion.deletePromotionAttribute('testPromotionID', 'testAttributeName', function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('setPromotionAttribute()', function() {

    it('should check no parameters provided', function() {
      var result = iotIPromotion.setPromotionAttribute(null, null, null, function(error, body, response) {
      });
      result.should.be.a('error');
    });

    it('should set promotion attribute successfully', function(done) {
      iotIPromotion.setPromotionAttribute('testPromotionID', 'testAttributeName', "testAttributeValue", function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });

  describe('getAllPromotions()', function() {

    it('should get all promotions successfully', function(done) {
      iotIPromotion.getAllPromotions(function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      });
    });
  });


});
