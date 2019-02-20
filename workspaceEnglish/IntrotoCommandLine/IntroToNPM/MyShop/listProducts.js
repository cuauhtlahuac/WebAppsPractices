var faker = require("faker");




for(var i = 0 ; i < 9; i++){
console.log(faker.commerce.productName() + " " + "-" + " " + faker.finance.amount());
}

