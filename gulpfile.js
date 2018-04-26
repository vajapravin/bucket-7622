'use strict';

/*!
 * Module dependencies.
 */
var awspublish = require('gulp-awspublish');
var dotenv = require('dotenv').config({path: process.env.HOME + '/.dotfiles/frontend.env'});
var config = dotenv.parsed;
var gulp = require('gulp');
var fs = require('fs');
var gulpLoadPlugins = require('gulp-load-plugins');
var runSequence = require('run-sequence');

var dist;         // dist directory
var path;         // path to the app
var files = [];   // js files required by the app

// conventions
var fonts = ['.eot', '.svg', '.ttf', '.woff', '.otf'];
var images = ['.png', '.jpeg', '.jpg', '.gif'];
var envs = ['dev', 'staging', 'production'];

const $ = gulpLoadPlugins({ lazy: false });
const assetsPaths = {
  app: "./src",
  javascripts: [''],
  stylesheets: ['styles'],
  images: ['assets/img']
};

const destPath = "./dist/assets";
const release_env = true;

// initialize sprockets!
$.sprockets.default.declare(assetsPaths, destPath);

/**
 * Sprockets way
 */

gulp.task('build:image', () => {
  images.forEach(function (extension) {
    return gulp.src([assetsPaths.app + '/assets/**/*' + extension])
      .pipe($.if(release_env, $.sprockets.default.precompile()))
      .pipe(gulp.dest(destPath))
  })
});

gulp.task('default', () => {
  // the task of building image must be processed before others
  runSequence('build:image', ['build:css', 'build:js']);
});

gulp.task('publish', function() {
  dist = './dist/';

  // create a new publisher using S3 options
  // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#constructor-property
  var publisher = awspublish.create({
    region: config.S3_REGION,
    params: {
      Bucket: config.S3_BUCKET
    },
    accessKeyId: config.S3_KEY,
    secretAccessKey: config.S3_SECRET
  }, {
    cacheFileName: './tmp/cacheFile.tmp'
  });

  // define custom headers
  var headers = {
    'Cache-Control': 'max-age=0, no-transform, public'
    // ...
  };

  return gulp.src('./dist/**/**')
    // gzip, Set Content-Encoding headers and add .gz extension
    // .pipe(awspublish.gzip({ ext: '.gz' }))

    // publisher will add Content-Length, Content-Type and headers specified above
    // If not specified it will set x-amz-acl to public-read by default
    .pipe(publisher.publish(headers))

    // create a cache file to speed up consecutive uploads
    .pipe(publisher.cache())

     // print upload updates to console
    .pipe(awspublish.reporter());
});