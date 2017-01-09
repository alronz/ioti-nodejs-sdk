"use strict";

describe('Request Wrapper', function() {

  var nock = require('nock');
  var should = require('chai').should();
  var requestWrapper = require('../../src/utils/requestWrapper');
  var baseUrl = "https://iot4insurance-api.eu-gb.mybluemix.net";

  var testConfig =
  {
    user: 'user',
    pass: 'pass',
    baseUrl: baseUrl
  };

  var testParameters = {
    options: {
      url: testConfig.baseUrl + '/user/testID',
      method: 'GET',
      json: true
    },
    withCSRF: true,
    configs: testConfig
  };

  before(function() {
    nock(baseUrl)
    .get('/user/testID')
    .reply(200, {"data": "value"});

  });

  after(function() {
    nock.cleanAll();
  });

  describe('createRequest()', function() {
    it('should make a request to IoT4I service', function(done) {

      requestWrapper(testParameters, function(error, body, response) {
        should.not.exist(error);
        should.exist(body);
        should.exist(response);
        done();
      })
    });
  });

});
