// Carrito de compra.



// REGISTRO DE USUARIOS - PENDIENTE DE INTERACCION CON EL HTML.

// let registroUsuarios = [{usuario: "luciano", fecha: "17/7/2022"}];

// const fechaActual = new Date();

// let nombreUsuario = prompt("Ingrese su nombre").toLowerCase();

// UsuarioNuevo()

// function UsuarioNuevo() {
    
//     do { 
//         if (nombreUsuario == ""){

//             alert("Por favor, ingrese un nombre valido.")
//             nombreUsuario = prompt("Ingrese su nombre").toLowerCase();

//         }

//     }while (nombreUsuario == "") { 

//         for(let u in registroUsuarios)
        
//         if (registroUsuarios[u].usuario.includes(nombreUsuario) == false) {

//             console.log(`${nombreUsuario} ingreso al sitio`);
//             console.log(`Esta registrado? ${registroUsuarios.includes(nombreUsuario)}`);
//             registroUsuarios.push({usuario: nombreUsuario , fecha: (fechaActual.toLocaleDateString())});
//             console.log(`${nombreUsuario} se ha ingresado al sistema.`);
//             console.log(`Se le ha brindado al usuario: ${nombreUsuario} el codigo de descuento "DREAMBURGER" correspondiente a un 10% de descuento por ser su primera vez en el sitio.`)
//             alert(`Bienvenido/a ${nombreUsuario}\nPor ser nuevo en el sitio se le brinda el codigo "DREAMBURGER" correspondiente a un 10% de descuento en tu proxima compra. Dicho codigo se le pedira al finalizar la compra.`)

//         } else if (registroUsuarios[u].usuario.includes(nombreUsuario) == true) {
//             console.log(`${nombreUsuario} ingreso al sitio`);
//             console.log(`${nombreUsuario} ya ha ingresado con anterioridad.`)
//             alert(`Bienvenido/a ${nombreUsuario}`)
//         }
//     }  
//     return registroUsuarios;  
// }
// console.log(registroUsuarios);
// REGISTRO DE USUARIOS fin

// FILTRO DE USUARIOS (solo lo usara el administrador cuando lo necesite)
// if (nombreUsuario == "luciano") { 

//     // POR NOMBRE
//     let buscarNombre = prompt("Ingrese nombre de usuario a buscar\nx - salir").toLowerCase();

//     while (nombreUsuario != "x") {

//         if (nombreUsuario != "") { 

//             let filtroNombre = registroUsuarios.filter(el => el.usuario == buscarNombre);
//             console.log(filtroNombre)
//             break;

//         } else {
//             alert("Inserte un valor valido");
//             buscarNombre = prompt("Ingrese nombre de usuario a buscar\nx - salir").toLowerCase();
//         }
//     }   

//     // POR FECHA
//     let buscarFecha = prompt("Ingrese la fecha a buscar\nx - salir").toLowerCase();

//     while (nombreUsuario != "x") {

//         if (nombreUsuario != "") { 

//             let filtroFecha = registroUsuarios.filter(el => el.fecha == buscarFecha);
//             console.log(filtroFecha)
//             break;

//         } else {
//             alert("Inserte un valor valido");
//             buscarFecha = prompt("Ingrese la fecha a buscar\nx - salir").toLowerCase();
//         }
//     }    
   
// }

// CARRITO VACIO AL CUAL SE LE AGREGARAN PRODUCTOS.
let carrito = [];

// MONTO INICIAL DEL CARRITO, SE LE IRAN SUMANDO LOS PRECIOS DE LOS PRODUCTOS AGREGADOS AL CARRITO MEDIANTE LA FUNCION "Total" (linea-140)
let totalCarrito = 0;

// DOM - LLAMADO AL LISTADO DEL CARRITO (ul) EN HTML.
let carritolist = document.querySelector("#listCarrito");

// DOM - LLAMADO AL (p) EN DONDE FIGURARA EL TOTAL DEL CARRITO.
let total = document.querySelector("#total");

// DOM -LLAMADO AL CONTENEDOR DONDE SE INYECTAN LOS PRODUCTOS EN FORMA DE CARDS.
let container = document.querySelector("#ContainerProd");

