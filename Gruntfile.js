/*global module:false*/
module.exports = function (grunt) {

    grunt.registerTask("generateApi", function () {
        var done = this.async();

        var generateApi = require('./generateApi');
        generateApi(done);
    });

    // Project configuration.
    grunt.initConfig({
        execute: {
            generateApi: {
                src: ['generateApi.js']
            }
        },
        'swagger-js-codegen': {
            options: {
                apis: [
                    {
                        swagger: 'swagger/_batch.json',
                        fileName: 'batch.api.28.io.js',
                        className: 'Locations'
                    }
                ],
                dest: 'lib'
            },
            dist: {}
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-swagger-js-codegen');

    // Default task.
    grunt.registerTask('default', ['generateApi']);

};
