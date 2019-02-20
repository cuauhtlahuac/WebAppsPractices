var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose");
    
mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

var campgoundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgoundSchema);

// Campground.create(
//     {
//         name:"Salmon Creek", 
//         image:"https://farm1.staticflickr.com/68/180073544_af9816aeff.jpg",
//         description:"Esta area é cheia de salmão. Cuidado com os ursos!"
//     }, function(err, campground){
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("Newly Created Campground:");
//             console.log(campground);
//         }
//     });

app.get("/", function(req,res){
    res.render("landing");
});

//INDEX ROUTE - SHOW ALL CAMPGROUNDS
app.get("/campgrounds", function(req, res){
    Campground.find({}, function(err, campgrounds){
        if (err){
            console.log(err);
        } else {
            res.render("index", {campgrounds:campgrounds}); //nesta segunda versão, campgrounds esta associado ao campgrounds da função, que puxa do banco de dados.       
        }
    });
    
});

//CREATE ROUTE - ADD NEW CAMPGROUNDS TO DB
app.post("/campgrounds", function(req, res) {  //post route tem que ficar com o mesmo destino que o get route (convencionalmente)
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc};
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect("/campgrounds");
        }
    });
});

//NEW ROUTE - SHOW FORM TO CREATE NEW CAMPGROUNDS
app.get("/campgrounds/new", function(req, res) {
   res.render("new.ejs"); 
});

//SHOW ROUTE - SHOWS MORE INFO ABOUT ONE CAMPGROUND
app.get("/campgrounds/:id", function(req, res) { //VAI MOSTRAR O CAMPGROUND COM O ID SOLICITADO E CARREGAR O TEMPLATE DAQUELE CAMPGROUND
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            res.render("show", {campground: foundCampground});
        }
    });
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log(" The yelpCamp server has started!");
});