// PRODUCTOS
let productos = [
    {id: "1", nombre: "simple", categoria: "hamburguesa", precio: 280, ingredientes: "carne, queso Cheddar y aderezo", imagen: "../img/Hamburguesaconqueso.jpg"},
    {id: "2", nombre: "doble", categoria: "hamburguesa", precio: 350, ingredientes: "doble carne, queso Cheddar y aderezo", imagen: "../img/Hamburguesadobleconqueso.jpg"},
    {id: "3", nombre: "tinyDream", categoria: "hamburguesa", precio: 270, ingredientes: "carne, lechuga y tomate", imagen: "../img/tinydream.jpg"},
    {id: "4", nombre: "extraCheese", categoria: "hamburguesa", precio: 350, ingredientes: "carne, doble queso cheddar, cebolla caramelizada y salsa ranchera", imagen: "../img/extracheese.png"},
    {id: "5", nombre: "completa", categoria: "hamburguesa", precio: 500, ingredientes: "carne, queso muzzarella, cebolla caramelizada, pepinillos, cebolla morada, tomate y lechuga", imagen: "../img/completa.png"},
    {id: "6", nombre: "bigDream", categoria: "hamburguesa", precio: 430, ingredientes: "doble carne, queso cheddar, pepinillos y lechuga", imagen: "../img/bigdream.jpg"},
    {id: "7", nombre: "dreamChoise", categoria: "hamburguesa", precio: 580, ingredientes: "triple Carne, queso cheddar, bacon, salsa dreamBurger, lechuga y tomate", imagen: "../img/dreamone.jpg"},
    {id: "8", nombre: "theChicken", categoria: "hamburguesa", precio: 270, ingredientes: "medallon de pollo, mayonesa y lechuga", imagen: "../img/hamburguesadepollo.jpg"},
    {id: "9", nombre: "veganDream", categoria: "hamburguesa", precio: 380, ingredientes: "carne vegana, pepinillos, tomate, lechuga y salsa vegan", imagen: "../img/veganDream.PNG"},
    {id: "10", nombre: "papasFritas", categoria: "acompaniamiento", precio: 120, ingredientes: "papas fritas sin aderezos", imagen: "../img/papasfritas.jpg"},
    {id: "11", nombre: "ensalada", categoria: "acompaniamiento", precio: 200, ingredientes: "tomate y lechuga", imagen: "../img/ensalada.jpg"},
    {id: "12", nombre: "cocaCola", categoria: "bebida", precio: 130, ingredientes: "coca-cola", imagen: "../img/cocacola.png"},
    {id: "13", nombre: "cocaColaZero", categoria: "bebida", precio: 130, ingredientes: "coca-cola zero", imagen: "../img/cocacola.png"},
    {id: "14", nombre: "agua", categoria: "bebida", precio: 80, ingredientes: "agua", imagen: "../img/agua.jpg"}
];

// REPRESENTACION DINAMICA DE LOS PRODUCTOS

let TodosLosProd = () => { 
    productos.forEach((producto) => {
        let {id, nombre, precio, ingredientes, imagen} = producto;  //OPERADOR AVANZADO
        let cards = document.createElement("div");
        cards.setAttribute("class", "col d-flex justify-content-center");
        cards.innerHTML = `
        <div class="card shadow" style="width: 18rem;" data-aos="zoom-in">
            <img src="${imagen}" class="card-img-top animImg" alt="Hamburguesa con queso">
            <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <div class="dropdown mt-3 mb-2 selectdeli">
                    <button class="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Ingredientes
                    </button>
                    <ul class="dropdown-menu p-2" aria-labelledby="dropdownMenuButton1">
                    <li>${ingredientes}</li>
                    </ul>
                    <p class="fs-5 mb-0">${precio}</p>
                </div>
                <div class="selectdeli">
                    <button type="button" class="btn btn-warning" id:"${id}">Agregar a carrito</button>
                    <button class="w-25 bg-warning bg-opacity-25 border rounded d-flex justify-content-around align-items-center" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling">
                        <i class="fa-solid fa-cart-shopping text-warning"></i>
                        <div id="numC">0</div>
                    </button>
                </div>    
            </div>
        </div>`

        container.appendChild(cards);

        // BOTON AGREGAR AL CARRITO:
        let btnAgregar = document.getElementById(`${id}`);
        // btnAgregar.onclick = () =>{

        // };
        
    });
};

TodosLosProd();



