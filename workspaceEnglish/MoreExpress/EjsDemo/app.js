var express = require("express");

var app = express();


app.use(express.static("public"));       //serves public directory for app.css

app.set("view engine", "ejs");

app.get("/", function(req, res){
    
    res.render("home");  //so that we don't have to write ejs after each template name 
    
});


app.get("/youfellinlovewith/:thing", function(req, res){
    
    
    var thing = req.params.thing;
    
    res.render("love" , {
        thingVar : thing
    });
    
    
});


app.get("/posts", function(req, res){
    
    var posts = [{title: "Post 1", author: "Suzy"},
    
    {title: "Post 2", author: "Charlie"},
    
    {title: "Post 3", author: "Colt"}
        
        
        ];
        
        res.render("posts",{posts:posts});
    
});

















app.listen(process.env.PORT, process.env.IP, function(){
    
    console.log("Server is running");
})