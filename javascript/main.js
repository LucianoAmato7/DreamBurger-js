// Carrito de compra.

// DOM - LLAMADO AL LISTADO DEL CARRITO (ul) EN HTML (offcanvas).
let carritolist = document.querySelector("#listCarrito");

// DOM - LLAMADO AL (p) EN DONDE FIGURARA EL TOTAL DEL CARRITO.
let total = document.querySelector("#total");

// DOM -LLAMADO AL CONTENEDOR DONDE SE INYECTAN LOS PRODUCTOS EN FORMA DE CARDS.
let container = document.querySelector("#ContainerProd");

let btnComprar = document.querySelector("#comprar");

// CARRITO VACIO AL CUAL SE LE AGREGARAN PRODUCTOS.
let carrito = [];

// DOM LLAMA AL CONTADOR.
let contadorCarrito = document.querySelector("#nCarrito");

// LOCALSTORAGE LLAMA AL CARRITO SETEADO
document.addEventListener("DOMContentLoaded", () => {

    // EJECUTA LA LLAMADA A DATOS (PRODUCTOS) CON FETCH.
    ObtenerDatos();

    // OPERADOR LOGICO AND. 
    localStorage.getItem("carrito") && (carrito = JSON.parse(localStorage.getItem("carrito"))),  vistaCarrito();   

})

// LLAMADA A DATOS DE PRODUCTOS CON FETCH
const ObtenerDatos = () => {
    
    fetch("../javascript/products.json")

    .then(resp => resp.json())
    .then(productos => {

        // REPRESENTACION DE LOS PRODUCTOS EN HTML.
        productos.forEach((producto) => {
            
            const {id, nombre, categoria, precio, ingredientes, img: imagenDelProducto} = producto;      // DESESTRUCTURACION - ALIAS APLICADO.
            
            let cards = document.createElement("div");
            cards.setAttribute("class", "col d-flex justify-content-center");
            cards.innerHTML = `
            <div class="card shadow" style="width: 18rem;">
                <img src="${imagenDelProducto}" class="card-img-top animImg" alt="${categoria}, ${ingredientes}">
                <div class="card-body">
                    <h5 class="card-title">${nombre.toUpperCase()}</h5>
                    <div class="dropdown mt-3 mb-2 selectdeli">
                        <button class="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Ingredientes
                        </button>
                        <ul class="dropdown-menu p-2" aria-labelledby="dropdownMenuButton1">
                            <li>${ingredientes}</li>
                        </ul>
                        <p class="fs-5 mb-0">$${precio}</p>
                    </div>
                    <div class="selectdeli">
                        <button type="button" class="btn btn-warning" id="${id}">Agregar a carrito</button>
                    </div>    
                </div>
            </div>`;
                
            container.appendChild(cards);
            
            // BOTON AGREGAR AL CARRITO:
            let btnAgregar = document.getElementById(id);
            
            btnAgregar.addEventListener("click", () => {   
                
                agregarCarrito(id); 
                
                Toastify({          // FRAMEWORK - ALERTA CUANDO SE AGREGA UN PRODUCTO AL CARRITO.
                    
                    text: `¡Se ha agregado al carrito!`,
                    duration: 2000,
                    className: "alertaToast",           // LOS ESTILOS ESTAN EN EL SCSS "MENU".
                    avatar: `${imagenDelProducto}`,
                    gravity: "top",
                    offset: {
                        x: 0,
                        y: `8.5em`
                    },
                    
                }).showToast();
                
            });   
                
        });

        // AGREGAR AL CARRITO - BUSCA EL PRODUCTO QUE COINCIDA CON EL PARAMETRO MEDIANTE ID.
        const agregarCarrito = (prodId) => {      

            // SUMA DE CANTIDAD DE C/U DE LOS PRODUCTOS DENTRO DEL CARRITO.
            const existe = carrito.some(prod => prod.id === prodId)

            if(existe) {

                carrito.map(prod => {

                    if(prod.id === prodId) {
                        
                        prod.cantidad++;
                    } 

                })

            }else {
                
                const itemId = productos.find((producto) => producto.id === prodId);
                carrito.push(itemId);

            }

            vistaCarrito();
        };

    })
        
    .catch(error => console.log(error))

    .finally(() => {
        
        Toastify({          // FRAMEWORK - ALERTA CUANDO SE CARGANE EXITOSAMENTE LOS DATOS.
            
            text: `Datos cargados con exito`,
            duration: 1000,
            className: "alertaToastDatos",           // LOS ESTILOS ESTAN EN EL SCSS "MENU".
            position: "center",
        
        }).showToast();

    });

};

// FUNCION QUE MUESTRA LA CANTIDAD (N) DEL MISMO PRODUCTO EN CARRITO (DENTRO DE CADA CARD) - A IMPLEMENTAR

// CODIGO DE PRUEBA PARA LA CANTIDAD DE PRODUCTOS EN CARRITO DE CADA CARD
// const CantCardCarrito = () => {

//     carrito.forEach((producto) => {

//         cantUDentroCarrito.innerHTML += `${producto.cantidad}`; (ESE BOTON NO SIRVE POR QUE NO DEFINE CADA UNO DE LOS PRODUCTOS)
//     })
    
// }
// CantCardCarrito()



