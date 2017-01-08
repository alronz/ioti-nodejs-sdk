"use strict";

describe('Device Client', function () {

  var nock = require('nock');
  var should = require('chai').should();
  var IotIClient = require('../src/ioti-client');

  var configs =
  {
    uri: "testuri",
    userid: "testuserid",
    password: "testpassword"
  };

  var iotIDevice = new IotIClient.IotIDevice(configs);
  var testDevice = {
    "id": "id",
    "username": "username",
    "sensor_pod_id": "sensor_pod_id",
    "name": "name",
    "device_manufacturer": "device_manufacturer",
    "model_name": "model_name",
    "manufacturer_device_model": "manufacturer_device_model",
    "location": "location",
    "status": "status"
  };


  before(function () {
    nock.disableNetConnect();

    nock(configs.uri + '/device')
      .persist()
      .post(testDevice)
      .reply(200, {});

    nock(configs.uri + '/device/' + id)
      .persist()
      .get()
      .reply(200, {});

  });

  after(function () {
    nock.cleanAll();
  });


  describe('Create Device', function () {
    it('should check no parameters provided', function () {

    });
    it('should create device successfully', function () {

    });
  });
});
