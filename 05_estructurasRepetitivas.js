//1. Ejercicio
//Lista de los 20 primeros numeros enteros

/* let numMaximo = parseInt(prompt("Digite el numero para hacer la serie: "));
let i = 0;
while (i<numMaximo) {
    i=i+1;
    document.write(i+",")
    
} */

//let a=['arbol','hoja']
//con el ciclo for
/* for (let index = 0; index <= 20; index+=2) {
    document.write(index+",");
    
} */

let contadorPerros = 0
let contadorGatos = 0
let sumatoriaEdadPerros =0
let sumatoriaEdadGatos = 0
let promedioPerros = 0
let promedioGatos = 0
for (let i = 0; i < 2; i++) {

    let mascotas = prompt("ingrese tipo de mascota:")
    if (mascotas === "perro") {
        let edad = parseInt(prompt("ingrese edad"))

        contadorPerros = contadorPerros + 1
        sumatoriaEdadPerros = sumatoriaEdadPerros + edad

    }/* else if(mascotas=== "gato"){
    let edad=parseInt(prompt("ingrese edad"));
    contadorGatos= contadorGatos+1
    let sumatoriaEdadGatos = sumatoriaEdadGatos + edad
} */
}
document.write("Numero de perros es:", contadorPerros +"<br>")
document.write("La sumatoria de las edades es:", sumatoriaEdadPerros )
