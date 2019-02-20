var express = require("express");
var app = express();
var request = require("request");

app.get("/results", function(req, res){
    request("http://www.omdbapi.com/?t=california&plot=full", function(error, response, body){
        if (!error && response.statusCode == 200){
            res.send(body);
        } else {
            console.log("Falha na pagina");
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Aplicativo de filmes iniciado!");
});