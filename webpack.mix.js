const mix = require('laravel-mix');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

mix.config.publicPath = 'dist';
mix.config.sourcemaps = 'true';
mix.js('src/js/main.js', 'dist/js/index.js')
    .sass('src/sass/main.scss', 'dist/css')
    .copyDirectory('src/img/background', 'dist/img/background')
    .copyDirectory('src/img/other', 'dist/img/other')

mix.webpackConfig({
    plugins: [
        new SVGSpritemapPlugin('src/img/svg/**/*.svg', {
            output: {
                filename: "img/spritemap.svg"
            }
        }),
        new HtmlWebpackPlugin({
            title: 'Custom template',
            template: './src/index.html'
        })
    ]
})