// DOM BOTONES "AGREGAR A CARRITO" DE CADA PRODUCTO
// let btnProd0 = document.querySelector("#prod0");
// let btnProd1 = document.querySelector("#prod1");
// let btnProd2 = document.querySelector("#prod2");
// let btnProd3 = document.querySelector("#prod3");
// let btnProd4 = document.querySelector("#prod4");
// let btnProd5 = document.querySelector("#prod5");
// let btnProd6 = document.querySelector("#prod6");
// let btnProd7 = document.querySelector("#prod7");
// let btnProd8 = document.querySelector("#prod8");
// let btnProd9 = document.querySelector("#prod9");
// let btnProd10 = document.querySelector("#prod10");
// let btnProd11 = document.querySelector("#prod11");
// let btnProd12 = document.querySelector("#prod12");
// let btnProd13 = document.querySelector("#prod13");


// SUMA DE CADA PRODUCTO QUE SE AGREGA AL CARRITO EN UN TOTAL.
function Total() { 
    let posicionArray = carrito.length-1;
    totalCarrito += (carrito[posicionArray].precio);
    return totalCarrito
}

// TOTAL PLASMADO EN HTML
function TotalCarritohtml() {
    total.innerHTML = (`Total: $${totalCarrito}`);
}    


// EVENTOS Y FUNCIONES DE BOTONES "AGREGAR A CARRITO":
// AL CLICKEAR EN "AGREGAR AL CARRITO" SE PUSHEA EL PRODUCTO CORRESPONDIENTE AL ARRAY "CARRITO", CADA PRODUCTO AGREGADO ES PLASMADO DENTRO DEL CARRITO DEL HTML MEDIANTE UN LI.
// SE CREA UN BOTON EL CUAL PROXIMAMENTE TENDRA LA FUNCION DE QUITAR EL ELEMENTO QUE SE DESEE DEL CARRITO (HTML).
// SE EJECUTAN LAS FUNCIONES "Total" LA CUAL VA SUMANDO EL PRECIO DE LOS PRODUCTOS AGREGADOS Y LA FUNCION "TotalCarritohtml" LA CUAL PLASMA EL TOTAL EN EL HTML.

// btnProd0.onclick = () =>{
//     carrito.push(productos[0]); 
//     let p = document.createElement("li");
//     p.className = "d-flex justify-content-between";
//     p.innerHTML = (`${productos[0].categoria} - ${productos[0].nombre} - $${productos[0].precio}
//     <button id="eliminar" class="m-1 border rounded d-flex align-items-center btn btn-danger text-dark">
//         <i class="fa-solid fa-trash-can"></i>
//     </button>`);
//     carritolist.appendChild(p);
//     Total();
//     TotalCarritohtml()
// }; 

// btnProd1.onclick = () =>{
//     carrito.push(productos[1]);
//     let p = document.createElement("li");
//     p.className = "d-flex justify-content-between";
//     p.innerHTML = (`${productos[1].categoria} - ${productos[1].nombre} - $${productos[1].precio}
//     <button id="eliminar" class="m-1 border rounded d-flex align-items-center btn btn-danger text-dark">
//         <i class="fa-solid fa-trash-can"></i>
//     </button>`);
//     carritolist.appendChild(p);
//     Total();
//     TotalCarritohtml()
// };

// btnProd2.onclick = () =>{carrito.push(productos[2]);
//     let p = document.createElement("li");
//     p.className = "d-flex justify-content-between";
//     p.innerHTML = (`${productos[2].categoria} - ${productos[2].nombre} - $${productos[2].precio}
//     <button id="eliminar" class="m-1 border rounded d-flex align-items-center btn btn-danger text-dark">
//         <i class="fa-solid fa-trash-can"></i>
//     </button>`);
//     carritolist.appendChild(p)
//     Total();
//     TotalCarritohtml()
// };

// btnProd3.onclick = () =>{
//     carrito.push(productos[3])
//     let p = document.createElement("li");
//     p.className = "d-flex justify-content-between";
//     p.innerHTML = (`${productos[3].categoria} - ${productos[3].nombre} - $${productos[3].precio}
//     <button id="eliminar" class="m-1 border rounded d-flex align-items-center btn btn-danger text-dark">
//         <i class="fa-solid fa-trash-can"></i>
//     </button>`);
//     carritolist.appendChild(p)
//     Total();
//     TotalCarritohtml()
// };     

// btnProd4.onclick = () =>{
//     carrito.push(productos[4])
//     let p = document.createElement("li");
//     p.className = "d-flex justify-content-between";
//     p.innerHTML = (`${productos[4].categoria} - ${productos[4].nombre} - $${productos[4].precio}
//     <button id="eliminar" class="m-1 border rounded d-flex align-items-center btn btn-danger text-dark">
//         <i class="fa-solid fa-trash-can"></i>
//     </button>`);
//     carritolist.appendChild(p)
//     Total();
//     TotalCarritohtml()
// };  

