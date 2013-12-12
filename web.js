

var express = require('express')
	, app = express();
	
var fs=require('fs');
app.use(express.logger());
var htmlfile ="index.html";


app.get('/', function(request, response) {
  var html = fs.readFileSync(htmlfile).toString();
  response.send(html);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
