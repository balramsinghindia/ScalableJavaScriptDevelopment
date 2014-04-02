module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: ['wp-content/themes/unicommerce/js/home_slider/jquery.min.js', 'wp-content/themes/unicommerce/js/home_slider/jquery.easing.1.3.js', 'wp-content/themes/unicommerce/js/home_slider/jcarousellite_1.8_modified.js', 'wp-content/themes/unicommerce/js/home_slider/omniture.js', 'wp-content/themes/unicommerce/js/home_slider/initializer.js', 'wp-content/themes/unicommerce/js/home_slider/homepage.js'],
        dest: 'wp-content/themes/unicommerce/js/homeSlider.min.js'
      }
    },
    watch: {
      css: {
        files: 'wp-content/themes/unicommerce/style.css',
        options: {
          livereload: true
        }
      },
	php: {
        files: 'wp-content/themes/Templates/*',
        options: {
          livereload: true
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'watch']);

  // grunt.registerTask('watch', ['grunt-contrib-watcht']);

};
