// Carrito de compra.

//funcionalidades:
// - Al ingresar le pedira su nombre, si el nombre no esta registrado lo registra con nombre y fecha actual. Si la persona que entra es "luciano" (administrador), el mismo podra filtrar, dentro del registro, por nombre y/o fecha.
// Sistema de compra: se pueden elegir todos los productos que se quieran, al finalizar la seleccion, ingresando "x" pasa a la siguiente etapa.
// Envios: El usuario puede elegir, dentro de ciertas localidades disponibles, si desea que se lo envien p si lo retira en el local, cada envio tiene un precio y se agrega al carrito al igual que los productos.
// Si el usuario es nuevo en el sitio (no esta registrado) en el mensaje de bienvenida se le brindara un codigo de descuento del 10%, el cual luego del proceso de compra podra aplicar para efectuar el descuento.

// DOM - LLAMADO A NODOS
let carritolist = document.querySelector("#listCarrito");
let total = document.querySelector("#total");



// REGISTRO DE USUARIOS comienzo
let registroUsuarios = [{usuario: "luciano", fecha: "17/7/2022"}];

const fechaActual = new Date();

let nombreUsuario = prompt("Ingrese su nombre").toLowerCase();

UsuarioNuevo()

function UsuarioNuevo() {
    
    do { 
        if (nombreUsuario == ""){

            alert("Por favor, ingrese un nombre valido.")
            nombreUsuario = prompt("Ingrese su nombre").toLowerCase();

        }

    }while (nombreUsuario == "") { 

        for(let u in registroUsuarios)
        
        if (registroUsuarios[u].usuario.includes(nombreUsuario) == false) {

            console.log(`${nombreUsuario} ingreso al sitio`);
            console.log(`Esta registrado? ${registroUsuarios.includes(nombreUsuario)}`);
            registroUsuarios.push({usuario: nombreUsuario , fecha: (fechaActual.toLocaleDateString())});
            console.log(`${nombreUsuario} se ha ingresado al sistema.`);
            console.log(`Se le ha brindado al usuario: ${nombreUsuario} el codigo de descuento "DREAMBURGER" correspondiente a un 10% de descuento por ser su primera vez en el sitio.`)
            alert(`Bienvenido/a ${nombreUsuario}\nPor ser nuevo en el sitio se le brinda el codigo "DREAMBURGER" correspondiente a un 10% de descuento en tu proxima compra. Dicho codigo se le pedira al finalizar la compra.`)

        } else if (registroUsuarios[u].usuario.includes(nombreUsuario) == true) {
            console.log(`${nombreUsuario} ingreso al sitio`);
            console.log(`${nombreUsuario} ya ha ingresado con anterioridad.`)
            alert(`Bienvenido/a ${nombreUsuario}`)
        }
    }  
    return registroUsuarios;  
}
console.log(registroUsuarios);
// REGISTRO DE USUARIOS fin

// FILTRO DE USUARIOS (solo lo usara el administrador cuando lo necesite)
if (nombreUsuario == "luciano") { 

    // POR NOMBRE
    let buscarNombre = prompt("Ingrese nombre de usuario a buscar\nx - salir").toLowerCase();

    while (nombreUsuario != "x") {

        if (nombreUsuario != "") { 

            let filtroNombre = registroUsuarios.filter(el => el.usuario == buscarNombre);
            console.log(filtroNombre)
            break;

        } else {
            alert("Inserte un valor valido");
            buscarNombre = prompt("Ingrese nombre de usuario a buscar\nx - salir").toLowerCase();
        }
    }   

    // POR FECHA
    let buscarFecha = prompt("Ingrese la fecha a buscar\nx - salir").toLowerCase();

    while (nombreUsuario != "x") {

        if (nombreUsuario != "") { 

            let filtroFecha = registroUsuarios.filter(el => el.fecha == buscarFecha);
            console.log(filtroFecha)
            break;

        } else {
            alert("Inserte un valor valido");
            buscarFecha = prompt("Ingrese la fecha a buscar\nx - salir").toLowerCase();
        }
    }    
   
}

