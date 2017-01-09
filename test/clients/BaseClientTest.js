"use strict";

describe('Base Client', function() {

  var nock = require('nock');
  var should = require('chai').should();
  var BaseClient = require('../../src/clients/BaseClient');

  before(function() {

  });

  after(function() {

  });

  describe('Constructor', function() {
    it('should check if no configs are provided', function() {
      try {
        var baseClient = new BaseClient();
      } catch (e) {
        should.exist(e);
      }
    });
    it('should check if userid is provided', function() {
      try {
        var configs =
        {
          uri: "testuri",
          password: "testpassword"
        };
        var baseClient = new BaseClient(configs);
      } catch (e) {
        should.exist(e);
      }
    });
    it('should check if password is provided', function() {
      try {
        var configs =
        {
          uri: "testuri",
          userid: "testuserid"
        };
        var baseClient = new BaseClient(configs);
      } catch (e) {
        should.exist(e);
      }
    });
    it('should check if uri is provided', function() {
      try {
        var configs =
        {
          userid: "testuserid",
          password: "testpassword"
        };
        var baseClient = new BaseClient(configs);
      } catch (e) {
        should.exist(e);
      }
    });
    it('should succuss if all config is provided', function() {
      try {
        var configs =
        {
          uri: "testuri",
          userid: "testuserid",
          password: "testpassword"
        };
        var baseClient = new BaseClient(configs);
      } catch (e) {
        should.not.exist(e);
      }
    });
  });

  describe('getConfigs()', function() {
    it('should return configs', function() {
      try {
        var configs =
        {
          uri: "testuri",
          userid: "testuserid",
          password: "testpassword"
        };
        var baseClient = new BaseClient(configs);
        var currentConfigs = baseClient.getConfigs();
        currentConfigs.baseUrl.should.equal('testuri');
        currentConfigs.user.should.equal('testuserid');
        currentConfigs.pass.should.equal('testpassword');
      } catch (e) {
        should.not.exist(e);
      }
    });
  });

  describe('getCredentials()', function() {
    it('should return credentials', function() {
      try {
        var configs =
        {
          uri: "testuri",
          userid: "testuserid",
          password: "testpassword"
        };
        var baseClient = new BaseClient(configs);
        var currentCredentials = baseClient.getConfigs();
        currentCredentials.user.should.equal('testuserid');
        currentCredentials.pass.should.equal('testpassword');
      } catch (e) {
        should.not.exist(e);
      }
    });
  });

});
