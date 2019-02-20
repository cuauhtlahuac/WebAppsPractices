var express    = require("express"),
    app        = express(),
    bodyparser = require("body-parser"),
    mongoose   = require("mongoose");

//APP CONFIG
mongoose.connect("mongodb://localhost/restful_blog_app", { useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended: true}));

//MONGOOSE MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});
var Blog= mongoose.model("Blog", blogSchema);

//RESTFUL ROUTES

app.get("/", function(req, res) {
   res.redirect("/blogs"); 
});


//INDEX ROUTE
app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log("ERRO!!!");
        } else { 
            res.render("index", {blogs:blogs});
        }
    });
});

//NEW ROUTE

app.get("/blogs/new", function(req, res) {
   res.render("new"); 
});

//CREATE ROUTE

app.post("/blogs", function (req, res){
   Blog.create (req.body.blog, function(err,newBlog){
       if(err) {
           res.render("new");
       } else {
           res.redirect("/blogs");
       }
   });
});

//SHOW ROUTE

app.get("/blogs/:id", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        } else {
            res.render("show", {blog: foundBlog});
        }
    });
});

// EDIT ROUTE
app.get("/blogs/:id/edit", function(req, res){
    res.render("edit");
})


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVIDOR INICIADO");
});