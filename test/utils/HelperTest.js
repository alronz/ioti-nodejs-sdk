"use strict";

describe('Helper Class', function() {

  var should = require('chai').should();
  var helper = require('../../src/utils/helper');

  before(function() {

  });

  after(function() {

  });

  describe('isDefined()', function() {
    it('should return true if variable not defined', function() {
      var variable;
      var bool = helper.isDefined(variable);
      bool.should.equal(false)
    });

    it('should return false if variable defined', function() {
      var variable = 'value';
      var bool = helper.isDefined(variable);
      bool.should.equal(true)
    });
  });

  describe('getMissingParams()', function() {
    it('should return null if params and requires are not defined', function() {
      var result = helper.getMissingParams();
      should.not.exist(result);
    });

    it('should return requires if params is not defined', function() {
      var requires = ['param'];
      var result = helper.getMissingParams(null, requires);
      result.should.equal(requires.join(', '));
    });

    it('should find missing params correctly', function() {
      var requires = ['param1', 'params2'];
      var params = {'param1': "value"};
      var expectedResult = ['params2'];
      var result = helper.getMissingParams(params, requires);
      result.should.equal(expectedResult.join(', '));
    });
  });

});
