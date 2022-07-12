/*

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

// Precio sin IVA
const iva = x = x * 0.21
let precioProducto = 500
let descuento = 50
// Calculo el precioProducto + IVA - descuento
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento)
console.log(nuevoPrecio)

// Programá tu envío

let nombre = "Dolores Beguerie";
let direccion = "Ernesto de las Carreras 428";
let telefono = "+541133713983"

function Persona(nombre, direccion, telefono){
    this.direccion = direccion
    this.telefono = telefono
    this.hablar = function () {console.log("HOLA" + this.nombre)}
}
const persona1 = new Persona ("Dolores Beguerie", "Ernesto de las Carreras 428", "+541133713983")
persona1.hablar ();
for (const propiedad in persona1) {
    console.log(persona1[propiedad]);
}
*/
// Productos
class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre =  nombre
        this.precio = precio;
        this.cantidad = cantidad;
        this.vendido = false;
    }
    aumentarPrecio(precioAumentar){
        this.precio += precioAumentar;
    }
    vender(){
        this.vendido = true;
    }
    disminuirPrecio = (precioDisminuir) => (this.precio -= precioDisminuir);
    aplicarPromo = (promoCode) => {
        if(promoCode === "DESCUENTO10%"){
            this.precio -=(this.precio * 0.05)
        }
    }
    reducirStock = (cantidad) => this.cantidad -= cantidad
}

const MANZANA = new Producto("Manzana Roja Premium", "300", "1")
MANZANA.aplicarPromo("DESCUENTO10%")
console.log("Precio Manzana: "+ MANZANA.precio)
MANZANA.vender()
console.log("Estatus vendido manzana: "+ MANZANA.vendido)

const FRUTA = ["Banana", "Mandarina", "Uvas", "Arandanos", "Sandia", "Melon"];
const FRUTAVERANO = FRUTA.splice (3, 4, 5);
console.log("Frutas de Verano: "+ FRUTAVERANO)

const PRODUCTOS = [{ id: 1, Producto: "Frutas"},
                    { id:2, Producto: "Verdura"},
                    { id:3, Producto: "Cereales"}];

for (const Producto of PRODUCTOS) {
    console.log(Producto.id);
    console.log(Producto.Producto);
}

function agregarProductos(){
let productoNuevo = new Producto("Pelon", "250", "1")
PRODUCTOS.unshift(productoNuevo)
PRODUCTOS.pop()
console.log(PRODUCTOS)
}
function main(){
    agregarProductos()
}
main()
const existe = PRODUCTOS.some((producto) => producto.producto == "Harina")
console.log("Existe?" + existe)

const miCompra = [
    {nombre: "Manzana", precio:500},
    {nombre: "Peras", precio:400},
    {nombre: "Arandanos", precio:600}
]
const total = miCompra.reduce ((acc,el) => acc + el.precio, 0)
console.log(total)

const baratos = miCompra.filter ((producto) => producto.precio <500);
console.log(baratos)
 
let titulo = document.getElementById("tituloppal")
console.dir(titulo)