
var request = require("request"); //request é um NPM que facilita e muito a utilização de APIs
request("https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", function(error, response, body) {  // Requisitamos um site (neste caso o link de uma API), e devemos atribuir a função error(se tem erro ou não), response (se o site responde ou não), body(o conteudo exibido).
    if(!error && response.statusCode == 200){ //em outras palavras, a pagina só vai rodar se não houver erro (!error) e a resposta do site for 200 (200 significa tudo ok com o site)
        console.log("O horario poente do Hawaii é:");
        var parsedData = JSON.parse(body);  //o body do API esta em string, com o comando JSON.parse podemos transformar o body de string para objetos e selecionar especificamente o que precisamos
        console.log(parsedData["query"]["results"]["channel"]["astronomy"]["sunset"]); //Um exemplo da seleção depois de atribuido uma variavel
    }
})