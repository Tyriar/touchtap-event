module.exports = function(grunt) {

  grunt.config.init({
    pkg: grunt.file.readJSON('package.json')
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
    'test'
  ]);
};
