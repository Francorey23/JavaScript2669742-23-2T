/*
EN LAS VARIABLES SEGUN SEA EL VALOR SE DEFINE EL TIPO DE DATO

Material de JS en Linea
https://javascript.info/

*/

let color; //declaración
color = "Negro"; //asignación de tipo string
let color2 = "verde"; //declaración asignación
let precio = 1500; //puede ser numero o flotante 150.5
alert(color2);

let sumaNumero //notación utilizando camel case
//no permite utilizar
//var esta es mi variable; utilizar espacios en las variables --> Se utiliza notación Camello o _
//var 2color; UTLIZAR UN NUMERO PARA COMENZAR UNA VARIABLE
//var var; PALABRAS RESERVADAS

//constantes en mayusculas

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_ORANGE = "#FF7F00";

let color3 = COLOR_ORANGE;
alert(color3); // COLOR_ORANGE es mucho más fácil de recordar que ."#FF7F00"


//Tipos de Datos en JavaScript
//Existen 8 tipos de datos básicos en Js

//numericas
let num1 = 42;
let num2 = 3.14;

//string
//Siempre rodeada de comillas, sean dobles o sencillas
//Aunque también existen las Backticks: .`Hello`

let nombre = 'Juan';
let mensaje = "Hola mundo!";

//booleano (tipo lógico)
//Este tipo se usa comúnmente para almacenar valores sí/no: significa "sí, correcto" y significa "no, incorrecto".truefalse
let esVerdadero = true;
let esFalso = false;

//indefinidas no se sabe el tipo de dato
let variableNoDefinida;

//Null
let variableNula = null;

//objetos
let persona = {
    nombre: 'María',
    edad: 27,
    direccion: {
      calle: 'Calle Falsa',
      numero: 123
    }
  };

  //arreglos
let numeros = [1, 2, 3, 4, 5];
let colores = ['rojo', 'verde', 'azul'];


/*
-------------------CONCATENACION-----------------
*/
let nombres;
//NOMBRE = "Maria Fernanda"; // No corresponde a la verdadera variable declarada 'nombre'
nombres = "Maria Fernanda"; // Aqui esta bien

//write imprime en pantalla
document.write("Tu nombre es: " + nombres + "<br>"); //para concatenar utilizo +
//ventana emergente
//alert("Tu nombre es: <br> " + nombres + "<br>");


//Expresiones Lógicas utilizadas en Js

//Operador de negacion
let x = true;
//console.log(!x); // false

// Operador de conjunción &&
let x1 = true;
let y = false;
//console.log(x1 && y); // false

//Operador de disyunción ||: Este operador se utiliza para evaluar dos expresiones booleanas 
//y devuelve true si al menos una es verdadera
let x3 = true;
let y3 = false;
//console.log(x3 || y3); // true

//Operador de igualdad ==
let x4 = 5;
let y4 = "5";
//console.log(x4 == y4); // true

//Operador de desigualdad !=
let x5 = 5;
let y5 = "5";
//console.log(x5 != y5); // false

/**
Operadores de asignación compuesta
Operador de suma y asignación (+=)
Operador de resta y asignación (-=)
Operador de multiplicación y asignación (*=)
Operador de división y asignación (/=)
 */
let x6 = 10;
x6 += 5; // x ahora es igual a 15
x6 *= 2; // x ahora es igual a 30

/*
SALIDAS UTILIZADAS POR JS EN PANTALLA
Como usaremos el navegador como nuestro entorno de demostración, veamos un par de funciones para interactuar 
con el usuario: alert prompt confirm 

La función acepta dos argumentos:prompt

result = prompt(title, [default]);

result = confirm(question);

la función muestra una ventana modal con un y dos botones: OK y Cancel.confirmquestion

let eliminar = confirm("Seguro de eliminar, registro?");

alert( eliminar ); // true if OK is pressed

*/


/* CONVERSION DE TIPOS

Conversión a cadena
let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string

Conversión Numerica
let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number */



