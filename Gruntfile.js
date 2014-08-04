module.exports = function (grunt) {

    var

        buildTasks = [
                'sass:compile',
                'concat:css'
            ],

        config = {
            package: grunt.file.readJSON('package.json'),

          sass: {
            compile: {
              options: {
                sourcemap: true,
                loadPath: ['bower_components/bourbon/dist/',
                            'bower_components/neat/app/assets/stylesheets']
              },
              files: {
                'app.css': 'sass/app.scss'
              }
            }
          },

          concat: {
            css: {
              src: ['bower_components/normalize-css/normalize-css', 'app.css'],
              dest: 'app.css'
            }
          }

        };

    // These plugins provide necessary tasks.
    require('load-grunt-tasks')(grunt);

    grunt.initConfig(config);

    grunt.registerTask('build', buildTasks);

}
