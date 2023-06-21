
//eje 1
/*  function suma(a, b) {
    let sumatoria =  a + b;
    return sumatoria
  }
  
  let num1 = parseInt(prompt("Digite el primer numero: "));
  let num2 = parseInt(prompt("Digite el segundo numero: "));
  let result = suma(num1, num2);
  alert( result ); // 3 
 */


//2. validar la edad de una persona 
//varios return en una funcion 
/* function verificarEdad(edad) {
    if (edad >= 18) {
      return true;
    } else {
      return confirm('¿Tienes permiso de tus padres?');
    }
  }
  
  let edad = prompt('¿Cuántos años tienes?:');
  
  if ( verificarEdad(edad) ) {
    alert( 'Accesso autorizado' );
  } else {
    alert( 'Access denegado' );
  } */

  /*ejer 3. 
  -	Un profesor tiene un salario inicial de $2500000, y recibe un incremento de 10 % anual 
  durante 6 años. ¿Cuál es su salario al cabo de 6 años? ¿Qué salario ha recibido en cada uno 
  de los 6 años?

  */

  //declaracion de variables
  let salarioIncial = parseFloat(prompt("Digite su salario: "));
  let anio = parseFloat(prompt("Años de trabajo: "));
  let incremento = parseFloat(prompt("Incremento anual: "));

  function calcularSalario(salario,anio,incremento) {
    let salarioFinal = salario;
    for (let i = 1; i <= anio; i++) { //salario*10/100
        salarioFinal = salarioFinal+(salarioFinal*incremento)/100;
        //salarioFinal = salarioFinal+salarioFinal*(incremento/100);
        console.log("Año: ", i, ":",salarioFinal);
    // }
  }

  let salarioEmpleado = calcularSalario(salarioIncial,anio,incremento);

