var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');//自动补全
var less = require('gulp-less');//less编译
// var uglify = require('gulp-uglify');压缩js
var concat = require('gulp-concat');//合并文件
var connect = require('gulp-connect');//服务器
var browserSync = require('browser-sync');//实时刷新服务器
var rev = require('gulp-rev');//生成MD5文件
var inject = require('gulp-inject');//插入文件
var clean = require('gulp-clean');//删除文件
var gulpSequence = require('gulp-sequence');//按顺序执行任务task
gulp.task('buildLess',function(cb){
	return gulpSequence('less','clean','rev','inject',cb);
})
gulp.task('buildJs',function(cb){
	return gulpSequence('js','clean','rev','inject',cb);
})

gulp.task('clean',function(){
	return gulp.src(['app/indexpage-*.js','app/indexpage-*.css'])
	.pipe(clean())
})

gulp.task('rev',function () {
    return gulp.src(['app/indexpage.js','app/indexpage.css'])
        .pipe(rev())
        .pipe(gulp.dest('app/'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./'))
});
gulp.task('inject',function(){
	return gulp.src('app/indexpage.html')
	.pipe(inject(gulp.src(['app/indexpage-*.js','app/indexpage-*.css']),{relative: true}))
	.pipe(gulp.dest('app/'))
})
// gulp.task('localhost',function(){
// 	connect.server({
// 		root:'app/',
// 		port:8000
// 	});
// });
//服务器,监听文件刷新页面
gulp.task('browser-sync', function() {
    browserSync({
        files: "**/*.css,**/*.html,*.js",
        server: {
            baseDir: "app/"
        }
    });
});
//监听任务
gulp.task('mywatch',function(){
	gulp.watch(['./app/views/*.less'],['buildLess']);
	gulp.watch(['./app/*/*.js'],['buildJs']);
});

gulp.task('default',['browser-sync','mywatch']);

gulp.task('js',function(){
	return gulp.src('./app/*/*.js')
	.pipe(concat('indexpage.js'))
	.pipe(gulp.dest('app/'))
});
gulp.task('less', function(){
    return gulp.src('./app/views/*.less')
		.pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 20 versions'],
            cascade: true
        }))
		.pipe(concat('indexpage.css'))
        .pipe(gulp.dest('app/'))
});



