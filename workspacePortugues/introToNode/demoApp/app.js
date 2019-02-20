console.log("THIS IS YOUR NEW CAT");

var cat = require("cat-me");

console.log(cat());

var joke = require("knock-knock-jokes");

function piada(x){
    for(var i= 0; i <= x; i++)
    console.log(joke() + "****************");
}

piada(3);