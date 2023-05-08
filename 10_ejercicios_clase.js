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
// minutos. Se desea un algoritmo que calcule el tiempo medio en minutos por kilómetro. 


let distancia = parseFloat(prompt("Digite la distancia recorrida: "));
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
}

 