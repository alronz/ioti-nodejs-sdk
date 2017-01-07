"use strict";


var DeviceClient = require('./clients/DeviceClient');
var UserClient = require('./clients/UserClient');
var GlobalClient = require('./clients/GlobalClient');
var HazardEventClient = require('./clients/HazardEventClient');
var JSCodeClient = require('./clients/JSCodeClient');
var PromotionClient = require('./clients/PromotionClient');
var RegistrationClient = require('./clients/RegistrationClient');
var ShieldClient = require('./clients/ShieldClient');
var ShieldAssociationClient = require('./clients/ShieldAssociationClient');


module.exports = {
  IotIDevice: DeviceClient,
  IotIUser: UserClient,
  IotIGlobal: GlobalClient,
  IotIHazardEvent: HazardEventClient,
  IotIJSCode: JSCodeClient,
  IotIPromotion: PromotionClient,
  IotIRegistration: RegistrationClient,
  IotIShield: ShieldClient,
  IotIShieldAssociation: ShieldAssociationClient
};
