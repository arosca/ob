var gulp = require('gulp');
var gls = require('gulp-live-server');
var gutil = require('gutil');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var webpackDevConfig = Object.create(webpackConfig);

gulp.task('html', function(){
    gulp.src(['src/**/*.html','src/**/*.json'])
        .pipe(gulp.dest('dist/'));
});

gulp.task('webpack', function(callback) {
  // run webpack
  webpack(webpackDevConfig, function(err, stats) {
    if(err) throw new gutil.PluginError('webpack:build', err);
    // gutil.log('webpack build complete');
    gutil.log('[webpack:build]', stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task('serve', function() {
    var server = gls.static(['dist']);
    server.start();

    gulp.watch(['src/**/*.html'], ['html']);
    gulp.watch(['src/**/*.js','src/**/*.jsx','src/**/*.scss'], ['webpack']);

    // use gulp.watch to trigger server actions(notify, start or stop) 
    gulp.watch(['dist/**/*'], function (file) {
        server.notify.apply(server, [file]);
    });
});

gulp.task('default',['webpack','html','serve']);