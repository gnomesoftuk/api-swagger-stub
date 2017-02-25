/*global module:false*/
module.exports = function (grunt) {

    grunt.registerTask("fetchApi", function () {
        var done = this.async();

        var fetchApi = require('./fetchApi');
        fetchApi(done);
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Default task.
    grunt.registerTask('default', ['fetchApi']);

};
