const webpack = require('webpack'); //引入webpack
const config = require('./webpack.common.config');  //引入webpack common 配置
config.devServer = {
        hot: true,
        publicPath: '/dist/' //资源打包的公共路径
}  //配置devServer 服务 公共路径 publicPath ,启用热
//启用热更新
config.plugins.push(new webpack.HotModuleReplacementPlugin());
module.exports = config;  //将配置导出