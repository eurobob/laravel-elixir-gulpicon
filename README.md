# laravel-elixir-gulpicon

This is a simple gulpicon wrapper around Laravel Elixir. Add it to your Elixir-enhanced Gulpfile, like so:

## Install

```
npm install --save-dev laravel-elixir-gulpicon
```

## Usage

### Example *Gulpfile*:

```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-gulpicon');

elixir(function(mix) {
   mix.gulpicon();
});
```

By default this will scan your `resources/assets/svg` directory for all svg files.

### Changing the default svg directories

If you want to process a different image directory, you can update your Elixir config by either:

```javascript
mix.gulpicon("resources/assets/svg");
```

Finally, if you'd like to output to a different directory than the default public/svg, then you may override this as well.

```javascript
mix.gulpicon("resources/assets/svg", "public/svg/foo/bar/");
```

### Custom gulpicon options

You can override the default gulpicon options by passing in an options object like so:

```javascript
mix.gulpicon(
    "resources/assets/svg",
    "public/svg",
    {
        optimizationLevel: 3,
        enhanceSVG: true,
        compressPNG: true
    }
);
```

Available options are listed [here in the grunticon readme](https://github.com/filamentgroup/grunticon-lib#options).