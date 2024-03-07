console.log("Hola mundo!")

//declarar variables y la asignacion 

/* let nombre = "Pedro Paez";
console.log(nombre)
let nombres = prompt("Digite sus nombres completos: ");
console.log(nombres)

let salario = parseFloat(prompt("Salario: "))
//console.log(salario)

let bono = 0.07

if (salario>1000000) {
    let salarioMasBono = (salario*bono)+salario
    console.log(salarioMasBono.toLocaleString())
    document.write("Su salario mas bono es: "+ salarioMasBono.toLocaleString())    
}else{
    document.write("Su salario: "+salario+" No tiene bono")
}
 */

//Ejercicio 2
//Un corredor de maratón (distancia 42,195 Km) ha recorrido la carrera en 2 horas 25
// minutos. Se desea un algoritmo que calcule la velocidad en minutos por kilómetro. 


/* let distancia = parseFloat(prompt("Digite la distancia recorrida: "));
let horas = parseInt(prompt("Digite las horas: "));
let minutos = parseInt(prompt("Digite los minutos: "));

//if (distancia>0 && horas>0 && minutos>0)   {
if (distancia>0 && horas>0 && minutos>0) {
    let horasAMinutos = horas*60+minutos;
    let resultado = distancia/horasAMinutos
    console.log("La distancia recorrida en km minutos es: "+resultado);
    }
else{
    document.write("La distancia debe ser mayor a cero: "+distancia);
} */

/* Ej 3 Escribe un programa que calcule el Índice de Masa Corporal (IMC) de una persona y muestre el rango en el que se
encuentra: bajo peso, normal, sobrepeso u obesidad. Usa condicionales para mostrar el resultado adecuado según el 
valor del IMC. */

let pesoPersona = parseFloat(prompt("Digite su peso: "));
let altura = parseFloat(prompt("Digite su altura: "));


    let imc = pesoPersona / altura **2
        imc = imc*100
    if (imc < 18.5) {
        console.log("Bajo peso");
    } else if (imc >= 18.5 && imc < 24.9) {
        console.log("Normal");
    } 

    /* Ejer 4 Desarrolla un algoritmo que convierta una puntuación numérica (0 a 100) en una calificación escolar 
    (A, B, C, D, F) usando condicionales. Por ejemplo, 90-100 es A, 80-89 es B, etc */

    let puntuacion = parseFloat(prompt("Digite la calificaciòn: "));
        if (puntuacion >= 90) {
            console.log("A");
        } // Añade más condiciones aquí
    
    /* Ejer 5. Crea un programa que calcule la tarifa de envío de un paquete según su peso. Por ejemplo, menos
     de 2kg cuesta $5000, entre 2kg y 5kg cuesta $10000, y más de 5kg cuesta $15000.
     */
     let  peso = parseFloat(prompt("Digite la calificaciòn: "));
        if (peso < 2) {
            console.log("$5");
        } // Añade más condiciones aquí
    }
    
    calcularTarifa(3); // Cambia el valor para probar
    
