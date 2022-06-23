/*
let palabraUno
palabraUno = "Hola"

let palabraDos = "Mundo"

let palabraTres = palabraUno+palabraDos //HolaMundo

console.log(palabraTres)

// SOLICITAR DOS NUMEROS AL USUARIO, LOS VAMOS A SUMAR Y MOSTRAREMOS EL RESULRADOS //

let numeroUno = prompt ("Ingresa el primer número")
let numeroDos = prompt ("Ingresa el segundo número")

let suma = parseFloat(numeroUno) + parseFloat(numeroDos)

alert("La suma es:"+ suma)


let vidaPersonaje = 15

if (vidaPersonaje == 0) {
    alert("Muerto")
} else {
    alert("vivo")
}

let edad = prompt("ingresa tu edad")
if(edad>18){
    alert("Mayor de edad")
} else{
    alert("No eres mayor de edad")
}



let numeroCalificaciones = parseInt(prompt("Ingrese cantidad de calificaciones"))
let sumatoria = 0
let promedio = 0

for(let i = 1; i<=numeroCalificaciones; i++) {
let calificacion = parseFloat(prompt("ingrese la calificación" + i))
sumatoria = sumatoria + calificacion
}

promedio = sumatoria / numeroCalificaciones
alert ("el promedio es:"+ promedio)

while (promedio === "10"){
    alert ("Llegaste a tu máximo promedio")
    entrada = prompt("ingrese otra calificación")

}
*/

// PAGINA WEB VENTA DE PRODUCTOS ORGÁNICOS //

function saludar () {
    let nombre = prompt("ingresar nombre")
    alert ("Hola" + " " + nombre)
}

// Seleccionar cantidad de Kilos
function sumarKilos (primerNumero, segundoNumero, tercerNumero){
    let sumatoria = primerNumero + segundoNumero + tercerNumero
    console.log(sumatoria)
    return sumatoria
}
let resultadoSuma = sumarKilos(3,5,7)
alert(resultadoSuma)

// Selección día de Entrega
let seleccionUsuario = parseInt(
    prompt("¿Que día desea recibir su compra?: \n 1.Lunes \n 2.Martes \n 3.Miércoles \n 4.Jueves")
);

switch(seleccionUsuario){
case 1:
    alert("Usted seleccionó Lunes");
    break;
case 2:
    alert("Usted seleccionó Martes");
    break;
case 3:
    alert("Usted seleccionó Miércoles");
    break;
case 4:
    alert("Usted seleccionó Jueves");
    break;
default:
    alert("Ese día no se realizan envíos")
}

// MINORISTA VS MAYORISTA

let cantidadKilos = prompt("ingresa cantidad deseada")
if(cantidadKilos>15){
    alert("Dirigirse sección mayorista")
} else{
    alert("Continue comprando en sección minorista")
}



