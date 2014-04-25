var gulp = require('gulp');

var jshint = require('gulp-jshint');
var rjs = require('gulp-requirejs');

var paths = {
	scripts: ['src2/**/*.js'],
	scriptsNoLib: ['src2/**/*.js','!src2/libs/*.js']	
};

var rjsBase = 'src2';
var almondjs = 'libs/almond';
var almondInclude = 'app';
var rjsShim = {
	'app': ['ui/scene1'],
	'ui/scene1': ['game']
};
var buildDir = 'html';

gulp.task('jshint', function() {
  // Minify and copy all JavaScript (except vendor scripts)
  return gulp.src(paths.scriptsNoLib)
	.pipe(jshint.reporter('default'))
});

gulp.task('rjsBuild-dev', function() {
    rjs({
        baseUrl: rjsBase,
        out: 'game.js',
        name: almondjs,
	include: almondInclude,
	optimize: 'none',
	shim: rjsShim
    })
	.pipe(gulp.dest(buildDir)); // pipe it to the output DIR
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['jshint', 'rjsBuild-dev']);
});

gulp.task('default', ['jshint', 'rjsBuild-dev', 'watch']);
