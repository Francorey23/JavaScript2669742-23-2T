//1. Ejercicio
//Lista de los 20 primeros numeros enteros

/* let numMaximo = parseInt(prompt("Digite el numero para hacer la serie: "));
let i = 0;
while (i<numMaximo) {
    i=i+1;
    document.write(i+",")
    
} */

//Ejercicio . utilizando el ciclo for
/* for (let index = 0; index <= 20; index+=2) {
    document.write(index+",");
    
} */
//Ejercicio 4. Realizar un programa que permita ingresar el tipo de mascota(perro o gato y realizar 
//el contenteo de gatos y perros y la sumatoria de c/u)
/*
let contadorPerros = 0
let contadorGatos = 0
let sumatoriaEdadPerros =0
let sumatoriaEdadGatos = 0

//for (let i = 0; i < 4; i++) {
    
 while (true) {
    let mascotas = prompt("ingrese tipo de mascota: (perro o gato) ó 0 para terminar")
    if (mascotas==="0") {
        break;
    }else if (mascotas === "perro") {
        let edad = parseInt(prompt("ingrese edad: "))

        contadorPerros = contadorPerros + 1
        sumatoriaEdadPerros = sumatoriaEdadPerros + edad

    }else if(mascotas=== "gato"){
    let edad=parseInt(prompt("ingrese edad: "));
    contadorGatos= contadorGatos+1
    sumatoriaEdadGatos = sumatoriaEdadGatos + edad
}
}
document.write("Numero de perros es:", contadorPerros +"<br>")
document.write("La sumatoria de las edades es:", sumatoriaEdadPerros+"<br>")
document.write("Numero de gatos es:", contadorGatos +"<br>")
document.write("La sumatoria de las edades es:", sumatoriaEdadGatos)
  */

// Ejercicio 5. Indicar si un numero digitado es primo
let numPrimo = parseInt(prompt("Digite el numero: "));

let esPrimo = true

if (numPrimo<=1) {
    esPrimo = false
    
}document.write("El numero es primo"+primo+"<br>")
if (numPrimo%2==0) {
 esPrimo = false   
}

if (esPrimo==true) {
    document.write("El numero es primo: "+numPrimo)
}else{
    document.write("El numero NO es primo: "+numPrimo)
} 

//Ejercicio 6. Hallar el factorial de un numero

/* let factorial = 1;
let num = parseInt(prompt("Ingrese el numero"));
for(let i = 1; i <= num; i++){
    factorial = factorial * i;
}
console.log("El resulado de " + num + "!" + factorial);
document.write("El resulado de " + num + "!" + factorial);
 */

//Ejercicio 7. Contar edades mayores a 65 y salir si digita 0

/* let contador = 0;
let edadTrabajador = 0;

let edad = parseInt(prompt("Ingrese las edades: "));

while (edad != 0) {
    contador++;

    if (edad >= 65) {
        edadTrabajador++;
    }

    edad = parseInt(prompt("Ingrese las edades"));
}

console.log("Las personas con edades mayores a 65 son:", edadTrabajador);
 */
 
/* let contador = 0;
let edadTrabajador = 0;

let edad = parseInt(prompt("Ingrese las edades: "));

//validar a traves de numero en la variable 
//
while (edad != 0) {
    //contador++;

    if (edad >= 65) {
        edadTrabajador++;
    }

    edad = parseInt(prompt("Ingrese las edades"));
}

console.log("Las personas con edades mayores a 65 son:", edadTrabajador);
  */



/* let edades;
let contadorMayor65 = 0;
let contadorMenor65 = 0;

while (edades != "") {
    edades = parseInt(prompt("Ingrese las edades (Si deseas terminar la prueba deja en blanco el espacio)"))
    if (!isNaN(edades)) {
        if (edades >= 65) {
            contadorMayor65 = contadorMayor65 + 1
        }else{
            contadorMenor65 = contadorMenor65 + 1
        }
    }else{
        break
        alert("Ingresa un numero valido")
    }       
}
alert ("Las personas mayores de 65 años son: " + contadorMayor65) */

//Ejercicio 8. Hallar la nomina total de 5 trabajdores que pide horas y valor hora

/* let total = 0;
let sumaNomina = 0;
for (let i = 0; i < 5; i++){
    let horastrabajadas=parseFloat(prompt("Digite las horas trabajadas"));
    let valorhoras=parseFloat(prompt("Digite el valor por hora"));
    totalTrabajador=horastrabajadas*valorhoras;
    sumaNomina = sumaNomina + totalTrabajador;
 
}
console.log("Pago de nomina "+sumaNomina)
document.write("Pago de nomina"+sumaNomina)     */


// Deseo contar las edades mayores a 65 trabajado con un booleano
/* let contador = 0;
let edadTrabajador = 0;

//let edad = parseInt(prompt("Ingrese las edades: "));

//validar a traves de numero en la variable 
// true o false
let edad;
let condicion = true  //variable de tipo bandera
while (condicion) {
    edad = parseInt(prompt("Ingrese las edades"));
    contador++;
   
    if (edad === 0) {
        //break;
        condicion = false;
    }

    if (edad >= 65) {
        edadTrabajador++;
    }

    
}

console.log("Las personas con edades mayores a 65 son:", edadTrabajador);
console.log("Total de edades:", contador);
  */

//1.	Realizar un algoritmo que, dados varios números, los acumule hasta que se
//ingrese el valor de cero. Mostrar el valor acumulado y la cantidad de valores

//3-4-5-6 sumatoria acomulador y cantidad de valores variable contador

/* let numero;
let sumarNumero = 0;
let i =0;

//while(numero != 0)
//for i=0;numero!=0;i++
//condicion, 3, i++
for (;;) { //for(true)
    numero = parseInt(prompt("Digite los numeros: (0 para terminar)"));
    //console.log(i);
    if (numero === 0) {
        break;
    }
    //sumarNumero va acomulando la variable numero
    i++;
    sumarNumero= sumarNumero+numero;
}
document.write(i,"<br>");
document.write(sumarNumero);
 */

/* let competencia = "";
let calificacion = 0;
let contarAlgoritmia = 0;
let contarIngles = 0;

//while (condicion) competencia ""sale del cliclo

while (competencia !="x") {
    competencia = prompt("Digite el nombre de la competencia: ")
    //calificacion = parseFloat(prompt("Digite su nota: "));
    //console.log(competencia);
    if (competencia==="algoritmia") {
        calificacion = parseFloat(prompt("Digite su nota: "));
        if (calificacion>=3.5) {
            contarAlgoritmia++;
        }
    }
    if (competencia==="ingles") {
        calificacion = parseFloat(prompt("Digite su nota: "));
        if (calificacion>=3.5) {
            contarIngles++;
        }
    }

    
 
}
console.log(contarAlgoritmia,"<br>");
console.log(`Los aprendices aprobados en algoritmia son ${contarAlgoritmia}<br>`);

console.log(contarIngles); */