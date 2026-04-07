const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

let personagens = [
    {
        id: 1,
        nome: "Goku",
        anime: "Dragon Ball",
        forca: 90,
        poder: 100,
        velocidade: 80,
        img: "https://i.pinimg.com/736x/c6/25/f6/c625f6315130d8329a95ae27d8e95564.jpg",
        descricao: "Goku é o protagonista da série Dragon Ball. Ele é um Saiyajin que foi enviado para a Terra quando era bebê. Goku é conhecido por sua força incrível, habilidades de luta e determinação inabalável. Ele é um herói que sempre luta para proteger seus amigos e a Terra de ameaças poderosas."
    },
    {
        id: 2,
        nome: "Naruto",
        anime: "Naruto",
        forca: 50,
        poder: 70,
        velocidade: 60,
        img: "https://i.pinimg.com/736x/5e/d4/72/5ed472d795697c794f5694d8fd351adf.jpg",
        descricao: "Naruto Uzumaki é o protagonista da série Naruto. Ele é um jovem ninja que sonha em se tornar o Hokage, o líder de sua vila. Naruto é conhecido por sua determinação, coragem e habilidades de luta. Ele tem uma personalidade alegre e é muito leal aos seus amigos."
    },
    {
        id: 3,
        nome: "Luffy",
        anime: "One Piece",
        forca: 40,
        poder: 60,
        velocidade: 40,
        img:"https://i.pinimg.com/736x/74/2f/d5/742fd5a3639902802e8535953fd2c920.jpg",
        descricao: "Monkey D. Luffy é o protagonista da série One Piece. Ele é um jovem pirata que tem o sonho de encontrar o tesouro lendário conhecido como One Piece e se tornar o Rei dos Piratas. Luffy é conhecido por sua personalidade alegre, determinação e habilidades de luta. Ele tem a capacidade de esticar seu corpo como borracha, graças ao poder da fruta do diabo que ele comeu."
    },
    {
        id: 4,
        nome: "Saitama",
        anime: "One Punch Man",
        forca: 100,
        poder: 100,
        velocidade: 100,
        img: "https://cdn.rafled.com/anime-icons/images/ad9f41448d867e4a9f084f52b4906b459c85387bae60c8e8ae9b76537f38b469.jpg",
        descricao: "Saitama é o protagonista da série One Punch Man. Ele é um herói que se tornou tão poderoso que pode derrotar qualquer inimigo com um único soco. Saitama é conhecido por sua aparência simples, personalidade descontraída e habilidades de luta incríveis. Ele luta para encontrar um desafio digno de sua força e muitas vezes se sente entediado com a falta de adversários à altura."
    },
    {
        id: 5,
        nome: "Ichigo",
        anime: "Bleach",
        forca: 60,
        poder: 80,
        velocidade: 50,
        img: "https://pbs.twimg.com/media/GJY0UPRW8AASIma.jpg",
        descricao: "Ichigo Kurosaki é o protagonista da série Bleach. Ele é um adolescente que tem a capacidade de ver fantasmas e se torna um Shinigami (Deus da Morte) para proteger os vivos e os mortos. Ichigo é conhecido por sua determinação, coragem e habilidades de luta. Ele luta para proteger seus amigos e a cidade de ameaças sobrenaturais."
    },
    {
        id: 6,
        nome: "Edward Elric",
        anime: "Fullmetal Alchemist",
        forca: 30,
        poder: 50,
        velocidade: 30,
        img: "https://i.pinimg.com/474x/6c/60/70/6c6070b90c0e63774c7b96b435e21253.jpg",
        descricao: "Edward Elric é o protagonista da série Fullmetal Alchemist. Ele é um jovem alquimista que, junto com seu irmão Alphonse, tenta recuperar seus corpos após um experimento de alquimia que deu errado. Edward é conhecido por sua inteligência, habilidades de alquimia e determinação. Ele luta para proteger seus amigos e encontrar uma maneira de restaurar seus corpos."
    },
    {
        id: 7,
        nome: "Gon Freecss",
        anime: "Hunter x Hunter",
        forca: 40,
        poder: 60,
        velocidade: 40,
        img: "https://static.wikia.nocookie.net/hunterxhunter/images/3/3e/HxH2011_EP147_Gon_Portrait.png/revision/latest?cb=20230904181801",
        descricao: "Gon Freecss é o protagonista da série Hunter x Hunter. Ele é um jovem garoto que se torna um caçador para encontrar seu pai, que também é um caçador. Gon é conhecido por sua determinação, coragem e habilidades de luta. Ele tem uma personalidade alegre e é muito leal aos seus amigos."
    },
    {
        id: 8,
        nome: "Killua Zoldyck",
        anime: "Hunter x Hunter",
        forca: 30,
        poder: 50,
        velocidade: 70,
        img: "https://i.pinimg.com/1200x/34/31/c5/3431c5e19a2a91578064208f9d611486.jpg",
        descricao: "Killua Zoldyck é um dos personagens principais da série Hunter x Hunter. Ele é um jovem assassino que vem de uma família de assassinos profissionais. Killua é conhecido por sua habilidade em combate, velocidade incrível e inteligência. Ele tem uma personalidade complexa, mas é leal aos seus amigos e luta para proteger aqueles que ama."
    },
    {
        id: 9,
        nome: "Sasuke Uchiha",
        anime: "Naruto",
        forca: 50,
        poder: 70,
        velocidade: 60,
        img: "https://i.pinimg.com/736x/63/79/51/6379514ac4627bfcd1aa705a3ed29479.jpg",
        descricao: "Sasuke Uchiha é um dos personagens principais da série Naruto. Ele é um jovem ninja que tem uma história trágica e busca vingança contra seu irmão mais velho, Itachi Uchiha. Sasuke é conhecido por sua habilidade em combate, inteligência e determinação. Ele tem uma personalidade complexa e muitas vezes luta com seus próprios demônios internos enquanto busca seu objetivo."
    },
    {
        id: 10,
        nome: "Vegeta",
        anime: "Dragon Ball",
        forca: 80,
        poder: 90,
        velocidade: 70,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr4RJ8AyK3ckF8Lr734fKKWMCOXwqmJ74w_Q&s",
        descricao: "Vegeta é um dos personagens principais da série Dragon Ball. Ele é um príncipe Saiyajin que inicialmente é um antagonista, mas depois se torna um aliado de Goku e seus amigos. Vegeta é conhecido por sua força incrível, habilidades de luta e personalidade orgulhosa. Ele tem uma rivalidade constante com Goku, mas também é leal aos seus amigos e luta para proteger a Terra de ameaças poderosas."
    },
    {
        id: 11,
        nome: "Broly",
        anime: "Dragon Ball",
        forca: 95,
        poder: 100,
        velocidade: 80,
        img: "https://i.pinimg.com/736x/35/03/37/35033745af546b3b401d7d3c4f1f08e4.jpg",
        descricao: "Broly é um personagem da série Dragon Ball. Ele é um Saiyajin lendário conhecido por sua força incrível e poder destrutivo. Broly tem uma história trágica e é frequentemente retratado como um antagonista, mas também tem momentos de redenção. Ele é conhecido por sua aparência imponente, habilidades de luta e personalidade intensa."
    },
    {
        id: 12,
        nome: "Trunks",
        anime: "Dragon Ball",
        forca: 60,
        poder: 70,
        velocidade: 60,
        img: "https://i.pinimg.com/736x/ea/8b/55/ea8b55c5dde297cf3d4f6e5febe942c3.jpg",
        descricao: "Trunks é um personagem da série Dragon Ball. Ele é o filho de Vegeta e Bulma, e é conhecido por sua habilidade em combate, inteligência e determinação. Trunks tem uma história complexa, incluindo viagens no tempo e lutas contra ameaças poderosas. Ele é um personagem popular entre os fãs de Dragon Ball devido à sua personalidade única e habilidades impressionantes."
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





app.get("/personagens/:id", (req, res) => {

    const idUrl = req.params.id;


    const personagem = personagens.find(p => p.id == idUrl);

    if (personagem) {
        res.json(personagem);
    } else {

        res.status(404).json({ erro: "Personagem não encontrado" });
    }
});


