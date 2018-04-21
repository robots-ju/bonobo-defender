const {mix} = require('laravel-mix');
const webpack = require('webpack');

mix.setPublicPath('public');
mix.webpackConfig({
    module: {
        rules: [
            {
                test: [/\.vert$/, /\.frag$/],
                use: 'raw-loader',
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true),
        }),
    ],
});

mix.js('src/js/app.js', 'public/js');
mix.copy('src/img', 'public/img');
mix.sass('src/sass/app.scss', 'public/css');
