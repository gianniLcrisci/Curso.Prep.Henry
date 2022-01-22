// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "hola";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 15;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  return str;
}
devolverString()

function suma(x, y) {
  var sumar = x + y;
  return sumar;
}
suma(4, 5)


function resta(x, y) {
  var restar = x - y;
  return restar;
}
resta(33, 20)


function multiplica(x, y) {
 var multiplicar = x * y;
 return multiplicar;
}
multiplica(4 , 3)
12


function divide(x, y) {
  var dividir = 15 / 3;
  return dividir;
}
divide()
5




function sonIguales(x, y) {
  if (x === y) {
  return true;
} else {
  return false;
}
}
sonIguales(4, 4)
true



function tienenMismaLongitud(str1, str2) {
if ( str1.length === str2.length) {
    return true; 
  } else {
    return false;
  }
}

function menosQueNoventa(num) {
  return num< 90;
}
menosQueNoventa(85)
true



function mayorQueCincuenta(num) {
   return num >50;
}
mayorQueCincuenta(55)
true



function obtenerResto(x, y) {
return x % y;
}
obtenerResto(12, 4)
0



function esPar(num) {
 if (num % 2 === 0) {
    return true; 
  }
    else {
      return false;
    }
  }
esPar(2)
true



function esImpar(num) {
  
  if (num % 2 === 1) {
    return true;
  } else {
    return false;
  } 
}
esImpar(3)
true



function elevarAlCuadrado(num) {

return Math.pow(4, 2);
}
 elevarAlCuadrado(4, 2)
 16



function elevarAlCubo(num) {

  return Math.pow( 3, 3);
}
elevarAlCubo( 3, 3)
27


function elevar(num, exponent) {

  return Math.pow( 5, 5);
}
elevar(5, 5)
3125



function redondearNumero(num) {

  return Math.round (8.4);
}
redondearNumero (8.4)
8


function redondearHaciaArriba(num) {

  return Math.ceil( 6.2);
}
redondearHaciaArriba( 6.2)
7


function numeroRandom() {

  return Math.random( 1)
}
numeroRandom ( 1)
0.4808



function esPositivo(numero) {
  if (numero === 0) {
    return false;
  }
  else if( numero > 0) {
    return "es positivo";
  }
  else {
    return "es negativo";
  }
}
  esPositivo(22)
  'es positivo'


function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:

}

function combinarNombres(nombre, apellido) {

  var combineta = 'Gianni' + ' ' + 'Crisci';
  return combineta;
}
combinarNombres()
'Gianni Crisci'

 

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  
}

function obtenerAreaRectangulo(alto, ancho) {

  return 15 * 10;

}
obtenerAreaRectangulo ()
150


function retornarPerimetro(lado){
  
  return 12 * 4;
}
retornarPerimetro()
48


function areaDelTriangulo(base, altura){

return (15 * 12) /2;
}
areaDelTriangulo ()
90


function deEuroAdolar(euro){
  return 1 * 1.2;
}
deEuroAdolar(2)
2.4


function esVocal(letra){
  if (letra.length >1) {
    return "Dato incorrecto";
  }
  if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    return "es vocal";
  }
  {
    return "dato incorrecto";
}
  }
  esVocal (A)
  "es vocal"




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
