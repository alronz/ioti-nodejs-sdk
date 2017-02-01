(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.requestWrapper = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  var request = require("request");
  var when = require('when');
  var helper = require('../utils/helper');

  var getCSRFToken = function getCSRFToken(configs) {
    var cookieJar, csrfToken;

    cookieJar = request.jar();

    return when.promise(function (resolve) {
      request({
        url: configs.baseUrl + "/user",
        method: "GET",
        jar: cookieJar,
        auth: configs.credentials
      }, function (error, response, body) {
        var cookies = cookieJar.getCookies(configs.baseUrl);

        for (var i = 0; i < cookies.length; ++i) {
          if (cookies[i].key == "XSRF-TOKEN") {
            csrfToken = cookies[i].value;
          }
        }

        resolve({
          csrfToken: csrfToken,
          cookieJar: cookieJar
        });
      });
    });
  };

  function formatErrorIfExists(callback) {
    return function (error, response, body) {

      // If we have an error return it.
      if (error) {
        // first ensure that it's an instanceof Error
        if (!(error instanceof Error)) {
          body = error;
          error = new Error(error.message || error.error || error);
          error.body = body;
        }
        callback(error, body, response);
        return;
      }

      try {
        body = JSON.parse(body);
      } catch (e) {}

      if (!error && (response.statusCode < 200 || response.statusCode >= 300)) {
        var error = {};
        error.message = body.message ? body.message : body;
        error.code = response.statusCode;
        if (error.code === 401 || error.code === 403) {
          error.message = 'Unauthorized: Access is denied due to invalid credentials.';
        }
        body = null;
      }
      callback(error, body, response);
    };
  }

  function createRequest(parameters, callback) {

    parameters.options.auth = parameters.configs.credentials;

    // Query params
    if (parameters.options.qs && Object.keys(parameters.options.qs).length > 0) parameters.options.useQuerystring = true;

    return new Promise(function (resolve, fail) {

      var promiseCallback = function promiseCallback(err, data) {
        if (err) {
          fail(err);
        } else {
          resolve(data);
        }
        callback && callback.apply(undefined, arguments);
      };

      if (parameters.withCSRF) {
        getCSRFToken(parameters.configs).then(function (csrf) {
          parameters.options.jar = csrf.cookieJar;
          parameters.options.headers = {};
          parameters.options.headers['X-CSRF-Token'] = csrf.csrfToken;

          request(parameters.options, formatErrorIfExists(promiseCallback));
        });
      } else {
        request(parameters.options, formatErrorIfExists(promiseCallback));
      }
    });
  }

  module.exports = createRequest;
});