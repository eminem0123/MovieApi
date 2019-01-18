var request = require("request");
//var http =  require("http");
var express = require("express");
var app = express();	
/*var bodyParser = require("body-parser");
app.use(bodyParser.JSON());
app.use(bodyParser.urlenconded({extended:true}));
*/
var port = 300;


app.get("/",function(req,res){
	var search = req.query.search;
request('http://www.omdbapi.com/?s='+search+'&apikey=c5f2267a', function (error, response, body) {
  var data = JSON.parse(body);
  if(!data.Search){
    res.redirect("/");
  } else {
  res.render("result.ejs",{data:data});
	}
});
})

 app.listen(port);
 console.log("Server run on "+port);