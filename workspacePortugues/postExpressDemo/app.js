var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
//body-parser é um npm que faz com que o express consiga pegar dados dentro de textboxes, serve para pegar dados digitados pelo cliente e salvar no sistema.(pode ter outras funções que desconheço)

app.set("view engine", "ejs");

var friends = ["Gustavo", "Hugo", "Barto", "Jonny", "Duda"];

app.get("/", function(req,res){
    res.render("home");
});

app.get("/friends", function(req,res){
    res.render("friends", {friends: friends});
});

app.post("/addfriend", function(req,res){
    var newFriend = req.body.newFriend;
    friends.push(newFriend);
    res.redirect("/friends");
    //res.redirect vai automaticamente para a pagina especificada
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVIDOR INICIADO!");
});