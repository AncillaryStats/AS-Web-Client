var express = require('express');
var app = express()
var PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/api/*', function(req, res) {
  console.log(req.originalUrl);
  res.redirect(302, 'http://www.ancillaryapi.com' + req.originalUrl)
})

app.listen(PORT, function() {
  console.log('Listening on port', PORT)
});