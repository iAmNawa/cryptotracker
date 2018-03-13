var port = 6879;
var app = require('express')();

const request = require("request");

const url = "https://api.gdax.com/products/BTC-USD/ticker";

const btcusd = {};

setInterval(function() {
  request({url: 'https://api.gdax.com/products/BTC-USD/ticker', headers:{'user-agent':'eatme'}}, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
     console.log('body:', body); // Print the HTML for the Google homepage.
     btcusd.body = JSON.parse(body)
  });
}, 10000)

request({url: 'https://api.gdax.com/products/BTC-USD/ticker', headers:{'user-agent':'eatme'}}, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
   console.log('body:', body); // Print the HTML for the Google homepage.
   btcusd.body = JSON.parse(body)
});

app.use(require('compression')());
app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({ extended:true }));
/*app.use(require('stylus').middleware(require('path').join(__dirname, 'public')));*/
app.use(require('express').static('public'));

app.get('/pukeboy', function (req, res) {
  res.send(btcusd.body.price);
});

require('http').createServer(app).listen(port,function(){
  console.log('server is running you beeezy, on port', port)
});
