/**
 * 
 * PRODUCTOS ORGANICOS
 * 
 * Objetivo: E commerce para vender los productos
 * 1 Especificar productos
 * 2 Información de los productos
 * 
 */

class Producto {
    constructor(id, nombre, imagen, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precioKilo;
        this.imagen = imagen;
    }
}

class Carrito {
    constructor ( id) {
        this.id = id;
        this.productos;
    }
}

function renderCard(producto){
    let cardRendered = 
    <div class="card m-3" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary" id= ${producto.id}>Go somewhere</a>
    </div>
    </div>;
return cardRendered
}

let catalogoProductos = {};

let producto1 = new Producto(1, "Banana", "imagen.jpg", 100);
let producto2 = new Producto(2,"Pera", "pera.jpg", 150);
let producto3 = new Producto(3,"Durazno", "durazno.jpg", 200);

catalogoProductos.push(producto1);
catalogoProductos.push(producto2);
catalogoProductos.push(producto3);

let cardsDiv = document.querySelector("#cards");

catalogoProductos.forEach(producto => {
    cardsDiv.innerHTML += renderCard(producto);
});


let cardRendered = 
    <div class="card m-3" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>;

let carrito1 = new Carrito (1);
