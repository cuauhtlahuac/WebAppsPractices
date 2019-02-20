var mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/cat_app");   //access MongoDB via this javascript or any other ejs file



var catSchema = new mongoose.Schema({   //first create a schema
    
    name: String,
    age: Number,
    temperament: String
    
});




var Cat = mongoose.model("Cat",catSchema);   //model name is "Cat" stored in its namesake variable, common convention capitalized automatically by mongoose

// add new cat to db

/*var george = new Cat({   //save Cat to a new variable
    
    name: "Mrs. Norris",
    age: 7,
    temperament: "Evil"
    
});          // george is just a javascript variable

george.save(function(err, cat){          //callback function passed as an argument, called after the save operation is completed
                                    // cat argument refers to what came back from the database
    if(err){
        console.log("Something went wrong");
    }
    else{        
        console.log("We just saved a cat to the DB:");
        console.log(cat);
    }
    });
*/


Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, function(err,cat){
    if(err){
        console.log(err);
    }
    
    else{
        console.log("ALL the cats");
        console.log(cat);
        
    }
})


//retrieve all cats from db and console.log each one

Cat.find({},function(err,cats){   //the second argument can be anything
//the variable Cat which is a model, passing in an empty object->just a mongodb syntax, means return all docs from database,can
                                                 // be omitted as well
    
if(err){
    console.log("Oh no! It's an error");
    console.log(err);
}

else{
    
    console.log("ALL THE CATS..");
    console.log(cats);
    
}
    
})  ;          