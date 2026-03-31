const express = require("express");
const app = express();
app.use(express.json());

let personagens = [
    {
        id: 1,
        nome: "Goku",
        anime: "Dragon Ball",
        forca: 900,
        poder: 1000,
        velocidade: 800
    },
    {
        id: 2,
        nome: "Naruto",
        anime: "Naruto",
        forca: 500,
        poder: 700,
        velocidade: 600
    },
    {
        id: 3,
        nome: "Luffy",
        anime: "One Piece",
        forca: 400,
        poder: 600,
        velocidade: 400
    },
    {
        id: 4,
        nome: "Saitama",
        anime: "One Punch Man",
        forca: 1000,
        poder: 1000,
        velocidade: 1000
    },
    {
        id: 5,
        nome: "Ichigo",
        anime: "Bleach",
        forca: 600,
        poder: 800,
        velocidade: 500
    },
    {
        id: 6,
        nome: "Edward Elric",
        anime: "Fullmetal Alchemist",
        forca: 300,
        poder: 500,
        velocidade: 300
    },
    {
        id: 7,
        nome: "Gon Freecss",
        anime: "Hunter x Hunter",
        forca: 400,
        poder: 600,
        velocidade: 400
    },
    {
        id: 8,
        nome: "Killua Zoldyck",
        anime: "Hunter x Hunter",
        forca: 300,
        poder: 500,
        velocidade: 700
    },
    {
        id: 9,
        nome: "Sasuke Uchiha",
        anime: "Naruto",
        forca: 500,
        poder: 700,
        velocidade: 600
    },
    {
        id: 10,
        nome: "Vegeta",
        anime: "Dragon Ball",
        forca: 800,
        poder: 900,
        velocidade: 700
    },
    {
        id: 11,
        nome: "Broly",
        anime: "Dragon Ball",
        forca: 950,
        poder: 1000,
        velocidade: 800
    },
    {
        id: 12,
        nome: "Trunks",
        anime: "Dragon Ball",
        forca: 600,
        poder: 700,
        velocidade: 600
    }
]


app.get("/personagens", (req, res)=>{
    const nome = req.query.nome;

    if(nome){
        const resultado = personagens.filter(p => p.nome && p.nome.toLowerCase().includes(nome.toLowerCase()))
        return res.json(resultado);
    }
    res.json(personagens);

})


app.post("/personagens", (req, res)=>{
    const {nome,anime, forca, poder, velocidade} = req.body; 

    const novo = {
        id: personagens.length + 1,
        nome,
        anime,
        forca,
        poder,
        velocidade,
    }

    personagens.push(novo)
    res.status(201).json(novo);
})


app.listen(3000, ()=>{
    console.log("Servidor rodando na porta 3000");
    
})