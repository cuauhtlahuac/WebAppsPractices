var express = require("express");

var app = express();

// "/" it'll print Hi there!

app.get("/",function(req, res){
   
   res.send("Hi There!");
    
}); 

// /bye route, prints bye

app.get("/bye", function(req,res){
    
   res.send("Goodbye People!");
    
});

// dog route

app.get("/dog", function(req, res){
   
   res.send("WOOF!"); 
    
});

app.get("/r/:subRedditName",function(req,res){
   
   var subreddit = req.params.subRedditName;
   
   res.send("YOU ARE ON THE" + " " + subreddit.toUpperCase() + " " + "PAGE!");
    
});

app.get("/r/:subRedditName/comments/:id/:title/",function(req,res){
   
   res.send("Welcome to comments!");
    
});



// star or * route

app.get("*", function(req,res){
   
   res.send("You are a STAR!");
    
});



//Tell express to listen to requests, use number for port on local PC, process.env.port just used for c9

app.listen(process.env.PORT, process.env.IP, function(){
    
   console.log("Server has started!");
    
});