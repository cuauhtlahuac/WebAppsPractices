var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);



//novo gato database

// var Margaret = new Cat({
//     name:"Mr.Norris",
//     age: 7,
//     temperament: "Mal"
// });

// Margaret.save(function(err, cat){
//     if(err){
//         console.log("algo deu errado ao salvar o Gato");
        
//     } else {
//         console.log("Gato salvo na base de dados");
//         console.log(cat);
//     }
// });

Cat.create({
    name:"branca de neve",
    age: 2,
    temperament: "calmo"
}, function(err, cat){
    if(err){
        console.log("Falha ao salvar gato");
        console.log(cat);
    } else {
        console.log("Gato salvo com sucesso!");
        console.log(cat);
    }
});

//buscar todos gatos database

Cat.find({}, function(err, cats){
    if(err){
        console.log("Busca invalida");
        console.log(err);
    } else {
        console.log("Todos os gatos cadastrados são:")
        console.log(cats);
    }
});
