import * as webpack from "webpack";
import * as HtmlWebPackPlugin from "html-webpack-plugin";
import * as dotenv from 'dotenv'


const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html"
});

const env = dotenv.config().parsed;
const envKeys = Object.keys(env).reduce((prev : any, next : string) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

console.log(envKeys)

const envPlugin = new webpack.DefinePlugin(envKeys)



const config: webpack.Configuration = {
  mode: "development",
  entry: "./src/index.tsx",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
    ]
  },
  plugins: [htmlPlugin, envPlugin]
};

export default config;