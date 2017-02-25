'use strict';

module.exports = function generateApi (done) {
    var request = require('request'),
        fs = require('fs');

    var swaggerUri = 'https://s3-eu-west-1.amazonaws.com/hermesapi/Schemas/Locations/v1/swagger.yaml';
    request(swaggerUri,
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log("generateApi");
                if (!fs.existsSync("lib/api")) {
                    fs.mkdirSync("lib/api");
                }
                fs.writeFileSync('lib/api/swagger.yaml', body);
                done();
            } else {
                console.log("Unable to read swagger file from " + swaggerUri + " - server will not start.");
                done();
            }
        });
}
