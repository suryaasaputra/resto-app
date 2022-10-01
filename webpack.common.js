/* eslint-disable max-len */
/* eslint-disable new-cap */
const path = require('path');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [require('autoprefixer')],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'file-loader',
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 70000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new WebpackPwaManifest({
      filename: 'webappmanifest.json',
      publicPath: '/',
      name: 'Resto-App',
      short_name: 'Resto.',
      display: 'standalone',
      description: 'Restaurant recommendation across Indonesia',
      background_color: '#f9f9f9',
      theme_color: '#557571',
      crossorigin: 'anonymous',
      icons: [
        {
          src: path.resolve('src/public/icons/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
        },
        {
          src: path.resolve('src/public/icons/maskable-icon.png'),
          size: '1024x1024',
          purpose: 'maskable',
        },
      ],
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
      favicon: './src/public/images/favicon.ico',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public'),
          to: path.resolve(__dirname, 'dist'),
          globOptions: {
            ignore: ['**/icons/**'],
          },
        },
      ],
    }),

    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /\.(jpe?g|png)/,
        },
      ],
      overrideExtension: true,
    }),

    // new BundleAnalyzerPlugin(),

    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './sw.bundle.js',
    }),
  ],
};
