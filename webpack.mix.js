const mix = require('laravel-mix');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

mix.config.publicPath = 'dist';
mix.config.resourceRoot = './';
mix.config.fileLoaderDirs = {images: 'img', fonts: 'font'};
mix.sourceMaps()
    .js('src/js/main.js', 'dist/js/index.js')
    .sass('src/sass/main.scss', 'dist/')

mix.webpackConfig({
    plugins: [
        new SVGSpritemapPlugin('src/img/svg/**/*.svg', {
            output: {
                filename: "img/spritemap.svg"
            }
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: './index.html',
            inject: false,
        })
    ]
})