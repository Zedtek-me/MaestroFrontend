const path = require("path")


module.exports = {
    entry: path.resolve(__dirname, "src/index.js"),
    otuput: {
        filename: "bundle.js",
        path: path.join(__dirname, "bundle.js")
    },
    module:{
        rules:[
            {
                test:/\.(js || jsx || ts)$/,
                use:{
                    loader: "babel-loader",
                    options:["@babel/preset-env", "@babel/preset-react"]
                }
            },
            {
                test:/\.(css || scss)$/,
                use:{
                    loader: ["style-loader", "css-loader"]
                }
            }
        ]
    },
    devServer:{
        
    }
}