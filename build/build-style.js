const gulp = require('gulp');
const clean = require('gulp-clean');
const cleanCSS = require('gulp-clean-css');
const less = require('gulp-less');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

//清空文件夹
gulp.task('clean', function () {
    return gulp.src('../dist/*', { read: false })
        .pipe(clean({ force: true }));
});

// 编译less
gulp.task('css', function () {
    gulp.src('../src/styles/index.less')
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie > 8']
        }))
        .pipe(cleanCSS())
        .pipe(rename('data-views.css'))
        .pipe(gulp.dest('../dist/styles'));
});

// 拷贝字体文件
gulp.task('fonts', function () {
    gulp.src('../src/styles/iconfont/fonts/*.*')
        .pipe(gulp.dest('../dist/styles/fonts'));
});

// gulp.task('default', ['css', 'fonts']);

gulp.task('default', ['clean'], function () {
    gulp.start(['css', 'fonts']);
})
