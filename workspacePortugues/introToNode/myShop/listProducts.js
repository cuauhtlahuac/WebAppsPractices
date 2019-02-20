var fake = require("faker");

var product = fake.commerce.productName();
var price = fake.commerce.price();


function lista(number) {
    for (var i = 0; i < number ; i++){
 console.log(fake.commerce.productName() + " = " + fake.commerce.price());
}};

lista(10);