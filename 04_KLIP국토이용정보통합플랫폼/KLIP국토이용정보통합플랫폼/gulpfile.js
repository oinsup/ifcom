var gulp = require('gulp');
var scss = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var nodemon = require('nodemon');
const browserSync = require('browser-sync');
const fileinclude = require('gulp-file-include');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var del = require('del');
var changed = require('gulp-changed');
var fileSync = require('gulp-file-sync');

// ❗ 하위뎁스 컴파일 잘안됨. file include 쪽 문제잇음.


var PATH = {
  HTML: './workspace/html',
  INC: './workspace/html/include',
  GUIDE: './workspace/assets/guide',
  ASSETS: {
    FONTS: './workspace/assets/fonts',
    IMAGES: './workspace/assets/images',
    STYLE: './workspace/assets/style',
    SCRIPT: './workspace/assets/script',
    SCRIPTMERGE: './workspace/assets/scriptmerge',
    LIB : './workspace/assets/lib'
  }
},
DEST_PATH = {
  HTML: './dist',
  INC: './dist/include',
  GUIDE: './dist/common/guide',
  ASSETS: {
    FONTS: './dist/common/fonts',
    IMAGES: './dist/common/images',
    STYLE: './dist/common/css',
    SCRIPT: './dist/common/js',
    LIB: './dist/common/libjs'
  }
}

gulp.task('clear', () => {
  return new Promise( resolve => {
    del.sync([
              'dist/**',
              'dist/common/**',
              '!dist/common',
              '!dist/common/fonts',
              '!dist/common/images',
              '!dist/common/libjs'
            ]);
    resolve();
  });
});

gulp.task('clear:all', () => {
  return new Promise( resolve => {
    del.sync([
              'dist/**',
            ]);
    resolve();
  });
});

gulp.task( 'scss:compile', () => {
  return new Promise( resolve => {
    var options = {
      outputStyle: "compressed",
      indentType: "space",
      indentWidth: 2
    };

    gulp.src(PATH.ASSETS.STYLE + '/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(scss.sync().on('error', scss.logError))
      .pipe(scss(options))
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest(DEST_PATH.ASSETS.STYLE))
      .pipe(browserSync.reload({stream:true}));
    
    resolve();
  });
});

const browsSyncOpt = {
  stream: true
}

let today = new Date();   
let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜

const fileIncludeOpt ={
  prefix: '@@',
  basepath: '@file',
  context:{
    'webRoot' : ".",
    'htmlRoot' : '.',
    'imageRoot' : './common/images',
    'cssRoot': './common/css',
    'subPath' :'',
    'today' : '2020-01-01'
  }
}

//html에 있는 .html만 watch
//include는 별도의 task로 watch 
// if include 폴더의 file changed 되면 html 폴더 전체를 compile
// 🔴 변경된 파일의 현재 path를 확인후, 진해인데.. task fileinclude 쪽보니까 전체를 하는거롤 나와는있는데?? watch에서 잘못되나??/?/차후확인
gulp.task('html', () => {
  return gulp.src([
    PATH.HTML + '/**/*.html',
    '!'+PATH.HTML + '/include/*.html'
    // PATH.HTML + '/plan_manage/*.html'
  ])
          .pipe(changed(DEST_PATH.HTML))
          .pipe( fileinclude(fileIncludeOpt) )
          .pipe(gulp.dest(DEST_PATH.HTML))
          .pipe( browserSync.reload(browsSyncOpt) );
});

//include파일 변경되면 html파일 전체 컴파일
gulp.task('fileinclude', function() {
  //include 파일을 수정 할 경우 전체 html파일을 compile / include folder 은 제외
  return new Promise( resolve => {
    gulp.src([
      PATH.HTML + '/**/*.html',
      '!'+PATH.HTML + '/include/*.html',
      // PATH.HTML + '/plan_manage/*.html',
      ])
      .pipe(fileinclude(fileIncludeOpt))
      .pipe(gulp.dest(DEST_PATH.HTML))
      .pipe( browserSync.reload(browsSyncOpt) );

    //include된 파일 dist 카피
    gulp.src(PATH.INC + '/*.html')
      // .pipe(changed(DEST_PATH.INC))
      .pipe(gulp.dest(DEST_PATH.INC));
      resolve();
  });
});

gulp.task('librarySync', () => {
  return new Promise( resolve => {
    fileSync(PATH.ASSETS.LIB, DEST_PATH.ASSETS.LIB, {recursive:true});

    gulp.src(PATH.ASSETS.FONTS + '/*.*')
      .pipe( browserSync.reload({stream:true}));

    resolve();
  });
});

gulp.task('fontsSync', () => {
  return new Promise( resolve => {
    fileSync(PATH.ASSETS.FONTS, DEST_PATH.ASSETS.FONTS, {recursive:true});

    gulp.src(PATH.ASSETS.FONTS + '/*.*')
      .pipe( browserSync.reload({stream:true}));
      
    resolve();
  });
});


