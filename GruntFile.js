module.exports = function(grunt) {

  grunt.config.init({
    pkg: grunt.file.readJSON('package.json')
  });

  grunt.loadNpmTasks('grunt-eslint');
  grunt.config('eslint', {
    dist: {
      options: {
        configFile: '.eslintrc',
      },
      src: ['touchtap-event.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.config('jasmine', {
    test: {
      src: 'touchtap-event.js',
      options: {
        specs: 'test/*-spec.js'
      }
    }
  });

  grunt.registerTask('test', [
    'jasmine:test',
  ]);

  grunt.registerTask('default', [
    'eslint',
    'test'
  ]);
};
