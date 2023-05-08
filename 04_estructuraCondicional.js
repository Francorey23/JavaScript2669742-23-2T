/*
ESTRUCTURAS CONDICIONALES

1. Hallar el perimetro de un circulo

*/

/* let radio = prompt("Digite el valor del radio: ");
const PI = 3.1416

//isNaN(radio) si la variable radio no es un numero
if (!isNaN(radio)) {//con la negacion si el radio es un numero hacer operacion
    let perimetro = 2*PI*radio;*-
    console.log("El perimetro del circulo es: "+ perimetro);
}else{
    console.warn("Solo se reciben numeros:"+radio);
} */

//2. Ejercicio 	b. Solicitar al usuario un número natural y verificar que el 
//número ingresado se encuentre dentro de la primera docena de números naturales, es decir entre el 1 y el 12.

let valor = parseInt(prompt("Digite el numero: "));

if (isNaN(valor)) {
    console.log("Debes ingresar solo numeros: "+valor)
}else if (valor>0 && valor<=12) {
    console.log("Cumple la condición: "+ valor)
}else{
    console.log("El numero no esta en la primera docena: "+valor);
}
















