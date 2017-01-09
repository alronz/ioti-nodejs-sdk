"use strict";
var util = require('util');
var BaseClient = require('./BaseClient');
var requestFactory = require('../utils/requestWrapper');
var helper = require('../utils/helper');

function PromotionClient(configs) {
  BaseClient.call(this, configs);

  this.configs = {
    credentials: this.getCredentials(),
    baseUrl: this.baseUrl
  }
}
util.inherits(PromotionClient, BaseClient);

// Adds a promotion to the system. Admin access required.
PromotionClient.prototype.createPromotion = function (promotion, callback) {

  if (!helper.isDefined(promotion)) {
    return new Error('[PromotionClient:createPromotion] Missing parameters:', 'promotion');
  }

  var parameters = {
    options: {
      url: this.baseUrl + '/promotion',
      method: 'POST',
      json: true,
      body: promotion
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};

// Returns information for the promotion with the specified id.
PromotionClient.prototype.getPromotionsPerId = function (promotionId, callback) {

  if (!helper.isDefined(promotionId)) {
    return new Error('[PromotionClient:getPromotionsPerId] Missing parameters:', 'promotionId');
  }

  var parameters = {
    options: {
      url: this.baseUrl + '/promotion/' + promotionId,
      method: 'GET',
      json: true
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};

// Deletes the promotion with the specified id from the system. Admin access required.
PromotionClient.prototype.deletePromotionPerId = function (promotionId, callback) {

  if (!helper.isDefined(promotionId)) {
    return new Error('[PromotionClient:deletePromotionPerId] Missing parameters:', 'promotionId');
  }

  var parameters = {
    options: {
      url: this.baseUrl + '/promotion/' + promotionId,
      method: 'DELETE',
      json: true
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};

// Deletes attribute {attributeName} from the promotion with the specified id. Admin access required.
PromotionClient.prototype.deletePromotionAttribute = function (promotionId, attributeName, callback) {

  if (!helper.isDefined(promotionId)) {
    return new Error('[PromotionClient:deletePromotionAttribute] Missing parameters:', 'promotionId');
  }

  if (!helper.isDefined(attributeName)) {
    return new Error('[PromotionClient:deletePromotionAttribute] Missing parameters:', 'attributeName');
  }

  var parameters = {
    options: {
      url: this.baseUrl + '/promotion/' + promotionId + '/' + attributeName,
      method: 'DELETE',
      json: true
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};

// Sets attribute {attributeName} for the promotion with the specified id. The attribute is created if it does not exist. Admin access required.
PromotionClient.prototype.setPromotionAttribute = function (promotionId, attributeName, attributeValue, callback) {

  if (!helper.isDefined(promotionId)) {
    return new Error('[PromotionClient:setPromotionAttribute] Missing parameters:', 'promotionId');
  }

  if (!helper.isDefined(attributeName)) {
    return new Error('[PromotionClient:setPromotionAttribute] Missing parameters:', 'attributeName');
  }

  if (!helper.isDefined(attributeValue)) {
    return new Error('[PromotionClient:setPromotionAttribute] Missing parameters:', 'attributeValue');
  }

  var parameters = {
    options: {
      url: this.baseUrl + '/promotion/' + promotionId + '/' + attributeName + '/' + attributeValue,
      method: 'POST',
      json: true
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};


// Returns all the promotions in the system. Dashboard access level required.
PromotionClient.prototype.getAllPromotions = function (callback) {

  var parameters = {
    options: {
      url: this.baseUrl + '/promotion/all',
      method: 'GET',
      json: true
    },
    withCSRF: true,
    configs: this.configs
  };

  return requestFactory(parameters, callback);
};


module.exports = PromotionClient;
