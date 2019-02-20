var express = require("express");
var app = express();

app.use(express.static("public"));
//com este codigo, o sistema vai passar a procurar arquivos tambem na pasta public que foi criada

app.set("view engine", "ejs");
//com este codigo o sistema vai saber que todos os arquivos da pasta view são .ejs, portanto não precisamos ficar nos repetindo nos outros arquivos que precisarem de .ejs
//por exemplo, nos app.get no res.render, sempre colocavamos o arquivo.ejs... com este codigo nao precisamos mais colocar .ejs

app.get("/", function(req,res){
    res.render("home");
    //os arquivos .ejs devem ficar no diretório views... desta forma o express os encontra mais rapidamente.
});
app.get("/fallinlovewith/:thing", function(req,res){
    var thing = req.params.thing;
    //res.render é o comando para renderizar outros arquivos no route... neste caso ele esta pegando um arquivo .ejs
    res.render("love", {
        //os arquivos .ejs nao tem como enchergar variaveis direto do rout... aqui estamos associando o variavel thing(variavel que vai aparecer no ejs): thing(variavel existente no codigo)
        thing: thing
    });
});

app.get("/posts", function(req,res){
    var posts = [
            { title: "post 1", author: "Suzy" },
            { title: "My adorable pet bunny", author: "Guto" },
            { title: "Can you believe this Pomsky", author: "Colt" },
        ];
        res.render("posts", {posts:posts});
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Has Started")
});