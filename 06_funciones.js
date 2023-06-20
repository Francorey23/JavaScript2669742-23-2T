//crear la funcion
/* function saludar() {
    document.write("Buenos dias aprendices CTPI"+ "<br>");

} 

saludar();*/

/* function saludar() {
    let mensaje = "Buenos dias aprendices CTPI"+ "<br>";
    alert(mensaje);
}
//llamar mi funcion
saludar();
alert(mensaje); */

//variables externas

/*let salarioBasico = parseFloat(1350000);

 function salario() {
  let salario = 'Salario basico:  ' + salarioBasico;
  console.log(salario);
  document.write(salario); 
  return salario;
}

console.log(salario());
//console.log(salario);
document.write(salario()); */

/*
let userName = 'John';

function showMessage() {
  userName = "Javier"; // (1) changed the outer variable
  //let userName = 'John';
  let message = 'Hello, ' + userName;
  alert(message);
}

alert( userName ); // John before the function call

showMessage();

alert( userName ); 
*/

// día y mes de nacimiento del usuario
let diaNacimiento = parseInt(prompt('Ingresa el día de tu nacimiento'));
let mesNacimiento = parseInt(prompt('Ingresa el mes de nacimiento'));

// recibe como parametros el dia y mes de nacimiento
function signoZodiacal(dia, mes) {
    
    // validando que el día y el mes sean validos
    if ((dia > 0 && dia <= 31) && (mes > 0 && mes <= 12)) {
        
        // ARIES
        if ((dia >= 21 && mes == 3) || (dia <= 19 && mes == 4)) {
            alert('ERES ARIES 🐐');
            // TAURO 
        } else if((dia >= 20 && mes == 4) || (dia <= 20 && mes == 5)) {
            alert('ERES TAURO 🐮');
            // GEMINIS
        } else if((dia >= 21 && mes == 5) || (dia <= 20 && mes == 6)){
            alert('ERES GEMINIS 🫢');
            // CANCER
        }else if((dia >= 21 && mes == 6) || (dia <= 22 && mes == 7)){
            alert('ERES CANCER 🫢');
            // LEO
        }else if((dia >= 23 && mes == 7) || (dia <= 22 && mes == 8)){
            alert('ERES LEO 🫢');
            // VIRGO
        }else if((dia >= 23 && mes == 8) || (dia <= 22 && mes == 9)){
            alert('ERES VIRGO 🫢');
            // LIBRA
        }else if((dia >= 23 && mes == 9) || (dia <= 22 && mes == 10)){
            alert('ERES LIBRA 🫢');
            // ESCORPIO
        }else if((dia >= 23 && mes == 10) || (dia <= 21 && mes == 11)){
            alert('ERES ESCORPIO 🫢');
            // SAGITARIO
        }else if((dia >= 22 && mes == 11) || (dia <= 21 && mes == 12)){
            alert('ERES SAGITARIO 🫢');
            // CAPRICORNIO
        } else if((dia >= 22 && mes == 12) || (dia <= 20 && mes == 1)){
            alert('ERES CAPRICORNIO 🫢');
            // ACUARIO
        } else if((dia >= 21 && mes == 1) || (dia <= 19 && mes == 2)){
            alert('ERES ACUARIO 🫢');
            // PISCIS
        } else if((dia >= 20 && mes == 2) || (dia <= 20 && mes == 3)){
            alert('ERES PISCIS 🫢');
        }

        // en caso de que el día o la fecha sea incorrecta
    } else {
        alert('Debes ingresar una fecha valida! :)');
    }

}



signoZodiacal(diaNacimiento, mesNacimiento);