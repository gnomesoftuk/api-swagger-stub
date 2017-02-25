'use strict';

var app = require('connect')();
var http = require('http');
var swaggerTools = require('swagger-tools');
var jsyaml = require('js-yaml');
var request = require('request');

var serverPort = normalizePort(process.env.PORT || '8080');

// swaggerRouter configuration
var options = {
    swaggerUi: '/swagger.json',
    controllers: './lib/controllers',
    useStubs: process.env.NODE_ENV === 'development' ? true : false // Conditionally turn on stubs (mock mode)
};


/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
var swaggerUri = 'https://s3-eu-west-1.amazonaws.com/hermesapi/Schemas/Locations/v1/swagger.yaml';
request(swaggerUri,
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            initServer(body);
        } else {
            console.log("Unable to read swagger file from " + swaggerUri + " - server will not start.");
        }
    });


// Initialize the Swagger middleware

function initServer(spec) {

    var swaggerDoc = jsyaml.safeLoad(spec);

    swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {
            // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
            app.use(middleware.swaggerMetadata());

            // Validate Swagger requests
            app.use(middleware.swaggerValidator());

            // Route validated requests to appropriate controller
            app.use(middleware.swaggerRouter(options));

            // Serve the Swagger documents and Swagger UI
            app.use(middleware.swaggerUi());

            // Start the server
            http.createServer(app).listen(serverPort, function () {
                console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
                console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
            });
        }
    );
}
