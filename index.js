var glob = require('glob'),
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    gulpicon = require('gulpicon/tasks/gulpicon'),
    elixir = require('laravel-elixir'),
    config = elixir.config;


elixir.extend('gulpicon', function(src, output, options) {

    config.svg = {
        folder: 'svg',
        outputFolder: 'svg',
    };

    var src = (src || config.get('assets.svg.folder')) + '/**/*.svg',
        gulpicon_config = options || require("gulpicon/example/config.js");

    gulpicon_config.dest = output || config.get('public.svg.outputFolder');

    new elixir.Task('gulpicon', function(){
        var files = glob.sync(src);
        if (files.length > 0) {
            (gulpicon(files, gulpicon_config))();
            gutil.log('Finished gulpicon conversion');
        }
    }).watch([
        src
    ]);
}); 