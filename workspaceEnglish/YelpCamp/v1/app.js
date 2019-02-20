var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');  //

mongoose.connect("mongodb://localhost/yelp_camp");      //connecting mongoose , yelp_camp: name for the db which doesn't exist yet
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


// SCHEMA SETUP

var campgroundSchema = new mongoose.Schema({
    
    name: String,
    image: String,
    description: String
    
});

var Campground = mongoose.model("Campground",campgroundSchema);

/*Campground.create({        //passing in the object we want to create
    
   name: "Granite Hill", 
   image: "https://farm1.staticflickr.com/661/32853307921_c804935e58.jpg",
   description: "This is a beautiful granite hill camp, all amenities there"
},function(err,campground){
   
   if(err){
       
       console.log(err);
   }
   else
   {
       console.log("NEWLY CREATED CAMPGROUND");
       console.log(campground);
   }
   
    
});         

*/


app.get("/",function(req, res){
   
   res.render("landing"); 
    
});

app.get("/campgrounds", function(req, res){
   
   Campground.find({},function(err, allCampgrounds){  //retrieving all campgrounds and showing them all
       
       if(err){
           console.log(err);
       }
       
       else{
           
           res.render("index", {campgrounds:allCampgrounds});
       }
       
   
   });

    
});

app.post("/campgrounds",function(req,res){
   // get data from form and add it to campground
   
   
   var name = req.body.name;
   var image = req.body.image;
   var desc = req.body.description;
   var newCampground = {name : name , image : image , description: desc}; 
   
   // add new campground and save it to db
   
   Campground.create(newCampground,function(err,newlyCreated){
      
      if(err){
          console.log(err);
      } 
       
       else{
           
           res.redirect("/campgrounds");
           
       }
       
   });
                               // redirect back to campgrounds page
   
});

app.get("/campgrounds/new",function(req,res){
   
   res.render("new");
});

//NEW - show form to create new campground
app.get("/campgrounds/new", function(req, res){
   res.render("new.ejs"); 
});

//SHOW - shows more info about a particular campground
app.get("/campgrounds/:id", function(req, res){
    //find the campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground){   //findById used by mongoose , foundCamground with the find by id method
        if(err){
            console.log(err);
        } else {
            //render show template with that campground
            res.render("show", {campground: foundCampground});
        }
    });
})

app.listen(process.env.PORT, process.env.IP, function(){
    
   console.log("YelpCamp server is working");
    
});