// SELECCION DE PRODUCTOS comienzo
let productos = [
    {nombre: "simple", categoria: "hamburguesa", precio: 280},
    {nombre: "doble", categoria: "hamburguesa", precio: 350},
    {nombre: "tinyDream", categoria: "hamburguesa", precio: 270},
    {nombre: "extraCheese", categoria: "hamburguesa", precio: 350},
    {nombre: "completa", categoria: "hamburguesa", precio: 500},
    {nombre: "bigDream", categoria: "hamburguesa", precio: 430},
    {nombre: "dreamChoise", categoria: "hamburguesa", precio: 580},
    {nombre: "theChicken", categoria: "hamburguesa", precio: 270},
    {nombre: "veganDream", categoria: "hamburguesa", precio: 380},
    {nombre: "papasFritas", categoria: "acompaniamiento", precio: 120},
    {nombre: "ensalada", categoria: "acompaniamiento", precio: 200},
    {nombre: "cocaCola", categoria: "bebida", precio: 130},
    {nombre: "cocaColaZero", categoria: "bebida", precio: 130},
    {nombre: "agua", categoria: "bebida", precio: 80}
];

let carrito = [];

let totalCarrito = 0;

let productoSeleccionado = prompt("Seleccione los productos que quiera:\nUno a la vez.\nAl finalizar con la seleccion ingrese X .\nHAMBURGUESAS:\nA - Simple $280\nB - Doble $350\nC - TinyDream $270\nD - ExtraCheese $350\nE - Completa $500\nF - BigDream $430\nG - DreamChoise $580\nH - TheChicken $270\nI - VeganDream $380\nACOMPANIAMIENTOS:\nJ - PapasFritas $120\nK - Ensalada $200\nBEBIDAS:\nL - CocaCola $130\nM - CocaColaZero $130\nN - Agua $80\nX - para terminar la selección.").toLocaleUpperCase();

CompraCarrito()