// btnProd5.onclick = () =>{
//     carrito.push(productos[5])
//     let p = document.createElement("li");
//     p.className = "d-flex justify-content-between";
//     p.innerHTML = (`${productos[5].categoria} - ${productos[5].nombre} - $${productos[5].precio}
//     <button id="eliminar" class="m-1 border rounded d-flex align-items-center btn btn-danger text-dark">
//         <i class="fa-solid fa-trash-can"></i>
//     </button>`);
//     carritolist.appendChild(p)
//     Total();
//     TotalCarritohtml()
// };  

// btnProd6.onclick = () =>{
//     carrito.push(productos[6])
//     let p = document.createElement("li");
//     p.className = "d-flex justify-content-between";
//     p.innerHTML = (`${productos[6].categoria} - ${productos[6].nombre} - $${productos[6].precio}
//     <button id="eliminar" class="m-1 border rounded d-flex align-items-center btn btn-danger text-dark">
//         <i class="fa-solid fa-trash-can"></i>
//     </button>`);
//     carritolist.appendChild(p)
//     Total();
//     TotalCarritohtml()
// };  

// btnProd7.onclick = () =>{
//     carrito.push(productos[7])
//     let p = document.createElement("li");
//     p.className = "d-flex justify-content-between";
//     p.innerHTML = (`${productos[7].categoria} - ${productos[7].nombre} - $${productos[7].precio}
//     <button id="eliminar" class="m-1 border rounded d-flex align-items-center btn btn-danger text-dark">
//         <i class="fa-solid fa-trash-can"></i>
//     </button>`);
//     carritolist.appendChild(p)
//     Total();
//     TotalCarritohtml()
// };  

// btnProd8.onclick = () =>{
//     carrito.push(productos[8])
//     let p = document.createElement("li");
//     p.className = "d-flex justify-content-between";
//     p.innerHTML = (`${productos[8].categoria} - ${productos[8].nombre} - $${productos[8].precio}
//     <button id="eliminar" class="m-1 border rounded d-flex align-items-center btn btn-danger text-dark">
//         <i class="fa-solid fa-trash-can"></i>
//     </button>`);
//     carritolist.appendChild(p)
//     Total();
//     TotalCarritohtml()
// };  

// btnProd9.onclick = () =>{
//     carrito.push(productos[9])
//     let p = document.createElement("li");
//     p.className = "d-flex justify-content-between";
//     p.innerHTML = (`${productos[9].categoria} - ${productos[9].nombre} - $${productos[9].precio}
//     <button id="eliminar" class="m-1 border rounded d-flex align-items-center btn btn-danger text-dark">
//         <i class="fa-solid fa-trash-can"></i>
//     </button>`);
//     carritolist.appendChild(p)
//     Total();
//     TotalCarritohtml()
// };  

// btnProd10.onclick = () =>{
//     carrito.push(productos[10])
//     let p = document.createElement("li");
//     p.className = "d-flex justify-content-between";
//     p.innerHTML = (`${productos[10].categoria} - ${productos[10].nombre} - $${productos[10].precio}
//     <button id="eliminar" class="m-1 border rounded d-flex align-items-center btn btn-danger text-dark">
//         <i class="fa-solid fa-trash-can"></i>
//     </button>`);
//     carritolist.appendChild(p)
//     Total();
//     TotalCarritohtml()
// }; 

// btnProd11.onclick = () =>{
//     carrito.push(productos[11])
//     let p = document.createElement("li");
//     p.className = "d-flex justify-content-between";
//     p.innerHTML = (`${productos[11].categoria} - ${productos[11].nombre} - $${productos[11].precio}
//     <button id="eliminar" class="m-1 border rounded d-flex align-items-center btn btn-danger text-dark">
//         <i class="fa-solid fa-trash-can"></i>
//     </button>`);
//     carritolist.appendChild(p)
//     Total();
//     TotalCarritohtml()
// }; 

// btnProd12.onclick = () =>{
//     carrito.push(productos[12])
//     let p = document.createElement("li");
//     p.className = "d-flex justify-content-between";
//     p.innerHTML = (`${productos[12].categoria} - ${productos[12].nombre} - $${productos[12].precio}
//     <button id="eliminar" class="m-1 border rounded d-flex align-items-center btn btn-danger text-dark">
//         <i class="fa-solid fa-trash-can"></i>
//     </button>`);
//     carritolist.appendChild(p)
//     Total();
//     TotalCarritohtml()
// }; 

