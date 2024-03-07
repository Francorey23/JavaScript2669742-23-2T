//PUEDO CREAR UN COMENTARIO
/*Varias lineas de comentario
Segunda linea comentario */

//Declaración de variables y asignacion

let nombres1, apellidos, direccion;
let nombres = "Ana Patricia";
let numero = 450;
let suma = 600.4; //flotante
console.log(suma);

let sumaNumeros = 900 //notación camel case primerApellido

//constantes

const COLOR_RED = "#FFOO";
console.log(COLOR_RED);

//TIPOS DE DATOS EN JS

//Numerico
let var1 = 789;
let var2 = 800.5;

//string cadena
let apellido = 'Velez'
let apellidos2 = "Velez"

//boleano o tipo logico

let estado = true;
let cargo = false;

console.log(cargo);

//variable Null
let variableNula = null;
let mensaje = "Hola tu fecha de nacimiento es '10-mayo-2000'";

//variable tipo objeto
let persona = {
    nombre: 'Fernando',
    edad: 34,
    salario: 1200000.4
}

//variable arreglo
let numeros = [1,2,3,4,5,6,7,8,9];
let colores = ["blanco", "verde", "azul", "negro"];

//concatenacion unir 

let salario2 = 1200000.4
let nombres4 = "Juan Andres";
document.write("Hola "+nombres4+" tu salario es: <br>"+salario2);

//Expresiones Lógicas utilizadas en Js

//Operador de negacion
let x = true;
//console.log(!x); // false

// Operador de conjunción && Y
let x1 = false;
let y = true;
//console.log(x1 && y); // false

//Operador de disyunción ||: Este operador se utiliza para evaluar dos expresiones booleanas 
//y devuelve true si al menos una es verdadera
let x3 = true;
let y3 = true;
//console.log(!(x3 || y3)); // true

//Operador de igualdad ==
let x4 = 5;
let y4 = "5";
//console.log(x4 == y4); // true

//Operador de desigualdad !=
let x5 = 5;
let y5 = "5";
console.log(x5 != y5); // false

let x6 = 20;
x6= x6+15;
console.log(x6)
x6+= 15;
console.log(x6)
x6*=100;
console.log(x6);

/* let nombres3 = prompt("Digite los nombres completos: ")
console.log(nombres3)
let salario = parseInt(prompt("Digite su salario: "));
console.log(salario)

let result = confirm("Deseas eliminar el registro? ");
console.log(result) 

alert(result)*/

let value = true;
alert(typeof value);
let ganancia = true
ganancia = String(ganancia);
alert(typeof ganancia)
ganancia =Number(ganancia)
alert(typeof ganancia)











