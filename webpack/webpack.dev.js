const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const webpack = require('webpack');

const minify = {
    collapseWhitespace: true,
    removeComments: true,
    minifyJS: true,
    minifyURLs: true,
    removeEmptyAttributes: true,
    removeScriptTypeAttributes: true,
}


const templateFileMapper = [

    { template: "./src/blog.ejs", file: "blog.html" },
    { template: "./src/index.ejs", file: "index.html" },
    { template: "./src/kadra.ejs", file: "kadra.html" },
    { template: "./src/kontakt.ejs", file: "kontakt.html" },
    { template: "./src/onas.ejs", file: "onas.html" },
    { template: "./src/product.ejs", file: "product.html" },
    { template: "./src/products.ejs", file: "products.html" },
    { template: "./src/szkolenia.ejs", file: "szkolenia.html" },

];


const htmlPlugins = () => {
  return templateFileMapper.map(entry => {
    return new HtmlWebpackPlugin({
      template: entry.template,
      filename: entry.file,
    });
  })
};

                    
module.exports = {
    mode: 'development',

    entry: {
        app: "./src/app.js"
    },
    
    devServer: {
        contentBase: './dist',
        hot: true
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "js/[name].bundle.js",
        publicPath: ''
    },

    module: {
    	rules: [
    	    loaders.css,
    		loaders.scss,
            loaders.fonts,
            loaders.images,
            loaders.js,
            loaders.ejs,
            //loaders.jquery
		]
    },

    plugins: htmlPlugins().concat([
        new ProgressBarPlugin(),
        
        plugins.MiniCssExtractPlugin,        
        plugins.css,
        plugins.jQuery,
        plugins.js,
        plugins.HotModuleReplacementPlugin
    ]),
	
    optimization: {
        namedModules: true, // NamedModulesPlugin()
        /*
splitChunks: { // CommonsChunkPlugin()
            name: 'commons',
            minChunks: 2
        },
        noEmitOnErrors: true, // NoEmitOnErrorsPlugin
        concatenateModules: true //ModuleConcatenationPlugin
*/
    }
};



