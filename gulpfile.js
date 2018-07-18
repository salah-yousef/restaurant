var gulp = require('gulp');
var sass = require ('gulp-sass');
var autoprefixer = require ('gulp-autoprefixer');
var browserSync = require('browser-sync').create();



gulp.task('styles', function(done){
  gulp.src('sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
        browsers: ['last 2 versions']
      }))
      .pipe(gulp.dest('./css'))
      .pipe(browserSync.stream());
  done();
});

gulp.task('default', gulp.series('styles', function() { 
	gulp.watch('sass/**/*.scss', gulp.series('styles'));

	browserSync.init({
		server: './'
	});
}));