function CompraCarrito() {

    do { 
        if ((productoSeleccionado != "") && (productoSeleccionado == "A")){

            carrito.push(productos[0]);
            productoSeleccionado = prompt("Seleccione los productos que quiera:\nUno a la vez.\nAl finalizar con la seleccion ingrese X .\nHAMBURGUESAS:\nA - Simple $280\nB - Doble $350\nC - TinyDream $270\nD - ExtraCheese $350\nE - Completa $500\nF - BigDream $430\nG - DreamChoise $580\nH - TheChicken $270\nI - VeganDream $380\nACOMPANIAMIENTOS:\nJ - PapasFritas $120\nK - Ensalada $200\nBEBIDAS:\nL - CocaCola $130\nM - CocaColaZero $130\nN - Agua $80\nX - para terminar la selección.").toLocaleUpperCase();

        } else if ((productoSeleccionado != "") && (productoSeleccionado == "B")) {

            carrito.push(productos[1]);
            productoSeleccionado = prompt("Seleccione los productos que quiera:\nUno a la vez.\nAl finalizar con la seleccion ingrese X .\nHAMBURGUESAS:\nA - Simple $280\nB - Doble $350\nC - TinyDream $270\nD - ExtraCheese $350\nE - Completa $500\nF - BigDream $430\nG - DreamChoise $580\nH - TheChicken $270\nI - VeganDream $380\nACOMPANIAMIENTOS:\nJ - PapasFritas $120\nK - Ensalada $200\nBEBIDAS:\nL - CocaCola $130\nM - CocaColaZero $130\nN - Agua $80\nX - para terminar la selección.").toLocaleUpperCase();

        } else if ((productoSeleccionado != "") && (productoSeleccionado == "C")) {

            carrito.push(productos[2]);
            productoSeleccionado = prompt("Seleccione los productos que quiera:\nUno a la vez.\nAl finalizar con la seleccion ingrese X .\nHAMBURGUESAS:\nA - Simple $280\nB - Doble $350\nC - TinyDream $270\nD - ExtraCheese $350\nE - Completa $500\nF - BigDream $430\nG - DreamChoise $580\nH - TheChicken $270\nI - VeganDream $380\nACOMPANIAMIENTOS:\nJ - PapasFritas $120\nK - Ensalada $200\nBEBIDAS:\nL - CocaCola $130\nM - CocaColaZero $130\nN - Agua $80\nX - para terminar la selección.").toLocaleUpperCase();

        } else if ((productoSeleccionado != "") && (productoSeleccionado == "D")) {

            carrito.push(productos[3]);
            productoSeleccionado = prompt("Seleccione los productos que quiera:\nUno a la vez.\nAl finalizar con la seleccion ingrese X .\nHAMBURGUESAS:\nA - Simple $280\nB - Doble $350\nC - TinyDream $270\nD - ExtraCheese $350\nE - Completa $500\nF - BigDream $430\nG - DreamChoise $580\nH - TheChicken $270\nI - VeganDream $380\nACOMPANIAMIENTOS:\nJ - PapasFritas $120\nK - Ensalada $200\nBEBIDAS:\nL - CocaCola $130\nM - CocaColaZero $130\nN - Agua $80\nX - para terminar la selección.").toLocaleUpperCase();

        } else if ((productoSeleccionado != "") && (productoSeleccionado == "E")) {

            carrito.push(productos[4]);
            productoSeleccionado = prompt("Seleccione los productos que quiera:\nUno a la vez.\nAl finalizar con la seleccion ingrese X .\nHAMBURGUESAS:\nA - Simple $280\nB - Doble $350\nC - TinyDream $270\nD - ExtraCheese $350\nE - Completa $500\nF - BigDream $430\nG - DreamChoise $580\nH - TheChicken $270\nI - VeganDream $380\nACOMPANIAMIENTOS:\nJ - PapasFritas $120\nK - Ensalada $200\nBEBIDAS:\nL - CocaCola $130\nM - CocaColaZero $130\nN - Agua $80\nX - para terminar la selección.").toLocaleUpperCase();

        } else if ((productoSeleccionado != "") && (productoSeleccionado == "F")) {

            carrito.push(productos[5]);
            productoSeleccionado = prompt("Seleccione los productos que quiera:\nUno a la vez.\nAl finalizar con la seleccion ingrese X .\nHAMBURGUESAS:\nA - Simple $280\nB - Doble $350\nC - TinyDream $270\nD - ExtraCheese $350\nE - Completa $500\nF - BigDream $430\nG - DreamChoise $580\nH - TheChicken $270\nI - VeganDream $380\nACOMPANIAMIENTOS:\nJ - PapasFritas $120\nK - Ensalada $200\nBEBIDAS:\nL - CocaCola $130\nM - CocaColaZero $130\nN - Agua $80\nX - para terminar la selección.").toLocaleUpperCase();

        } else if ((productoSeleccionado != "") && (productoSeleccionado == "G")) {

            carrito.push(productos[6]);
            productoSeleccionado = prompt("Seleccione los productos que quiera:\nUno a la vez.\nAl finalizar con la seleccion ingrese X .\nHAMBURGUESAS:\nA - Simple $280\nB - Doble $350\nC - TinyDream $270\nD - ExtraCheese $350\nE - Completa $500\nF - BigDream $430\nG - DreamChoise $580\nH - TheChicken $270\nI - VeganDream $380\nACOMPANIAMIENTOS:\nJ - PapasFritas $120\nK - Ensalada $200\nBEBIDAS:\nL - CocaCola $130\nM - CocaColaZero $130\nN - Agua $80\nX - para terminar la selección.").toLocaleUpperCase();

        } else if ((productoSeleccionado != "") && (productoSeleccionado == "H")) {

            carrito.push(productos[7]);
            productoSeleccionado = prompt("Seleccione los productos que quiera:\nUno a la vez.\nAl finalizar con la seleccion ingrese X .\nHAMBURGUESAS:\nA - Simple $280\nB - Doble $350\nC - TinyDream $270\nD - ExtraCheese $350\nE - Completa $500\nF - BigDream $430\nG - DreamChoise $580\nH - TheChicken $270\nI - VeganDream $380\nACOMPANIAMIENTOS:\nJ - PapasFritas $120\nK - Ensalada $200\nBEBIDAS:\nL - CocaCola $130\nM - CocaColaZero $130\nN - Agua $80\nX - para terminar la selección.").toLocaleUpperCase();

        } else if ((productoSeleccionado != "") && (productoSeleccionado == "I")) {

            carrito.push(productos[8]);
            productoSeleccionado = prompt("Seleccione los productos que quiera:\nUno a la vez.\nAl finalizar con la seleccion ingrese X .\nHAMBURGUESAS:\nA - Simple $280\nB - Doble $350\nC - TinyDream $270\nD - ExtraCheese $350\nE - Completa $500\nF - BigDream $430\nG - DreamChoise $580\nH - TheChicken $270\nI - VeganDream $380\nACOMPANIAMIENTOS:\nJ - PapasFritas $120\nK - Ensalada $200\nBEBIDAS:\nL - CocaCola $130\nM - CocaColaZero $130\nN - Agua $80\nX - para terminar la selección.").toLocaleUpperCase();

        } else if ((productoSeleccionado != "") && (productoSeleccionado == "J")) {

            carrito.push(productos[9]);
            productoSeleccionado = prompt("Seleccione los productos que quiera:\nUno a la vez.\nAl finalizar con la seleccion ingrese X .\nHAMBURGUESAS:\nA - Simple $280\nB - Doble $350\nC - TinyDream $270\nD - ExtraCheese $350\nE - Completa $500\nF - BigDream $430\nG - DreamChoise $580\nH - TheChicken $270\nI - VeganDream $380\nACOMPANIAMIENTOS:\nJ - PapasFritas $120\nK - Ensalada $200\nBEBIDAS:\nL - CocaCola $130\nM - CocaColaZero $130\nN - Agua $80\nX - para terminar la selección.").toLocaleUpperCase();

        } else if ((productoSeleccionado != "") && (productoSeleccionado == "K")) {

            carrito.push(productos[10]);
            productoSeleccionado = prompt("Seleccione los productos que quiera:\nUno a la vez.\nAl finalizar con la seleccion ingrese X .\nHAMBURGUESAS:\nA - Simple $280\nB - Doble $350\nC - TinyDream $270\nD - ExtraCheese $350\nE - Completa $500\nF - BigDream $430\nG - DreamChoise $580\nH - TheChicken $270\nI - VeganDream $380\nACOMPANIAMIENTOS:\nJ - PapasFritas $120\nK - Ensalada $200\nBEBIDAS:\nL - CocaCola $130\nM - CocaColaZero $130\nN - Agua $80\nX - para terminar la selección.").toLocaleUpperCase();

        } else if ((productoSeleccionado != "") && (productoSeleccionado == "L")) {

            carrito.push(productos[11]);
            productoSeleccionado = prompt("Seleccione los productos que quiera:\nUno a la vez.\nAl finalizar con la seleccion ingrese X .\nHAMBURGUESAS:\nA - Simple $280\nB - Doble $350\nC - TinyDream $270\nD - ExtraCheese $350\nE - Completa $500\nF - BigDream $430\nG - DreamChoise $580\nH - TheChicken $270\nI - VeganDream $380\nACOMPANIAMIENTOS:\nJ - PapasFritas $120\nK - Ensalada $200\nBEBIDAS:\nL - CocaCola $130\nM - CocaColaZero $130\nN - Agua $80\nX - para terminar la selección.").toLocaleUpperCase();

        } else if ((productoSeleccionado != "") && (productoSeleccionado == "M")) {

            carrito.push(productos[12]);
            productoSeleccionado = prompt("Seleccione los productos que quiera:\nUno a la vez.\nAl finalizar con la seleccion ingrese X .\nHAMBURGUESAS:\nA - Simple $280\nB - Doble $350\nC - TinyDream $270\nD - ExtraCheese $350\nE - Completa $500\nF - BigDream $430\nG - DreamChoise $580\nH - TheChicken $270\nI - VeganDream $380\nACOMPANIAMIENTOS:\nJ - PapasFritas $120\nK - Ensalada $200\nBEBIDAS:\nL - CocaCola $130\nM - CocaColaZero $130\nN - Agua $80\nX - para terminar la selección.").toLocaleUpperCase();

        } else if ((productoSeleccionado != "") && (productoSeleccionado == "N")) {

            carrito.push(productos[13]);
            productoSeleccionado = prompt("Seleccione los productos que quiera:\nUno a la vez.\nAl finalizar con la seleccion ingrese X .\nHAMBURGUESAS:\nA - Simple $280\nB - Doble $350\nC - TinyDream $270\nD - ExtraCheese $350\nE - Completa $500\nF - BigDream $430\nG - DreamChoise $580\nH - TheChicken $270\nI - VeganDream $380\nACOMPANIAMIENTOS:\nJ - PapasFritas $120\nK - Ensalada $200\nBEBIDAS:\nL - CocaCola $130\nM - CocaColaZero $130\nN - Agua $80\nX - para terminar la selección.").toLocaleUpperCase();

        } else {

            alert("Inserte una opción valida.")
            productoSeleccionado = prompt("Seleccione los productos que quiera:\nUno a la vez.\nAl finalizar con la seleccion ingrese X .\nHAMBURGUESAS:\nA - Simple $280\nB - Doble $350\nC - TinyDream $270\nD - ExtraCheese $350\nE - Completa $500\nF - BigDream $430\nG - DreamChoise $580\nH - TheChicken $270\nI - VeganDream $380\nACOMPANIAMIENTOS:\nJ - PapasFritas $120\nK - Ensalada $200\nBEBIDAS:\nL - CocaCola $130\nM - CocaColaZero $130\nN - Agua $80\nX - para terminar la selección.").toLocaleUpperCase();

        }

    } while (productoSeleccionado != "X") {

        console.log("El usuario termino con la seleccion del producto.")
    }
}  
  
