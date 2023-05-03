console.log("Hola mundo!")

//declarar variables y la asignacion 

let nombre = "Pedro Paez";
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

