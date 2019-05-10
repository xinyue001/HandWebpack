var path = require('path'); //内置模块

// {
//     test：/\.(jpg|   png | gif  | jpeg    )/，
//    loader：‘url-loader’，
//   options：{
//   limit  ：4000        //当前图片的限制，设置当前loader的配:制66项
//     }

module.exports = {
    mode: "development",
    entry: path.join(__dirname, './src/index.js'), //入口
    output: {
        path: path.join(__dirname, 'build'), //出口
        filename: "[hash]-[name].js"
    },
    module: {
        rules: [{
                test: /\.(js|js)$/,
                loader: 'babel-loader',
                options: {
                    "presets": ["@babel/preset-env"]
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.(jpg|png|gif|jpeg)$/,
                loader: 'url-loader',
                options: {
                    limit: 4000
                }
            }, {
                test: /\.(eot|svga|ttf|woff)$/,
                loader: 'file-loader', //小文件用file-loader
                options: {
                    name: './font[name].[ext]' //build 下文件夹的font
                }
            }
        ]
    }






}