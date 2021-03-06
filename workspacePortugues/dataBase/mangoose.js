var mangoose = require("mangoose"); //mangoose é um "framework" para facilitar o uso do banco de dados mongodb usando comandos tipo javascript
mangoose.connect("mongodb://localhost/cat_app"); //este comando acessa o banco de dados, neste caso cat_app. caso não exista ele cria um automaticamente

var catSchema = new mangoose.Schema({ //com isto definimos um Schema, que o planejamento do que vai ter dentro do banco de dados
    name: String,
    age: Number,
    temperament: String
});

var Cat = mangoose.model("Cat", catSchema);   // aqui associamos nosso Schema criado a um modelo. É dentro do modelo que podemos adicionar, alterar, visualizar e remover os dados.
//observe que a variavel do model esta em uppercase. isto é de proposito. todas as variaveis que sao associadas a model tem que começar com maiusculo


//adicionando um novo "cat" para a database

// var newCat = new Cat({                //associamos um novo gato a uma variavel
//     name: "mrs. Norris",
//     age: 7,
//     temperament: "evil"
// });

// newCat.save(function(err,cat){                 // salvamos este gato criado na database (este não é o modelo mais pratico de adicionar na base de dados)
//     if(err){
//         console.log("something went wrong")
//     } else {
//         console.log("Cat saved to the database")
//     }
// });

Cat.create({        //este comando funciona praticamente da mesma forma que o outro, só que bem mais simples
    name: "Snow White",
    age: 15,
    temperament: "bland"
},  function(err, cat){
    if(err){
        console.log(err);
    } else {
        console.log(cat + "Has been Added to DB")
    }
});

//retrieve all cats from DB and console.log each one

Cat.find({}, function(err, cats) {   //caso não preenchamos os {} de find, ele vai buscar todos os dados. Para buscar algo especifico, é apenas pre-encher.
     if(err){
         console.log("OH NO, ERROR");
         console.log(err);
     } else {
         console.log("ALL THE CATS....");
         console.log(cats);
     }
});





