
var express = require("express");

var app = express();


console.log("Bagga baniya")


app.get("/", function(req, res){
   
   res.send("Hi there, Welcome to my assignment!");
    
});


app.get("/speak/:animal", function(req , res){
   
   var animal = req.params.animal;
   
   var sounds = {
       
       pig: "Oink",
       dog: "woof",
       cow: "moo!"
       
       
       
   }
   
   var sound = sounds[animal];
   
   res.send("The"+ " " + animal + " " + "makes sound" + " " + sound);
   
    
});


app.get("/repeat/:greet/:num", function(req, res){     //greeting example: hello
    
    
    var path = req.params.greet;
    
    var number = req.params.num;
    
    var digit  = parseInt(number, 10);     //number cqn be used bitch
    
    var message = "";
    
    
    for(var i = 0 ; i < digit ; i++){
        
        message+= " " + path;
        
    }
     res.send(message);
   
    
    
    
});


app.get("*", function(req, res){
   
   res.send("URL is incorrect!");
    
});




app.listen(process.env.PORT, process.env.IP,function(){
    
    console.log("Server is running");
    
} );