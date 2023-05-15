/*
========================
SABER SOCIEDAD DEL USUARIO
========================
*/

// opción para saber si va a buscar por antiguedad o por letra de la categoría
let opcion = parseInt(prompt('Ingresa 1 para buscar por categoría o 2 para ingresar los años de antiguedad que tienes.'));


// verificando si va a buscar por categoría o por antiguedad
// en caso de que no ingrese un número
if (isNaN(opcion)) {

    alert('Debes ingresar un múmero!');

    // encaso de que ingrese un número pero no esteen el rago de opciones
} else if (!(opcion == 1 || opcion == 2)) {

    alert('Debes elegir un número entre 1 y 2!');

    // en caso de quiera ingresa la categoría
} else if (opcion == 1) {

    // obteniendo la letra de la categoria
    let categoria = prompt('Ingresa la letra de tu categoría, \nLas categorías disponibles son: A, B, C').toUpperCase();

    // verificando la letra de la categoría
    if (categoria == 'A') {

        alert('Socio VIP');

        // en caso de  que ingrese un valor distinto a las categprías previamente establecidas
    } else if (!(categoria == 'B' || categoria == 'A' || categoria == 'C')) {

        alert('Debes ingresar una de las categorías disponibles: \n A-B-C');

    } else {
        alert('Socio NO VIP');

    }

    // en caso de que quiera elegir por años de antiguedad
} else {

    // obteniendo valor de años de antiguedad
    let antiguedad = parseInt(prompt('Ingresa tus años de antiguedad'));

    // verificando los años de antiguedad para saber si es VIP o no
    if (antiguedad >= 10 && antiguedad <= 20) {
        alert('Socio VIP');

    } else {
        alert('No es socio VIP');
    }

}