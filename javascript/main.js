// Carrito de compra.

// PRODUCTOS
let productos = [
    {id: 1, nombre: "simple", categoria: "hamburguesa", precio: 280, ingredientes: "carne, queso Cheddar y aderezo", imagen: "../img/Hamburguesaconqueso.jpg"},
    {id: 2, nombre: "doble", categoria: "hamburguesa", precio: 350, ingredientes: "doble carne, queso Cheddar y aderezo", imagen: "../img/Hamburguesadobleconqueso.jpg"},
    {id: 3, nombre: "tinyDream", categoria: "hamburguesa", precio: 270, ingredientes: "carne, lechuga y tomate", imagen: "../img/tinydream.jpg"},
    {id: 4, nombre: "extraCheese", categoria: "hamburguesa", precio: 350, ingredientes: "carne, doble queso cheddar, cebolla caramelizada y salsa ranchera", imagen: "../img/extracheese.png"},
    {id: 5, nombre: "completa", categoria: "hamburguesa", precio: 500, ingredientes: "carne, queso muzzarella, cebolla caramelizada, pepinillos, cebolla morada, tomate y lechuga", imagen: "../img/completa.png"},
    {id: 6, nombre: "bigDream", categoria: "hamburguesa", precio: 430, ingredientes: "doble carne, queso cheddar, pepinillos y lechuga", imagen: "../img/bigdream.jpg"},
    {id: 7, nombre: "dreamChoise", categoria: "hamburguesa", precio: 580, ingredientes: "triple Carne, queso cheddar, bacon, salsa dreamBurger, lechuga y tomate", imagen: "../img/dreamone.jpg"},
    {id: 8, nombre: "theChicken", categoria: "hamburguesa", precio: 270, ingredientes: "medallon de pollo, mayonesa y lechuga", imagen: "../img/hamburguesadepollo.jpg"},
    {id: 9, nombre: "veganDream", categoria: "hamburguesa", precio: 380, ingredientes: "carne vegana, pepinillos, tomate, lechuga y salsa vegan", imagen: "../img/veganDream.PNG"},
    {id: 10, nombre: "papasFritas", categoria: "acompaniamiento", precio: 120, ingredientes: "papas fritas sin aderezos", imagen: "../img/papasfritas.jpg"},
    {id: 11, nombre: "ensalada", categoria: "acompaniamiento", precio: 200, ingredientes: "tomate y lechuga", imagen: "../img/ensalada.jpg"},
    {id: 12, nombre: "cocaCola", categoria: "bebida", precio: 130, ingredientes: "coca-cola", imagen: "../img/cocacola.png"},
    {id: 13, nombre: "cocaColaZero", categoria: "bebida", precio: 130, ingredientes: "coca-cola zero", imagen: "../img/cocacola.png"},
    {id: 14, nombre: "agua", categoria: "bebida", precio: 80, ingredientes: "agua", imagen: "../img/agua.jpg"}
];

// DOM - LLAMADO AL LISTADO DEL CARRITO (ul) EN HTML (offcanvas).
let carritolist = document.querySelector("#listCarrito");

// DOM - LLAMADO AL (p) EN DONDE FIGURARA EL TOTAL DEL CARRITO.
let total = document.querySelector("#total");

// DOM -LLAMADO AL CONTENEDOR DONDE SE INYECTAN LOS PRODUCTOS EN FORMA DE CARDS.
let container = document.querySelector("#ContainerProd");

// CARRITO VACIO AL CUAL SE LE AGREGARAN PRODUCTOS.
let carrito = [];

// LOCALSTORAGE LLAMA AL CARRITO SETEADO
document.addEventListener("DOMContentLoaded", () => {

    if (localStorage.getItem("carrito")) {
        carrito = JSON.parse(localStorage.getItem("carrito"));
        vistaCarrito();
    }
})

// DOM LLAMA AL CONTADOR.
let contadorCarrito = document.querySelector("#nCarrito");


// REPRESENTACION DE LOS PRODUCTOS EN HTML.

productos.forEach((producto) => {

    let cards = document.createElement("div");
    cards.setAttribute("class", "col d-flex justify-content-center");
    cards.innerHTML = `
    <div class="card shadow" style="width: 18rem;">
        <img src="${producto.imagen}" class="card-img-top animImg" alt="${producto.categoria}, ${producto.ingredientes}">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre.toUpperCase()}</h5>
            <div class="dropdown mt-3 mb-2 selectdeli">
                <button class="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Ingredientes
                </button>
                <ul class="dropdown-menu p-2" aria-labelledby="dropdownMenuButton1">
                <li>${producto.ingredientes}</li>
                </ul>
                <p class="fs-5 mb-0">$${producto.precio}</p>
            </div>
            <div class="selectdeli">
                <button type="button" class="btn btn-warning" id="${producto.id}">Agregar a carrito</button>
                <button class="w-25 bg-warning bg-opacity-25 border rounded d-flex justify-content-around align-items-center" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling">
                    <i class="fa-solid fa-cart-shopping text-warning"></i>
                    <div id="numC">0</div>
                </button>
            </div>    
        </div>
    </div>`;

    container.appendChild(cards);

    // BOTON AGREGAR AL CARRITO:
    let btnAgregar = document.getElementById(producto.id);

    btnAgregar.addEventListener("click", () => {   

        agregarCarrito(producto.id); 

    });   

    
});