//BTN ELIMINAR PRODUCTO DEL CARRITO, BUSCA Y ELIMINA MEDIANTE ID
const eliminar = (idProd) => {

    const item = carrito.find((producto) => producto.id === idProd);
    const indice = carrito.indexOf(item);
    
    // CONDICION PARA QUE ELIMINE DE A 1 UNIDAD DEL PRODUCTO DENTRO DEL CARRITO, SI SOLO HAY 1 UNIDAD ELIMINA EL PRODUCTO E IGUALA LA CANTIDAD AL DEFAULT(1).
    (item.cantidad > 1) ? item.cantidad-- : (carrito.splice(indice, 1), item.cantidad = 1)

    vistaCarrito();
    return item
}

// AGREGA PRODUCTOS AL CARRITO DEL HTML (offcanvas) - ACTUALIZA EL CARRITO CON LOS PRODUCTOS NUEVOS.
const vistaCarrito = () => {

    // BORRO EL CONTENIDO PARA LUEGO ACTUALIZARLO CON LOS PRODUCTOS NUEVOS.
    carritolist.innerHTML= ""

    // RECORRO EL CARRITO (ARRAY) Y POR CADA PRODUCTO CREO UN LI CON UN BOTON PARA ELIMINARLO (HTML - offcanvas)
    carrito.forEach((producto) => {

        const {id, cantidad, nombre, precio, img: imagenDelProducto} = producto;           // DESESTRUCTURACION - ALIAS APLICADO.
        const listado = document.createElement("li");
        listado.setAttribute("class", "d-flex justify-content-between my-2 align-items-center");
        listado.innerHTML = `
        <span class="pe-2 border-end border-1 border-dark">${cantidad}u.</span>
        <img src="${imagenDelProducto}" class="w-25" alt="producto"> ${nombre} - $${precio}
        <button onclick="eliminar(${id})" class="p-2 border rounded d-flex align-items-center btn btn-danger text-dark">
            <i class="fa-solid fa-trash-can"></i>
        </button>`;
        carritolist.appendChild(listado)

    })
    
    // LOCALSTORAGE (GUARDA EL CARRITO)
    localStorage.setItem("carrito", JSON.stringify(carrito));


    // SOLO SI HAY PRODUCTOS DENTRO DEL CARRITO SE CREA LA NOTIFICACION CON EL NUM DE PRODUCTOS DEL CARRITO EN EL NAV.
    // SI NO HAY PRODUCTOS LA OCULTA Y EJECUTA LA FUNCION QUE CREA UN LI NOTIFICANDO QUE NO HAY PRODUCTOS EN EL CARRITO.
    carrito.length > 0 ? (                              // OPERADOR TERNARIO
        contadorCarrito.style.visibility = "visible",
        contadorCarrito.innerHTML = carrito.length
    ) : (
        contadorCarrito.style.visibility = "hidden",
        CarritoSinProd()
    );

    // SUMA TOTAL DE LOS PRODUCTOS DEL CARRITO.
    total.innerHTML = carrito.reduce((acum, prod) => acum + prod.precio * prod.cantidad, 0);  
};

//FUNCION QUE NOTIFICA QUE NO HAY PRODUCTOS DENTRO DEL CARRITO.
function CarritoSinProd () { 
    let alertCarritoVacio = document.createElement("li")
    alertCarritoVacio.setAttribute("class", "fs-6 d-flex justify-content-center")
    alertCarritoVacio.innerHTML = "¡ AUN NO HA AGREGADO PRODUCTOS AL CARRITO !"
    carritolist.appendChild(alertCarritoVacio)
};    

// ACCION DE BOTON "COMPRAR"
btnComprar.addEventListener("click", () => {

    carrito.length > 0 ? (                          // OPERADOR TERNARIO

        Swal.fire({                                 // FRAMEWORK - ALERTA AL PRESIONAR EL BOTON "PEDIR"
            title: '¡Muchas gracias por tu compra!',
            text: 'Recibiras un email con la confirmacion del pedido',
            icon: 'success',
            footer: 'Ante cualquier duda comuniquese a nuestro numero de wpp'
            

        }),
        
        carrito = [],
        vistaCarrito()

    ) : (  

        Swal.fire({                                         
            title: '¡No ha agregado productos al carrito!',
            icon: 'warning',
            footer: 'Ante cualquier duda comuniquese a nuestro numero de wpp'
            

        })

    )  

}) 












// A IMPLEMENTAR:

// Que funcione la cantidad del mismo producto (N), ubicado dentro de cada card, en el carrito:
//<button class="w-25 bg-warning bg-opacity-25 border rounded d-flex justify-content-around align-items-center" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling">
//<i class="fa-solid fa-cart-shopping text-warning"></i>
//</button> 

// Poder filtrar por categoría. 

// Pedirle más datos al usuario para que el pedido sea más completo (envío, dirección, número de teléfono y numero de mail) (Que se guarden en el localstorage) 

// Opción de envío (zona) que se agregue en el carrito con precio. 

// Descuento por código. 

// Modo Oscuro (Que se guarde en el LocalStorage). 




// SELECCION DE ENVIO - A IMPLEMENTAR.

// let envio = [
//     {categoria: "envio", nombre: "palermo", precio: 200},
//     {categoria: "envio", nombre: "belgrano", precio: 300},
//     {categoria: "envio", nombre: "colegiales", precio: 300},
//     {categoria: "envio", nombre: "chacarita", precio: 350},
//     {categoria: "envio", nombre: "villa crezpo", precio: 300},
//     {categoria: "envio", nombre: "recoleta", precio: 300}
// ];