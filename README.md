# ioti-nodejs-sdk
A Nodejs client library for developing applications using IBM Watson IoT for insurance service


The SDK has the following clients:
- IotIDevice
- IotIGlobal
- IotIHazardEvent
- IotIJSCode
- IotIPromotion
- IotIRegistration
- IotIShieldAssociation
- IotIShield
- IotIUser

### How to use it

Example below for the IotIUser client:

```javascript
var IotIClient = require('ibmioti');

// the configuration can be found in the service bluemix dashboard
var configs =
  {
    uri: "uri",
    userid: "userid",
    password: "password"
  };

var iotIUser = new IotIClient.IotIUser(configs);

 iotIUser.createUser(user, function(error, body, response) {

 });
```

### IotIDevice

- createDevice(device, callback)
- getDevicesPerId(deviceId, callback)
- getDevicesForAuthUser(callback)
- deleteDevicePerId(deviceId, callback)
- deleteDeviceAttribute(deviceId, attributeName, callback)
- setDeviceAttribute(deviceId, attributeName, attributeValue, callback)
- getAllDevices(callback)
- getDevicesPerUser(username, callback)
- updateDevice(deviceId, newDevice, callback)

### IotIGlobal

- sendPayloadToMQTT(outputType, deviceType, deviceId, type, payload, callback)
- sendPushNotification(pushNotification, callback)

### IotIHazardEvent

- createHEvent(hazardEvent, callback)
- getHEventPerHEventId(hazardEventId, callback)
- getHEventPerId(id, callback)
- getHEventsForAuthUser(callback)
- deleteHEventPerId(hazardEventId, callback)
- deleteHEventsPerUser(username, callback)
- deleteHEventAttribute(hazardEventId, attributeName, callback)
- setHEventAttribute(hazardEventId, attributeName, attributeValue, callback)
- getAllHEvents(callback)
- getHEventsAggregated(queryParams, callback)
- updateHEventValidationType(hazardEventId, validationType, callback)


### IotIJSCode

- createJSCode(jsCode, callback)
- updateAll(callback)
- getJSCodesPerShieldUUUID(shieldUUUID, queryParams, callback)
- getCommonJSCodes(queryParams, callback)
- getAllJSCodes(queryParams, callback)
- getJSCodesPerUser(username, queryParams, callback)
- updateJSCode(jsCodeId, code, callback)

### IotIPromotion

- createPromotion(promotion, callback)
- getPromotionsPerId(promotionId, callback)
- deletePromotionPerId(promotionId, callback)
- deletePromotionAttribute(promotionId, attributeName, callback)
- setPromotionAttribute(promotionId, attributeName, attributeValue, callback)
- getAllPromotions(callback)


### IotIRegistration

- createRegistrationDevice(device, callback)
- getRegistrationDevicePerId(deviceId, callback)
- getRegistrationsPerUser(username, callback)
- getRegistrationsPerProvider(provider, callback)
- deleteRegistrationPerDeviceId(deviceId, callback)
- updateRegistrationDevice(deviceId, newDevice, callback)


### IotIShieldAssociation

- createShieldAssociation(shieldAssociation, callback)
- getShieldAssociationsPerId(shieldAssociationId, callback)
- getShieldAssociationsForAuthUser(callback)
- deleteShieldAssociationPerId(shieldAssociationId, callback)
- deleteAllShieldAssociations(callback)
- deleteShieldAssociationAttribute(shieldAssociationId, attributeName, callback)
- setShieldAssociationAttribute(shieldAssociationId, attributeName, attributeValue, callback)
- getAllShieldAssociations(callback)
- getShieldAssociationsPerUser(username, callback)
- setShieldAssociationOnCloud(shieldAssociation, callback)

### IotIShield

- createShield(shield, callback)
- getShieldsPerId(shieldId, callback)
- getShieldsPerUser(username, callback)
- getShieldsPerUUID(uuid, callback)
- deleteShieldPerId(shieldId, callback)
- deleteAllShields(callback)
- deleteShieldAttribute(shieldId, attributeName, callback)
- setShieldAttribute(shieldId, attributeName, attributeValue, callback)
- getAllShields(callback)


### IotIUser

- createUser(user, callback)
- getAuthUser(callback)
- checkUserLogin(callback)
- checkUserLogout(callback)
- deleteUserPerUserName(username, callback)
- deleteUserAttribute(userName, attributeName, callback)
- setUserAttribute(userName, attributeName, attributeValue, callback)
- setUserAccessLevel(userName, accessLevel, callback)
- getAllUsers(callback)
- getUserPerUserName(userName, callback)
- getUserSensors(callback)
- updateUserDevice(userName, deviceId, callback)
