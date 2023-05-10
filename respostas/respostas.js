//EX1-1

const seriesFavoritas = ['Breaking Bad', 'Stranger Things','The Witcher'];

//1-2
const jogoFavorito = {
    titulo: 'The Last Of Us',
    ano: 2013
};

//1-3
console.log(`Minha segunda série favorita é ${seriesFavoritas[1]} e o meu jogo favorito é ${jogoFavorito.titulo}`);

//2-1
const jogos = {};

//2-2
jogos.chave1 = 'League of legends', 'Computador';
jogos.chave2 = 'God of War', 'Playstation 2';
jogos.chave3 = 'Genshin impact', 'Mobile';

//3-1
seriesFavoritas.push('Game of Thrones');

//3-2
jogoFavorito.descricao = function(){
    console.log(`Meu jogo favorito é ${jogoFavorito.titulo}`)
};

//3-3
jogoFavorito.descricao();

//4-1
const funcaoAnonima = function(){
    console.log("A função anônima foi executada!");
};

//4-2
funcaoAnonima();

//5-1
seriesFavoritas.forEach(function(titulo){
    console.log(titulo);
});

//5-2
let seriesLongas = seriesFavoritas.filter(titulo => titulo.length == 15);
console.log(seriesLongas);

//5-3
let seriesMaiusculas = seriesFavoritas.map(titulo => titulo.toUpperCase());
console.log(seriesMaiusculas)