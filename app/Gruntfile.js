module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),

    // Metadata.
    meta: {
        basePath: '../',
        srcPath: '../app/',
        distPath: '../app/dist/'
    },

    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> ',

    jshint: {
            all: ['<%= meta.srcPath %>js/**/*.js']
    },
    
    uglify: {
      options: {
         stripBanners: true
      },
      build: {
        src: '<%= meta.srcPath %>js/*.js',
        dest: '<%= meta.distPath %>js/<%= pkg.name %>.min.js'
      }
    },// uglify

    sass: {
			dist: {
				files: {
					'<%= meta.distPath %>css/main.css' : '<%= meta.srcPath %>sass/main.scss'
				}
			}
		}, // sass

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Load the plugin that provides the "sass" task.
  grunt.loadNpmTasks( 'grunt-contrib-sass' );


  // Default task(s).
  grunt.registerTask('default', ['jshint','uglify','sass']);

};