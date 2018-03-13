const request = require("request");

const url = "https://api.gdax.com/products/BTC-USD/ticker";

request({url: 'https://api.gdax.com/products/BTC-USD/ticker', headers:{'user-agent':'eatme'}}, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
   console.log('body:', body); // Print the HTML for the Google homepage.
});
