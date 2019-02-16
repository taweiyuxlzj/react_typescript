module.exports = {
    entry: "./src/index.tsx", //入口
    output: {
        filename: "bundle.js", //编译输出的js
        path: __dirname + "/dist" //编译输出的目录
    },

    devtool: "source-map",  //一种生成js模式。 目前共有7种。需要详细查看
    mode: "development",
    resolve: {
        //对应查找的扩展名
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    //loader  正则表达式用于处理特定类型的模块，通过loader 进行打包生成 
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            // { test: /\.js$/, enforce: "pre", loader: "source-map-loader" },
            { test: /\.js$/, exclude: /node_modules/, loader: "react-hot-loader!babel-loader" },
            { test: /\.css$/, exclude: /node_modules/, loader: "style-loader!css-loader" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },  //添加
            { test: /\.(woff|woff2)$/, loader:"url-loader?prefix=font/&limit=5000" }, //添加
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" }, //添加
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" } //添加
        ]
    },

    plugins: [],
};