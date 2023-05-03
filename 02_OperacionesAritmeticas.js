/*  OPERADORES ARITMETICOS 
    Suma (+): se utiliza para sumar dos valores numéricos o concatenar dos cadenas de texto.
    Resta (-): se utiliza para restar dos valores numéricos.
    Multiplicación (*): se utiliza para multiplicar dos valores numéricos.
    División (/): se utiliza para dividir dos valores numéricos.
    Módulo (%): se utiliza para obtener el resto de una división entre dos valores numéricos.
    Resto   % no esta relacionado con porcentaje
    Exponenciación es **

Estan también los operadores de 
incremento (++) y el operador de decremento (--),
*/

//Ejercicio hallar el impuesto por la compra de un computador sabiendo que el IVA es de 16%
let precioEquipo = 3500000.45;
let iva = 0.16; //Lo converti 16/100
let precioEquipoConIva = (precioEquipo*iva)+precioEquipo;
let precioEquipoConIvaMiles = precioEquipoConIva.toLocaleString();
//toLocaleString(), muestra el formato estilo millares en Js
document.write("El precio del articulo con IVA es: "+ precioEquipoConIvaMiles);

let numero1 = 10;

//Resto
//alert( 5 % 2 ); // 1, the remainder of 5 divided by 2

//Exponenciación
//alert( 2 ** 2 ); // 2² = 4


// Suma y asignación

let n = 2;
n = n + 5;
n = n * 2;

let m = 2;
m += 5; // now n = 7 (same as n = n + 5)
m *= 2; // now n = 14 (same as n = n * 2)

//alert( n ); // 14

numero1 += 5; // numero1 = numero1 + 5
console.log(numero1); // resultado = 15

// Resta y asignación
numero1 -= 3; // numero1 = numero1 - 3
console.log(numero1); // resultado = 12

// Multiplicación y asignación
numero1 *= 2; // numero1 = numero1 * 2
console.log(numero1); // resultado = 24

// División y asignación
numero1 /= 4; // numero1 = numero1 / 4
console.log(numero1); // resultado = 6

// Módulo y asignación
numero1 %= 2; // numero1 = numero1 % 2
console.log(numero1); // resultado = 0

//Incremento/disminución
let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
//alert( counter ); // 3

