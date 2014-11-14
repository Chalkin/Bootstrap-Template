(function () {
    "use strict";

    module.exports = function (grunt) {

        // show elapsed time at the end
        require('time-grunt')(grunt);

        // load all grunt tasks
        require('load-grunt-tasks')(grunt);

        // configurable paths
        var dirConfig = {
            assets: 'less',
            dist: 'css'
        };

        grunt.initConfig({

            directory: dirConfig,

            less: {
                development: {
                    options: {
                        paths: ["<%= directory.assets %>"]
                    },
                    files: {
                        "<%= directory.dist %>/template.css": "<%= directory.assets %>/template.less",
                    }
                }
            },
            watch: {
                less: {
                    files: [
                        '<%= directory.assets %>/**.less',
                    ],
                    tasks: ['less']
                }
            }
        });

        grunt.registerTask('build', [
            'less:development'
        ]);

        grunt.registerTask('default', [
            'build',
            'watch'
        ]);

    };
})();