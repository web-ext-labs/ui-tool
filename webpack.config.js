const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: "./src/script.js",
    output: {
        path: __dirname,
        filename: "build.js"
    },
    plugins: [
        new UglifyJsPlugin()
    ]
};
