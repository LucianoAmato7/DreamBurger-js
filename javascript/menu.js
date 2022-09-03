// Carrito de compra.

// DOM - LLAMADO AL LISTADO DEL CARRITO (ul) EN HTML (offcanvas).
let carritolist = document.querySelector("#listCarrito");

// DOM - LLAMADO AL (p) EN DONDE FIGURARA EL TOTAL DEL CARRITO.
let total = document.querySelector("#total");

// DOM -LLAMADO AL CONTENEDOR DONDE SE INYECTAN LOS PRODUCTOS EN FORMA DE CARDS.
let container = document.querySelector("#ContainerProd");

// BOTON CONTINUAR (offCanvas)
let btnContCompr = document.querySelector("#contCompra");

// CARRITO VACIO AL CUAL SE LE AGREGARAN PRODUCTOS.
let carrito = [];

// DATOS DE LAS COMPRAS.
let compras = [];

// DOM LLAMA AL CONTADOR.
let contadorCarrito = document.querySelector("#nCarrito");

// LOCALSTORAGE LLAMA AL CARRITO SETEADO
document.addEventListener("DOMContentLoaded", () => {

    // EJECUTA LA LLAMADA A DATOS (PRODUCTOS) CON FETCH.
    ObtenerDatos();

    // OPERADOR LOGICO AND. 
    localStorage.getItem("carrito") && (carrito = JSON.parse(localStorage.getItem("carrito")));  
    localStorage.getItem("compras") && (compras = JSON.parse(localStorage.getItem("compras"))),  
    vistaCarrito();  

})