// btnProd13.onclick = () =>{
//     carrito.push(productos[13])
//     let p = document.createElement("li");
//     p.className = "d-flex justify-content-between";
//     p.innerHTML = (`${productos[13].categoria} - ${productos[13].nombre} - $${productos[13].precio}
//     <button id="eliminar" class="m-1 border rounded d-flex align-items-center btn btn-danger text-dark">
//         <i class="fa-solid fa-trash-can"></i>
//     </button>`);
//     carritolist.appendChild(p)
//     Total();
//     TotalCarritohtml()
// };    



// SELECCION DE ENVIO - PENDIENTE DE INTERACCION CON EL HTML.

// let envio = [
//     {categoria: "envio", nombre: "palermo", precio: 200},
//     {categoria: "envio", nombre: "belgrano", precio: 300},
//     {categoria: "envio", nombre: "colegiales", precio: 300},
//     {categoria: "envio", nombre: "chacarita", precio: 350},
//     {categoria: "envio", nombre: "villa crezpo", precio: 300},
//     {categoria: "envio", nombre: "recoleta", precio: 300}
// ];

// let envioCliente = prompt("Ingrese la letra de la zona a la cual desea enviar su pedido:\nA - Palermo\nB - Belgrano\nC - Colegiales\nD - Chacarita\nE - Villa Crezpo\nF - Recoleta\nG - Retiraras el pedido en el local.\n- Por el momento disponemos de envios a dichas localidades, si la suya no se encuentra dentro de las mismas, debera retirar el pedido en el local.").toUpperCase();

// EnvioCosto ()

// function EnvioCosto() { 

//     while (envioCliente != Number) {

//         if (envioCliente == "A") {

//             carrito.push(envio[0]);
//             alert(`El costo de envio es de $${envio[0].precio}`);
//             break;

//         } else if (envioCliente == "B") {

//             carrito.push(envio[1]);;
//             alert(`El costo de envio es de $${envio[1].precio}`);
//             break;

//         } else if (envioCliente == "C") {

//             carrito.push(envio[2]);;
//             alert(`El costo de envio es de $${envio[2].precio}`);
//             break;

//         } else if (envioCliente == "D") {

//             carrito.push(envio[3]);;
//             alert(`El costo de envio es de $${envio[3].precio}`);
//             break;

//         } else if (envioCliente == "E") {

//             carrito.push(envio[4]);;
//             alert(`El costo de envio es de $${envio[4].precio}`);
//             break;
    
//         } else if (envioCliente == "F") {

//             carrito.push(envio[5]);;
//             alert(`El costo de envio es de $${envio[5].precio}`);
//             break;

//         } else if (envioCliente == "G") {

//             alert("Retiraras el pedido en el local");
//             carritolist.innerHTML = ("<li>Retira en local</li>");
//             break;

//         } else {

//             alert("Inserte una opcion valida");
//             envioCliente = prompt("Ingrese la letra de la zona a la cual desea enviar su pedido:\nA - Palermo\nB - Belgrano\nC - Colegiales\nD - Chacarita\nE - Villa Crezpo\nF - Recoleta\nG - Retiraras el pedido en el local.\n- Por el momento disponemos de envios a dichas localidades, si la suya no se encuentra dentro de las mismas, debera retirar el pedido en el local.").toUpperCase();
//         }

//     }

// }





// DESCUENTO POR CODIGO - PENDIENTE DE INTERACCION CON EL HTML.

// let descuento = prompt("¿Posee codigo de descuento?").toLowerCase();

// if (descuento == "si" ) {
//     CodigoDescuento()
// }

// function CodigoDescuento (){ 

//     let codigo = prompt("Ingrese el codigo\nX - si usted no posee un codigo.").toUpperCase();

//     while (codigo != "X") { 

//         if (codigo == "DREAMBURGER") {

//             totalCarrito = totalCarrito * 0.9; 
//             alert("El codigo ha sido aceptado y se ha aplicado un descuento del 10% sobre el total de su compra.")
//             let descuentoCod = document.createElement("li");
//             descuentoCod.innerHTML = (`Codigo "DREAMBURGER" -10%`);
//             carritolist.appendChild(descuentoCod);
//             break;
       
//         } else {

//             alert("Ingrese un codigo valido.")
//             codigo = prompt("Ingrese el codigo\nX - si usted no posee un codigo.").toUpperCase();

//         }
//     }        
//      return totalCarrito;
// }  
