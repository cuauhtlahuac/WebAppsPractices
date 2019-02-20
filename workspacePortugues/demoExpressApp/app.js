var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.send("Hi there. Welcome to my assignment!!!");
});

app.get("/speak/:animal", function(req,res){
    var bixo = req.params.animal.toLowerCase();
    if (bixo === "cow"){
        res.send("The cow says MUUU!!");
    } else if(bixo === "dog") {
        res.send("The dog says. 'WOOF WOOF!!'");
    }else if(bixo === "pig") {
        res.send("The pig Says OINK!!");
    } else res.send(bixo + " IS NOT A VALID ANIMAL!!");
});

//ANIMAL BEST SOLUTION:
//
//app.get("/speak/:animal", function(req,res){
//  var sounds = {
//  pig: "Oink",
//  dog: "Woof, Woof",
//  cow: "Muuu",
//  cat: "I hate you Human!!",
//  goldfish: "..."
//}
//var animal = req.params.animal; 
//var sound = sounds[animal];
//  res.send("The " + animal + " says " + sound);
//});



app.get("/repeat/:message/:number", function(req,res){
    var times = Number(req.params.number);
    var message = req.params.message;
    var result = "";
    for (var i = 0; i < times; i++){
        result += message + " ";
    }
        res.send(result);
});

app.get("*", function(req,res){
    res.send("PAGE NOT FOUND!! WHAT ARE YOU DOING WITH YOUR LIFE!!");
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Has Started")
});