// script merge
gulp.task('script:bulid', () => {
  return new Promise( resolve => {
    gulp.src([
        PATH.ASSETS.SCRIPTMERGE + '/*.*'
      ])
      .pipe( concat('common.js') )
      .pipe( gulp.dest(DEST_PATH.ASSETS.SCRIPT) )
      .pipe( uglify({
        mangle: true
      }) )
      .pipe( rename('common.min.js') )
      .pipe( gulp.dest(DEST_PATH.ASSETS.SCRIPT) )
      .pipe( browserSync.reload({stream:true}));

      resolve();
  });
});

gulp.task('script:copy', () => {
  return new Promise( resolve => {
    gulp.src([
      PATH.ASSETS.SCRIPT + '/**/*.*'
      ])
      .pipe( gulp.dest(DEST_PATH.ASSETS.SCRIPT))
      .pipe( browserSync.reload({stream:true}));
      resolve();
  });
});

gulp.task('imagesSync', () =>{
  return new Promise( resolve => {

    fileSync(PATH.ASSETS.IMAGES,DEST_PATH.ASSETS.IMAGES,{recursive:true});
    
    gulp.src(PATH.ASSETS.IMAGES + '/**/*.*')
      .pipe( browserSync.reload({stream:true}));

    resolve();
  });
});


///////////////////////////////////////////////////////////////////
/////////////////// ---------  GUIDE  --------- ///////////////////
///////////////////////////////////////////////////////////////////

gulp.task('guide:bulid', () => {
  return new Promise( resolve => {
    gulp.series(['guide', 'guide:scss']);

    resolve();
  });
});

gulp.task('guide', () => {
  return new Promise( resolve => {
    gulp.src([
        PATH.GUIDE + '/**/*.*',
        '!' + PATH.GUIDE + '/**/*.scss'
      ])
      .pipe( gulp.dest(DEST_PATH.GUIDE))
      .pipe( browserSync.reload({stream:true}));

    resolve();
  });
});

gulp.task('guide:scss', () => {
  return new Promise( resolve => {
    var options = {
      outputStyle: "compact",
      indentType: "space",
      indentWidth: 2
    };

    gulp.src(PATH.GUIDE + '/*.scss')
      .pipe(sourcemaps.init())
      .pipe(scss.sync().on('error', scss.logError))
      .pipe(scss(options))
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest(DEST_PATH.GUIDE))
      .pipe(browserSync.reload({stream:true}));
    
    resolve();
  });
});

gulp.task('guide:html', () => {
  return new Promise( resolve => {

    gulp.src(PATH.HTML + '/__guide.html')
      .pipe(fileinclude(fileIncludeOpt))
      .pipe(gulp.dest(DEST_PATH.HTML))
      .pipe( browserSync.reload(browsSyncOpt) );
    
    resolve();
  });
});

///////////////////////////////////////////////////////////////////
///////////////// ---------  GUIDE END  --------- /////////////////
///////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////
///////////////// ---------  COPY       --------- /////////////////
///////////////////////////////////////////////////////////////////
gulp.task('copy', () => {
  return new Promise( resolve => {
    gulp.src([PATH.HTML+'/sample_data/*.*'])
        .pipe(gulp.dest(DEST_PATH.HTML+'/sample_data'));

      resolve();
  });
});


gulp.task('watch', () => {
  return new Promise( resolve => {
    gulp.watch(PATH.HTML + '/**/*.html', gulp.series(['html']));
    gulp.watch(PATH.INC + '/*.html', gulp.series(['fileinclude']));
    gulp.watch(PATH.ASSETS.STYLE + "/**/*.scss", gulp.series(['scss:compile']));

    gulp.watch(PATH.ASSETS.SCRIPTMERGE + "/**/*.js", gulp.series(['script:bulid']));
    gulp.watch(PATH.ASSETS.SCRIPT + "/**/*.*", gulp.series(['script:copy']));

    gulp.watch(PATH.ASSETS.LIB + "/**/*.*", gulp.series(['librarySync']));
    gulp.watch(PATH.ASSETS.IMAGES + "/**/*.*", gulp.series(['imagesSync']));
    gulp.watch(PATH.ASSETS.FONTS + "/*.*", gulp.series(['fontsSync']));

    //guide
    gulp.watch(PATH.GUIDE + "/**/*.*", gulp.series(['guide', 'guide:scss']));
    gulp.watch(PATH.HTML + '/__guide_include/*.*', gulp.series(['guide:html']));

    resolve();
  });
});


gulp.task('nodemon:start', () => {
  return new Promise( resolve => {
    nodemon({
      script: 'app.js'
      // watch: 'app'
    });
  
    resolve();
  });
});

gulp.task('borwserSync', () => {
  return new Promise( resolve => {
    console.log('실행');
    browserSync.init({
      server: {
        baseDir: './'
      }
    }, {
      proxy: 'http://127.0.0.1:8005',
      port: 8006,
      open: false,
      notify: false,
      ghostMode: false,
    }
    );

    resolve();
  });
});



gulp.task('default', gulp.series([
  'nodemon:start',
  'copy',
  'imagesSync',
  'fontsSync',
  'librarySync',
  'html',
  'fileinclude',
  'script:copy',
  'script:bulid',
  'scss:compile',
  'guide',
  'guide:scss',
  'borwserSync', 
  'watch'
]));