// SELECCION DE PRODUCTOS fin


// SELECCION DE ENVIO comienzo

let envio = [
    {categoria: "envio", nombre: "palermo", precio: 200},
    {categoria: "envio", nombre: "belgrano", precio: 300},
    {categoria: "envio", nombre: "colegiales", precio: 300},
    {categoria: "envio", nombre: "chacarita", precio: 350},
    {categoria: "envio", nombre: "villa crezpo", precio: 300},
    {categoria: "envio", nombre: "recoleta", precio: 300}
];

let envioCliente = prompt("Ingrese la letra de la zona a la cual desea enviar su pedido:\nA - Palermo\nB - Belgrano\nC - Colegiales\nD - Chacarita\nE - Villa Crezpo\nF - Recoleta\nG - Retiraras el pedido en el local.\n- Por el momento disponemos de envios a dichas localidades, si la suya no se encuentra dentro de las mismas, debera retirar el pedido en el local.").toUpperCase();

EnvioCosto ()

function EnvioCosto() { 

    while (envioCliente != Number) {

        if (envioCliente == "A") {

            carrito.push(envio[0]);
            alert(`El costo de envio es de $${envio[0].precio}`);
            break;

        } else if (envioCliente == "B") {

            carrito.push(envio[1]);;
            alert(`El costo de envio es de $${envio[1].precio}`);
            break;

        } else if (envioCliente == "C") {

            carrito.push(envio[2]);;
            alert(`El costo de envio es de $${envio[2].precio}`);
            break;

        } else if (envioCliente == "D") {

            carrito.push(envio[3]);;
            alert(`El costo de envio es de $${envio[3].precio}`);
            break;

        } else if (envioCliente == "E") {

            carrito.push(envio[4]);;
            alert(`El costo de envio es de $${envio[4].precio}`);
            break;
    
        } else if (envioCliente == "F") {

            carrito.push(envio[5]);;
            alert(`El costo de envio es de $${envio[5].precio}`);
            break;

        } else if (envioCliente == "G") {

            alert("Retiraras el pedido en el local");
            carritolist.innerHTML = ("<li>Retira en local</li>");
            break;

        } else {

            alert("Inserte una opcion valida");
            envioCliente = prompt("Ingrese la letra de la zona a la cual desea enviar su pedido:\nA - Palermo\nB - Belgrano\nC - Colegiales\nD - Chacarita\nE - Villa Crezpo\nF - Recoleta\nG - Retiraras el pedido en el local.\n- Por el momento disponemos de envios a dichas localidades, si la suya no se encuentra dentro de las mismas, debera retirar el pedido en el local.").toUpperCase();
        }

    }

}

