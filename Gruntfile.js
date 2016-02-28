module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            files: ['src/**/*.js'],
            tasks: ['jshint', 'uglify']
        },

        uglify: {
            options: {
                sourceMap: true,
            },
            dev: {
                files: {
                    'dist/bootloader.min.js': ['src/**/*.js']
                }
            }
        },

        jshint: {
            files: ['src/**/*.js']
        }

    });


    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint', 'uglify']);

}