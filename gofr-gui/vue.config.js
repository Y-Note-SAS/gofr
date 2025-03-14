const path = require("path");
module.exports = {
  outputDir: path.resolve(__dirname, "../gofr-backend/lib/gofr-backend-site/gui"),
  publicPath: './',
  runtimeCompiler: true,
  transpileDependencies: ['vuetify'],
  devServer: {
    proxy: {
      '^/gofrapp': {
        target: 'http://localhost:5001/',
        logLevel: 'debug'
      },
      '^/translator': {
        target: 'http://localhost:5001/',
        logLevel: 'debug'
      },
      '^/auth': {
        target: 'http://localhost:5001/',
        logLevel: 'debug'
      },
      '^/users': {
        target: 'http://localhost:5001/',
        logLevel: 'debug'
      },
      '^/config': {
        target: 'http://localhost:5001/',
        logLevel: 'debug'
      }
    }
  }
}
