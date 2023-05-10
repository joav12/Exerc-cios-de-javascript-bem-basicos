const array = ['elemento1', 'elemento2', 'elemento3'];
const objeto = { propriedade1: 'valor1', propriedade2: 'valor2' };
const elemento = array[1];
const valor = objeto.propriedade2;
const objetoVazio = {};
objetoVazio.chave1 = 'valor1';
objetoVazio['chave2'] = 'valor2';
const valor1 = objetoVazio.chave1;
const valor2 = objetoVazio['chave2'];

array.push('novoElemento');

objeto.metodo = function () {
  // Instrução
};

objeto.metodo();

const variavel = function () {
  // Instrução
};

variavel();

array.forEach(function (elemento) {
  // Instrução
});

const novoArray = array.filter(function (elemento) {
  // Retorne verdadeiro se elemento deve ser incluído no novo Array
});

const novoArrayTransformado = array.map(function (elemento) {
  // Retorne o elemento transformado
});
