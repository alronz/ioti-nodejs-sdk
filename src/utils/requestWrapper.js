var request = require("request");
var when = require('when');
var helper = '../utils/helper';


var getCSRFToken = function (configs) {
  var cookieJar, csrfToken;

  cookieJar = request.jar();

  return when.promise(function (resolve) {
    request({
        url: configs.baseUrl + "/user",
        method: "GET",
        jar: cookieJar,
        auth: configs.credentials
      },
      function (error, response, body) {
        var cookies = cookieJar.getCookies(configs.uri);

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
    } catch (e) {
    }


    if (!error && (response.statusCode < 200 || response.statusCode >= 300)) {
      error = new Error(body);
      error.code = response.statusCode;
      if (error.code === 401 || error.code === 403)
        error.body = error.message;
      error.message = 'Unauthorized: Access is denied due to invalid credentials.';
      body = null;
    }
    callback(error, body, response);
  };
}


function createRequest(parameters, callback) {

  parameters.options.auth = parameters.configs.credentials;

  // Query params
  if (parameters.options.qs && Object.keys(parameters.options.qs).length > 0)
    parameters.options.useQuerystring = true;

  if (parameters.withCSRF) {
    getCSRFToken(parameters.configs).then(function (csrf) {
      parameters.options.jar = csrf.cookieJar;
      parameters.options.headers['X-CSRF-Token'] = csrf.csrfToken;

      request(parameters.options, formatErrorIfExists(callback));
    });
  } else {
    request(parameters.options, formatErrorIfExists(callback));
  }
}

module.exports = createRequest;