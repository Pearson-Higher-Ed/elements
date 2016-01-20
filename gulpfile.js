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

let metalsmithPath = path.join('node_modules', '.bin', 'metalsmith');

if(process.platform.indexOf('win') === 0){
  metalsmithPath += '.cmd';
}

gulp.task('clean', () => {
  return del([
    'dist',
    '_gh_pages',
    'npm-debug.log'
  ]);
});

gulp.task('lint', () => {
  return gulp.src([
    './scss/**/*.scss',
    '!./scss/_normalize.scss',
    '!./scss/_icons.scss',
    './docs/scss/**/*.scss',
    '!./docs/scss/_syntax.scss'
  ])
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
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

gulp.task('build', ['sass'], () => {
  gulp.src('./assets/**')
    .pipe(gulp.dest('./dist'));
});

gulp.task('build-docs', ['build'], (done) => {
  browserSync.notify('Running: <kbd>$ metalsmith</kbd>');

  gulp.src('./docs/scss/docs.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer]))
    .pipe(gulp.dest('./_gh_pages/css'));

<<<<<<< HEAD
  gulp.src('./assets/**')
    .pipe(gulp.dest('./_gh_pages'));

=======
>>>>>>> fa547d6aac95f7b79cc46e359550eb8c7d671b75
  spawn(metalsmithPath, { stdio: 'inherit' })
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

gulp.task('watch', () => {
  gulp.watch([
    './scss/**/*.scss',
    './docs/**/*.html',
    './docs/**/*.md',
    './docs/scss/**/*.scss'
  ], ['rebuild-docs']);
});

gulp.task('default', ['browser-sync', 'watch']);
