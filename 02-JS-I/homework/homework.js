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


function suma(x, y) {
  var sumar = x + y;
  return sumar;
}
suma(4, 5);
9

function resta(x, y) {
  var restar = x - y;
  return restar;
}
resta(33, 20);
13

function multiplica(x, y) {
 var multiplicar = x * y;
 return multiplicar;
}
multiplica(4 , 3);
12

function divide(x, y) {
  var dividir = 15 / 3;
  return dividir;
}
divide(15, 3);
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
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

function menosQueNoventa(num) {
  
  if (num< 90); {
  return true;
} 
else {
return false;
}
}
menosQueNoventa(87)
true

function mayorQueCincuenta(num) {
  
  if (num> 50); {
    return true;
} 
else {
return false;
}
}
mayorQueCincuenta(52)
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

return Math.pow( 4, 2);
}
elevalAlCuadrado( 4, 2)
16

function elevarAlCubo(num) {

  return Math.pow( 3, 3);
}
elevarAlCubo( 3, 3)
27

function elevar(num, exponent) {

  return Math.pow( 12, 5);
}
elevar(12, 5)
248832

function redondearNumero(num) {

  return Math.round (7.4);
}
redondearNumero (7.4)
7

function redondearHaciaArriba(num) {

  return Math.ceil( 6.2);
}
redondearHaciaArriba( 6.2)
7

function numeroRandom() {

  return Math.random( 1)
}
numeroRandom ( 1)
0.62573

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (numero === 0); {
  return false;
  }
  else if (numero > 0);{
    return "es positivo";
  }
  else (numero < 0); {
    return "es negativo";
  }
}
esPositivo( 22)
"es positivo"

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí

}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  
}



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
