const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const nano = require('gulp-cssnano');
const browserSync = require('browser-sync');
const spawn = require('child_process').spawn;

gulp.task('build-docs', (done) => {
  browserSync.notify('Running: <kbd>$ jekyll build</kbd>');
  spawn('jekyll', ['build'], { stdio: 'inherit' })
    .on('close', done);
});

gulp.task('rebuild-docs', ['build-docs'], () => browserSync.reload());

gulp.task('browser-sync', ['sass', 'build-docs'], () => {
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
    .pipe(gulp.dest('./dist'))
    .pipe(gulp.dest('./_gh_pages/css'))
    .pipe(browserSync.reload({ stream: true }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(nano())
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', () => {
  gulp.watch('./scss/**/*.scss', ['sass']);
  gulp.watch(['./docs/**/*.html', './docs/**/*.md'], ['rebuild-docs']);
});

gulp.task('default', ['browser-sync', 'watch']);
