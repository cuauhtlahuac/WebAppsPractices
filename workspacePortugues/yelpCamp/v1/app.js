var express = require("express");
var app = express();
var bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

var campgrounds = [
        {name:"Salmon Creek", image:"https://farm1.staticflickr.com/68/180073544_af9816aeff.jpg"},
        {name:"Granite Hill", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPDDW2bEyYSx4n3najwh5ZZ9Wog6SBEz2Adeo8plVd46bdCT9kJQ"},
        {name:"Granite Hill", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPDDW2bEyYSx4n3najwh5ZZ9Wog6SBEz2Adeo8plVd46bdCT9kJQ"},
        {name:"Granite Hill", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPDDW2bEyYSx4n3najwh5ZZ9Wog6SBEz2Adeo8plVd46bdCT9kJQ"},
        {name:"Granite Hill", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPDDW2bEyYSx4n3najwh5ZZ9Wog6SBEz2Adeo8plVd46bdCT9kJQ"},
        {name:"Granite Hill", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPDDW2bEyYSx4n3najwh5ZZ9Wog6SBEz2Adeo8plVd46bdCT9kJQ"},
        {name:"Granite Hill", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPDDW2bEyYSx4n3najwh5ZZ9Wog6SBEz2Adeo8plVd46bdCT9kJQ"},
        {name:"Granite Hill", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPDDW2bEyYSx4n3najwh5ZZ9Wog6SBEz2Adeo8plVd46bdCT9kJQ"},
        {name:"Montain Goat's Rest", image:"https://farm5.staticflickr.com/4100/4798314980_bc31231984.jpg"}
        ];

app.get("/", function(req,res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    
    res.render("campgrounds", {campgrounds:campgrounds}); //o primeiro campgrounds pode ser qualquer nome, o segundo é referente a variavel campgrounds
});

app.post("/campgrounds", function(req, res) {  //post route tem que ficar com o mesmo destino que o get route (convencionalmente)
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
   res.render("new.ejs"); 
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log(" The yelpCamp server has started!");
});
