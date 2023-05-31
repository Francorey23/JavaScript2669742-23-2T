let letra= prompt('Ingresa una letra para verificar si es una consonante o vocal').toUpperCase()

if (!isNaN(letra)){
  
    alert ('Dato no valido')

} else if (letra == 'A' || letra == 'E' || letra == 'I' || letra == 'O' || letra == 'U'  ) {

    alert ('La letra que ingresaste es una vocal')
} else {

    alert ('la letra que ingresaste es una consonante')
}

