// General libs
var path = require('path')

// Express
var express = require('express')
var app = express()

// Webpack
var config = require('../webpack.config.js')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var compiler = webpack(config)

var port = process.env.PORT || 3000

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: '/'}))
app.use(webpackHotMiddleware(compiler))

app.use(express.static('./dist'))

app.use('/', function(req, res, next){
	res.sendFile(path.resolve('client/index.html'))
})

app.listen(port, function(err) {
	if(err) throw err
	console.log('Express is listening on', port)
})