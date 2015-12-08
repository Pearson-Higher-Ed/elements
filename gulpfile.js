'use strict';

const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sassLint = require('gulp-sass-lint');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const nano = require('gulp-cssnano');
const del = require('del');
const browserSync = require('browser-sync');
const spawn = require('child_process').spawn;
const path = require('path');

let metalsmithLoc = path.join('node_modules', '.bin', 'metalsmith');

if(process.platform.indexOf('win') === 0){
  metalsmithLoc += '.cmd';
}

gulp.task('clean', () => {
  return del([
    'dist',
    '_gh_pages',
    'npm-debug.log'
  ]);
});

gulp.task('lint', () => {
  gulp.src([
    './scss/**/*.scss',
    '!./scss/_normalize.scss',
    './docs/scss/**/*.scss',
    '!./docs/scss/_syntax.scss'
  ])
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});

gulp.task('build-docs', ['sass'], (done) => {
  browserSync.notify('Running: <kbd>$ metalsmith</kbd>');

  gulp.src('./docs/scss/docs.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer]))
    .pipe(gulp.dest('./_gh_pages/css'));

  spawn(metalsmithLoc, { stdio: 'inherit' })
    .on('close', done);
});

gulp.task('rebuild-docs', ['build-docs'], () => browserSync.reload());

gulp.task('browser-sync', ['build-docs'], () => {
  browserSync({
    server: {
      baseDir: '_gh_pages'
    }
  });
});

gulp.task('sass', () => {
  gulp.src('./scss/elements.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer]))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.reload({ stream: true }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(nano())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', () => {
  gulp.watch([
    './scss/**/*.scss',
    './docs/**/*.html',
    './docs/**/*.md',
    './docs/scss/**/*.scss'
  ], ['rebuild-docs']);
});

gulp.task('default', ['browser-sync', 'watch']);