// AGREGAR AL CARRITO - BUSCA EL PRODUCTO QUE COINCIDA CON EL PARAMETRO MEDIANTE ID.
const agregarCarrito = (prodId) => {
    const itemId = productos.find((producto) => producto.id === prodId);
    carrito.push(itemId);
    vistaCarrito();
};

//BTN ELIMINAR PRODUCTO DEL CARRITO, BUSCA Y ELIMINA MEDIANTE ID
const eliminar = (idProd) => {

    const item = carrito.find((producto) => producto.id === idProd);
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1);
    vistaCarrito();
}

// AGREGA PRODUCTOS AL CARRITO DEL HTML (offcanvas) - ACTUALIZA EL CARRITO CON LOS PRODUCTOS NUEVOS.
const vistaCarrito = () => {

    // BORRO EL CONTENIDO PARA LUEGO ACTUALIZARLO CON LOS PRODUCTOS NUEVOS.
    carritolist.innerHTML= ""

    // RECORRO EL CARRITO (ARRAY) Y POR CADA PRODUCTO CREO UN LI CON UN BOTON PARA ELIMINARLO (HTML - offcanvas)
    carrito.forEach((producto) => {

        const listado = document.createElement("li");
        listado.setAttribute("class", "d-flex justify-content-between");
        listado.innerHTML = `${producto.categoria} - ${producto.nombre} - $${producto.precio}
        <button onclick="eliminar(${producto.id})" class="m-1 border rounded d-flex align-items-center btn btn-danger text-dark">
            <i class="fa-solid fa-trash-can"></i>
        </button>`;
        carritolist.appendChild(listado)

        // LOCALSTORAGE (GUARDA EL CARRITO)
        localStorage.setItem("carrito", JSON.stringify(carrito));
         
    })

    // CANTIDAD DE PRODUCTOS DENTRO DEL CARRITO REFLEJADO EN EL ICONO DEL CARRITO DEL NAV.
    contadorCarrito.innerHTML = carrito.length; 

    // SUMA TOTAL DE LOS PRODUCTOS DEL CARRITO.
    total.innerHTML = carrito.reduce((acum, prod) => acum + prod.precio, 0);
};

    


// FUNCION QUE MUESTRA LA CANTIDAD (N) DEL MISMO PRODUCTO EN CARRITO (DENTRO DE CADA CARD) - A IMPLEMENTAR

// let numC_ = document.querySelector("#numC")
// const Numprod_ = (ProdID) => { 
//     let numprod = carrito.filter((producto) => producto.id === ProdID);
//     let numcc = numprod.length+1;
//     numC_.innerHTML = numcc;  // (A MODIFICAR) IMPRIME EN LA PRIMERA CARD, CUANDO DEBERIA IMPRIMIR EL N EN CADA CARD.
// }
// onclick="Numprod_(${producto.id})" (CODIGO HTML A INSERTAR EN CARDS)


// SELECCION DE ENVIO - A IMPLEMENTAR.

// let envio = [
//     {categoria: "envio", nombre: "palermo", precio: 200},
//     {categoria: "envio", nombre: "belgrano", precio: 300},
//     {categoria: "envio", nombre: "colegiales", precio: 300},
//     {categoria: "envio", nombre: "chacarita", precio: 350},
//     {categoria: "envio", nombre: "villa crezpo", precio: 300},
//     {categoria: "envio", nombre: "recoleta", precio: 300}
// ];








// A IMPLEMENTAR:

// Que el contador del producto (circulo en rojo, ubicado arriba del carrito) aparezca solo cuando haya productos en el carrito. 

// Que funcione la cantidad del mismo producto (N), ubicado dentro de cada card, en el carrito. 

// Poder filtrar por categoría. 

// Pedirle más datos al usuario para que el pedido sea más completo (envío, dirección, número de teléfono y numero de mail) (Que se guarden en el localstorage) 

// Opción de envío (zona) que se agregue en el carrito con precio. 

// Descuento por código. 

// Modo Oscuro (Que se guarde en el LocalStorage). 

// Cartel que diga “AUN NO HAY PRODUCTOS EN EL CARRITO” (que solo aparezca cuando el carrito está en 0) 

// Cantidades de productos (poder seleccionar la cantidad en la card y que en el carrito aparezca en un “li” producto con cantidad ingresada) 

// Al clickear el botón “PEDIR” setear en el LocalStorage el carrito con KEY nombre del usuario. 