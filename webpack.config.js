const path = require("path")
const { plugin } = require("postcss")


module.exports = {
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "bundle.js")
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx|ts)$/,
                exclude:/node_modules/,
                use:{
                    loader: "babel-loader",
                    options: {
                        presets:["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader", "postcss-loader"]
            },
            {
                test: /\.(jpg|png|ico)$/,
                type: "asset/resource"
            }
        ],
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'static'),
        },
        compress: true,
        historyApiFallback:true,
        hot:true,
        port: 8015,
      },
    resolve: {
        extensions: ['.js', '.jsx'],
      },
}