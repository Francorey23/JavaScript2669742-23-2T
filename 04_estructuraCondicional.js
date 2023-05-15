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

/* let valor = parseInt(prompt("Digite el numero: "));

if (isNaN(valor)) {
    console.log("Debes ingresar solo numeros: " + valor)
} else if (valor > 0 && valor <= 12) {
    console.log("Cumple la condición: " + valor)
} else {
    console.log("El numero no esta en la primera docena: " + valor);
}
 */

//.	Ejer 3. Se ingresa por teclado la categoría de un socio del club deportivo CTPI y su antigüedad en años. Las categorías posibles son A, B y C.
//	Luego se desea saber si es un socio VIP si el socio ingresado tiene categoría A o su antigüedad se encuentra entre los 10 y 20 años, en esos casos se pide mostrar un cartel que exprese lo siguiente: “Socio vip”.

//Categoria si es B y la edad servicio esta entre 1 y 9 Preferencial 
/* let categoria = prompt("Ingrese la categoría del socio (A, B o C):").toUpperCase();
let antiguedad = parseInt(prompt("Ingrese la antigüedad del socio en años:"));

// se verifica si el socio es VIP
if (categoria === "A" && (antiguedad >= 10 && antiguedad <= 20)) {
    // se muestra el mensaje de socio VIP
    alert("Socio VIP");
} else if (categoria === "B" && (antiguedad >= 1 && antiguedad < 10)) {
    alert("Es un cliente Preferencial")
} else{
    alert("no es VIP")

}
console.log(categoria); */

//Ejer. 4. Lados del dado aleatorio

//round(Math. random()*10); alert("Número aleatorio entre 0 y 10:"+aleatorio);

/* let aleatorio = Math.random() * 6;
//alert("Número aleatorio entre 0 y 10:"+Math. round(aleatorio));
//document.write("<span style='font-size:20px;color:blue;'>Juega y diviértete tira el dado</span>");
document.write("Juega y diviertete tira el dado <br>")

if (Math.round(aleatorio) === 1) {
    document.write("El numero de dado obtenido es: " + Math.round(aleatorio));
} else if (Math.round(aleatorio) === 2) {
    document.write("El numero de dado obtenido es: " + Math.round(aleatorio));
} else if (Math.round(aleatorio) === 3) {
    document.write("El numero de dado obtenido es: " + Math.round(aleatorio));
} else if (Math.round(aleatorio) === 4) {
    document.write("El numero de dado obtenido es: " + Math.round(aleatorio));
} else if (Math.round(aleatorio) === 5) {
    document.write("El numero de dado obtenido es: " + Math.round(aleatorio));
} else if (Math.round(aleatorio) === 6) {
    document.write("El numero de dado obtenido es: " + Math.round(aleatorio));
} else {
    document.write("El numero de dado obtenido no existe");
} */


// Ejer 4. dados utilizando switch case

/* let aleatorio = Math.random() * 6;
let dado = true

document.write("Juega y diviertete tira el dado <br>")

switch (dado === true) {
    case Math.round(aleatorio) === 1:
        document.write("El numero de dado obtenido es: " + Math.round(aleatorio));
        break;
    case Math.round(aleatorio) === 2:
        document.write("El numero de dado obtenido es: " + Math.round(aleatorio));
        break;
    case Math.round(aleatorio) === 3:
        document.write("El numero de dado obtenido es: " + Math.round(aleatorio));
        break;
    case Math.round(aleatorio) === 4:
        document.write("El numero de dado obtenido es: " + Math.round(aleatorio));
        break;
    case Math.round(aleatorio) === 5:
        document.write("El numero de dado obtenido es: " + Math.round(aleatorio));
        break;
    case Math.round(aleatorio) === 6:
        document.write("El numero de dado obtenido es: " + Math.round(aleatorio));
        break;
    case Math.round(aleatorio) === 0:
        document.write(" ");
        break;
    default:
        document.write("El numero de dado no existe");
        break;
}
 */



    
// numero aleatorio
/* let dado = Math.floor(Math.random() * 6 + 1);
alert(dado)

// verificando el numero aleatorio que salga
if (dado == 1) {
     alert('El número aleatorio es 1');

} else if(dado == 2){

    alert('El número aleatorio es 2');

} else if(dado == 3){
    alert('El número aleatorio es 3');
} else if(dado == 4){
    alert('El número aleatorio es 4');

} else if(dado == 5){
    alert('El número aleatorio es 5');

} else if(dado == 6){
    alert('El número aleatorio es 6');
}



 */

//Ejer 5. Utilizando switch / case valor del dado

/* let dado = Math.floor(Math.random() * 6 + 1);

document.write("Tira los dados!! <br> ");

//declaro una variable True para ingresar al switch
let jugar = false

switch (jugar==true) {
    //Evaluando el valor que adquirio dado
    case dado != 0:
        document.write("Numero no valdio: "+dado);
        break;
    
    //falsa o else if/else
    default:
        document.write("El numero del dado es: "+dado);
        break;
} */

//Eje 6. switch case

let dado = Math.floor(Math.random() * 6 + 1);

document.write("Tira los dados!! <br> ");

//declaro una variable True para ingresar al switch


switch (dado<0) {
        //Evaluando el valor que adquirio dado
    case dado < 0:
        document.write("No es un numero del dado ");
        break;
        case dado == 1:
        document.write("El numero del dado es: "+dado);
        break;
    case dado == 2:
        document.write("El numero del dado es: "+dado);
        break;
    //falsa o else if/else
    default:
        document.write("Numero no valdio: "+dado);
        break;
}