// LLAMADA A DATOS DE PRODUCTOS CON FETCH DE MANERA RELATIVA.
const ObtenerDatos = async () => {

    try { 

        let resp = await fetch("../javascript/products.json");
        let productos = await resp.json();
        
        // REPRESENTACION DE LOS PRODUCTOS EN HTML.
        productos.forEach((producto) => {
            
            const {id, nombre, categoria, precio, ingredientes, img: imagenDelProducto} = producto;      // DESESTRUCTURACION - ALIAS APLICADO EN "IMG".
            
            let cards = document.createElement("div");
            cards.setAttribute("class", "col d-flex justify-content-center");
            cards.setAttribute("data-aos", "zoom-in");  //ATRIBUTO PARA ANIMACION: AOS "Animate On Scroll Library" / APLICANDOSE DIRECTAMENTE EN EL INNERHTML GENERA UN ERROR QUE IMPIDE QUE SEAN VISIBLES LAS CARDS.
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
                        <p class="fs-4 mb-0">$${precio}</p>
                    </div>
                    <div class="selectdeli">
                        <button type="button" class="btn btn-warning" id="${id}">Agregar a carrito</button>
                        <button class="w-25 bg-warning bg-opacity-25 border rounded d-flex justify-content-around align-items-center" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling">
                            <i class="fa-solid fa-cart-shopping text-warning"></i>
                            <span id="${id}-">0</span>
                        </button>
                    </div>    
                </div>
            </div>`;

            container.appendChild(cards);


            // BOTON AGREGAR AL CARRITO:
            let btnAgregar = document.getElementById(id);
            
            btnAgregar.addEventListener("click", () => {   
                
                //FUNCION EN LINEA 109.
                agregarCarrito(id); 

                //FUNCION EN LINEA 173.
                Cant(id);

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

    } catch (error) {
        
        console.log(error);
        
    } finally {
        
        Toastify({          // FRAMEWORK - ALERTA CUANDO SE CARGANE EXITOSAMENTE LOS DATOS.
            
            text: `Datos cargados con exito`,
            duration: 1000,
            className: "alertaToastDatos",           // LOS ESTILOS ESTAN EN EL SCSS "MENU".
            position: "center",
            
        }).showToast();
    }
    
};


//FUNCION QUE AGREGA EL Nº DE CANTIDAD DEL PRODUCTO EN CARRITO, EN CADA CARD (UBICADO EN LA ESQUINA INFERIOR DERECHA DE CADA CARD)
//SE EJECUTA AL AGREGAR Y QUITAR PRODUCTOS AL CARRITO.
const Cant = (id) => {

    const existe = carrito.some(prod => prod.id === id)
                
    let btnCant_ = document.getElementById(`${id}-`)

    if (existe) {
        
        carrito.forEach(prod => {
            
            btnCant_.innerText = prod.cantidad;

        })

    } else {

        btnCant_.innerText = 0;

    }    

}


//BTN ELIMINAR PRODUCTO DEL CARRITO, BUSCA Y ELIMINA MEDIANTE ID
const eliminar = (idProd) => {

    const item = carrito.find((producto) => producto.id === idProd);
    const indice = carrito.indexOf(item);
    
    // CONDICION PARA QUE ELIMINE DE A 1 UNIDAD DEL PRODUCTO DENTRO DEL CARRITO, SI SOLO HAY 1 UNIDAD ELIMINA EL PRODUCTO E IGUALA LA CANTIDAD AL DEFAULT(1).
    (item.cantidad > 1) ? item.cantidad-- : (carrito.splice(indice, 1), item.cantidad = 1)

    //funcion en linea 173.
    Cant(idProd);

    vistaCarrito();
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



// ACCION DE BOTON "CONTINUAR CON LA COMPRA"
btnContCompr.addEventListener("click", (e) => {
    
    e.preventDefault();

    //AQUI SE INYECTARA UN FORMULARIO PARA LA COMPRA.
    const contOffcanvas = document.getElementById("contenedorOffCanvas");

    //SE CREA UN FORM DENTRO DEL CARRITO (SOLO SI HAY PRODUCTOS EN EL CARRITO (CONDICION MAS ABAJO))
    const formCompra = document.createElement("form");
    formCompra.setAttribute("class", "p-2 bg-warning bg-opacity-25 mt-2");
    formCompra.innerHTML = `
    <div class="mb-3">
        <label for="nombreCompleto" class="form-label">Nombre y Apellido</label>
        <input type="text" class="form-control" placeholder="Ingrese su nombre completo" id="nombre" required>
    </div>
    <div class="mb-3">
        <label for="email" class="form-label">Correo electrónico</label>
        <input type="email" class="form-control" placeholder="Ingrese su correo electrónico" id="email" required>
    </div>
    <div class="mb-3">
        <label for="numero" class="form-label">Número de celular</label>
        <input type="number" class="form-control" placeholder="11 1234-5678" id="numero" required>
    </div>
    <div class="mb-3">
        <label for="select-envio" class="form-label">Tipo de envio</label>
        <select class="form-select" aria-label="Default select example" id="select-envio" required>
            <option value="">-</option>
            <option value="retiroLocal">Retiro en local</option>
            <option value="envio">Deseo que me lo envíen</option>
        </select>
    </div>
    <div class="mb-3">
        <label for="direccion" class="form-label">Dirección de envio</label>
        <input type="text" class="form-control" placeholder="(Solo si desea que se lo envíen)" id="direccion">
    </div>
    <div class="mb-3">
        <label for="localidad" class="form-label">Localidad de envio</label>
        <input type="text" class="form-control" placeholder="(Solo si desea que se lo envíen)" id="localidad">
    </div>
    <div class="form-floating mb-3">
        <textarea class="form-control" placeholder="Comentario adicional:" id="cajaDeConsulta"></textarea>
        <label for="cajaDeConsulta">Comentario adicional:</label>
    </div>
    <div class="d-flex justify-content-between">
        <button type="submit" class="fs-3 text-align-center btn btn-warning mt-3 shadow" id="comprar">COMPRAR</button>
        <button type="reset" class="fs-3 text-align-center btn btn-warning mt-3 shadow">RESETEAR</button>
    </div>  
    `;
    

    //SI EL CARRITO TIENE PRODUCTOS:
    carrito.length > 0 ? (                          // OPERADOR TERNARIO

        //BOTON "CONTINUAR CON LA COMPRA" AHORA DICE "COMPLETAR FORMULARIO".
        btnContCompr.innerHTML = "COMPLETAR FORMULARIO",

        //SE DESHABILITA PARA PREVENIR LA CREACION DE MAS FORMULARIOS.
        btnContCompr.setAttribute("disabled", ""),
    
        //SE INYECTA EL FORMULARIO.
        contOffcanvas.appendChild(formCompra),

        //FUNCIONALIDADES QUE SE EJECUTAN AL CLICKEAR EL BOTON "COMPRAR" AL FINAL DEL FORMULARIO DE COMPRA
        EtapaFinalCompra()
    

    ) : (  

        Swal.fire({          //SWEETALERT2
            title: '¡No ha agregado productos al carrito!',
            icon: 'warning',
            footer: 'Ante cualquier duda comuniquese a nuestro numero de wpp',
            customClass: {confirmButton: 'confirmBtn'}, 
        })
        
    );

    function EtapaFinalCompra () {

        //BTN "COMPRAR"
        const comprarBtn = document.getElementById("comprar");

        comprarBtn.addEventListener("click", (e) => {
            
            e.preventDefault();


            //LLAMADA A INPUTS DEL FORM:
            let nombreForm = document.getElementById("nombre").value;
            let emailForm = document.getElementById("email").value;
            let numeroForm = document.getElementById("numero").value;
            let envioForm = document.getElementById("select-envio").value;
            let direccionForm = document.getElementById("direccion").value;
            let localidadForm = document.getElementById("localidad").value;
            let consultaForm = document.getElementById("cajaDeConsulta").value;
            let fecha = new Date();

            class NewCompra {
                constructor(fecha, nombre, email, numero, tipoEnvio, direccion, localidad, comentario, productos) {
                    this.fecha = fecha;
                    this.nombre = nombre;
                    this.email = email;
                    this.numero = numero;
                    this.tipoEnvio = tipoEnvio;
                    this.direccion = direccion;
                    this.localidad = localidad;
                    this.comentario = comentario;
                    this.productos = productos;
                }
            }
            
            const NuevaCompra = new NewCompra(
                fecha.toLocaleString(),
                nombreForm,
                emailForm,
                numeroForm,
                envioForm,
                direccionForm,
                localidadForm,
                consultaForm,
                [carrito]
            )  
            
            //FUNCION QUE PUSHEA EL OBJETO CREADO CON LOS DATOS DE LA COMPRA EN EL ARRAY "COMPRAS".
            const enviarDatosCompra = () => {

                compras.push(NuevaCompra);
                localStorage.setItem("compras", JSON.stringify(compras));

            } 



            //CONFIRMO OTRA VEZ QUE EL CARRITO TENGA PRODUCTOS, YA QUE SE PUEDEN ELIMINAR AUNQUE EL FORM YA HAYA SIDO INYECTADO.
            carrito.length > 0 ? (          // OPERADOR TERNARIO

                //POSTEA LOS DATOS MEDIANTE FETCH AL JSON "COMPRAS"
                enviarDatosCompra(),
                    
                //SE RESTABLECEN LAS CANTIDADES A 1 (predeterminado en array productos) DEL ARRAY CARRITO.
                carrito.forEach((prod) => {prod.cantidad = 1}),

                //SE VACIA EL CARRITO. 
                carrito = [],

                //SE ACTUALIZA EL DOM DEL CARRITO.
                vistaCarrito(),
            
                //SE ELIMINA EL FORMULARIO DE COMPRA.
                contOffcanvas.removeChild(formCompra),

                //EL BTN PARA ABRIR EL FORMULARIO VUELVE A DECIR:
                btnContCompr.innerHTML = "CONTINUAR",

                //SE VUELVE A ACTIVAR EL BTN PARA INYECTAR FORMULARIO.
                btnContCompr.removeAttribute("disabled", ""),

            
                Swal.fire({                                 //SWEETALERT2
                    title: '¡Muchas gracias por tu compra!',
                    text: 'Recibiras un email con la confirmacion del pedido',
                    icon: 'success',
                    footer: 'Ante cualquier duda comuniquese a nuestro numero de wpp',
                    customClass: {confirmButton: 'confirmBtn'}, 
                })

            ) : (

                Swal.fire({          //SWEETALERT2
                    title: '¡No ha agregado productos al carrito!',
                    icon: 'warning',
                    footer: 'Ante cualquier duda comuniquese a nuestro numero de wpp',
                    customClass: {confirmButton: 'confirmBtn'}, 
                })
            );

        });

    };

}); 
