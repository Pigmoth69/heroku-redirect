var express = require('express');

var app = express.createServer(express.logger());

app.get('*', function(request, response) {
  response.redirect(process.env.NEW_BASE_URL + request.url)
});

app.post('*', function(request, response) {
  response.redirect(process.env.NEW_BASE_URL + request.url);
  response.send(request.body);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
