var express = require ("express");
var app = express();

app.get("/", function (req,res){
   res.send("Hi There!");
});

app.get("/bye", function (req,res){
   res.send("Good Bye!!");
});

app.get("/dog", function (req,res){
   res.send("MEOW!!");
});

app.get("/*", function (req,res){
   res.send("404 - THIS PAGE DOESNT EXIST!");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Has Started")
});