// SELECCION DE ENVIO fin


// SUMA TOTAL ENTRE LOS PRODUCTOS SELECCIONADOS Y EL ENVIO. comienzo
carrito.forEach(producto => {
    totalCarrito += producto.precio;
})

//LISTADO DE PRODUCTOS DENTRO DEL CARRITO (HTML)

if (carrito.length > 0) { 

    carrito.forEach(producto => {
        let lista = document.createElement("li");
        lista.innerHTML = (`${producto.categoria} - ${producto.nombre} - $${producto.precio}`);
        carritolist.appendChild(lista);
    });

} else {
    
    carritolist.innerHTML = ("<p>No ha ingresado productos al carrito.</p>");

}


// DESCUENTO POR CODIGO comienzo
let descuento = prompt("¿Posee codigo de descuento?").toLowerCase();

if (descuento == "si" ) {
    CodigoDescuento()
}

function CodigoDescuento (){ 

    let codigo = prompt("Ingrese el codigo\nX - si usted no posee un codigo.").toUpperCase();

    while (codigo != "X") { 

        if (codigo == "DREAMBURGER") {

            totalCarrito = totalCarrito * 0.9; 
            alert("El codigo ha sido aceptado y se ha aplicado un descuento del 10% sobre el total de su compra.")
            let descuentoCod = document.createElement("li");
            descuentoCod.innerHTML = (`Codigo "DREAMBURGER" -10%`);
            carritolist.appendChild(descuentoCod);
            break;
       
        } else {

            alert("Ingrese un codigo valido.")
            codigo = prompt("Ingrese el codigo\nX - si usted no posee un codigo.").toUpperCase();

        }
    }        
return totalCarrito;
}  
// DESCUENTO POR CODIGO fin

// SUMA TOTAL ENTRE LOS PRODUCTOS SELECCIONADOS Y EL ENVIO. fin

// TOTAL DE ENVIO EN HTML
total.innerHTML = (`Total: $${totalCarrito}`);







