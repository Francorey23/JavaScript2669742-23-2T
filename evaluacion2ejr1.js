/* let lunes=parseFloat(prompt("Digite el tiempo que cronometro el dia lunes: "))
let miercoles=parseFloat(prompt("Digite el tiempo que cronometro el dia miercoles: "))
let viernes=parseFloat(prompt("Digite el tiempo que cronometro el dia viernes: "))

tiempo_h=(lunes+miercoles+viernes)/3
tiempo_s=(lunes+miercoles+viernes)

console.log("El promedio recorrido en esta semana es: \n "+tiempo_h+"min  \n" + "El total recorrido en esta semana es: \n "+tiempo_s)
document.write("El promedio recorrido en esta semana es: \n "+tiempo_h+" \n" + "El total recorrido en esta semana es:  \n"+tiempo_s)
 */

let valor_compra = parseInt(prompt("ingrese el valor del producto "))

let valor_cliente = parseInt(prompt("ingrese el valor del cliente "))

if (valor_compra === valor_cliente){
prompt ("no tienes devuelta")

}else {

let valor_total = valor_cliente - valor_compra

prompt("tu devuelta equivale a " + valor_total)

}


