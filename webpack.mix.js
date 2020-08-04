const mix = require('laravel-mix');
// const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');


/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.config.publicPath = 'dist';
mix.config.sourcemaps = 'true';
console.log(mix.config)
mix.js('src/js/main.js', 'dist/js/index.js')
    .sass('src/sass/main.scss', 'dist/css')
    .copyDirectory('src/img/background', 'dist/img/background')
    .copyDirectory('src/img/other', 'dist/img/other')
    .copy('src/index.html', 'dist/index.html');

mix.webpackConfig({
    plugins: [
        new SVGSpritemapPlugin('src/img/svg/**/*.svg', {
            output: {
                filename: "img/spritemap.svg"
            }
        })
    ]
    })