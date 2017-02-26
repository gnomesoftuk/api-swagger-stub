/*global module:false*/
module.exports = function (grunt) {

    grunt.registerTask("fetchApi", function () {
        var done = this.async();

        var fetchApi = require('./fetchApi');
        fetchApi(done);
    });

    // Default task.
    grunt.registerTask('default', ['fetchApi']);

};
