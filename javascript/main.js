// Carrito de compra.

//funcionalidades:
// - Al ingresar le pedira su nombre, si el nombre no esta registrado lo registra con nombre y fecha actual. Si la persona que entra es "luciano" (administrador), el mismo podra filtrar, dentro del registro, por nombre y/o fecha.
// Sistema de compra: se pueden elegir todos los productos que se quieran, al finalizar la seleccion, ingresando "x" pasa a la siguiente etapa.
// Envios: El usuario puede elegir, dentro de ciertas localidades disponibles, si desea que se lo envien p si lo retira en el local, cada envio tiene un precio y se agrega al carrito al igual que los productos.
// Si el usuario es nuevo en el sitio (no esta registrado) en el mensaje de bienvenida se le brindara un codigo de descuento del 10%, el cual luego del proceso de compra podra aplicar para efectuar el descuento.


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
            console.log(`${nombreUsuario} agrego el producto: ${productos[0].nombre}, de $${productos[0].precio} al carrito.`)
            productoSeleccionado = prompt("Seleccione los productos que quiera:\nUno a la vez.\nAl finalizar con la seleccion ingrese X .\nHAMBURGUESAS:\nA - Simple $280\nB - Doble $350\nC - TinyDream $270\nD - ExtraCheese $350\nE - Completa $500\nF - BigDream $430\nG - DreamChoise $580\nH - TheChicken $270\nI - VeganDream $380\nACOMPANIAMIENTOS:\nJ - PapasFritas $120\nK - Ensalada $200\nBEBIDAS:\nL - CocaCola $130\nM - CocaColaZero $130\nN - Agua $80\nX - para terminar la selección.").toLocaleUpperCase();

        } else if ((productoSeleccionado != "") && (productoSeleccionado == "B")) {

            carrito.push(productos[1]);
            console.log(`${nombreUsuario} agrego el producto: ${productos[1].nombre}, de $${productos[1].precio} al carrito.`)
            productoSeleccionado = prompt("Seleccione los productos que quiera:\nUno a la vez.\nAl finalizar con la seleccion ingrese X .\nHAMBURGUESAS:\nA - Simple $280\nB - Doble $350\nC - TinyDream $270\nD - ExtraCheese $350\nE - Completa $500\nF - BigDream $430\nG - DreamChoise $580\nH - TheChicken $270\nI - VeganDream $380\nACOMPANIAMIENTOS:\nJ - PapasFritas $120\nK - Ensalada $200\nBEBIDAS:\nL - CocaCola $130\nM - CocaColaZero $130\nN - Agua $80\nX - para terminar la selección.").toLocaleUpperCase();

        } else if ((productoSeleccionado != "") && (productoSeleccionado == "C")) {

            carrito.push(productos[2]);
            console.log(`${nombreUsuario} agrego el producto: ${productos[2].nombre}, de $${productos[2].precio} al carrito.`)
            productoSeleccionado = prompt("Seleccione los productos que quiera:\nUno a la vez.\nAl finalizar con la seleccion ingrese X .\nHAMBURGUESAS:\nA - Simple $280\nB - Doble $350\nC - TinyDream $270\nD - ExtraCheese $350\nE - Completa $500\nF - BigDream $430\nG - DreamChoise $580\nH - TheChicken $270\nI - VeganDream $380\nACOMPANIAMIENTOS:\nJ - PapasFritas $120\nK - Ensalada $200\nBEBIDAS:\nL - CocaCola $130\nM - CocaColaZero $130\nN - Agua $80\nX - para terminar la selección.").toLocaleUpperCase();

        } else if ((productoSeleccionado != "") && (productoSeleccionado == "D")) {

            carrito.push(productos[3]);
            console.log(`${nombreUsuario} agrego el producto: ${productos[3].nombre}, de $${productos[3].precio} al carrito.`)
            productoSeleccionado = prompt("Seleccione los productos que quiera:\nUno a la vez.\nAl finalizar con la seleccion ingrese X .\nHAMBURGUESAS:\nA - Simple $280\nB - Doble $350\nC - TinyDream $270\nD - ExtraCheese $350\nE - Completa $500\nF - BigDream $430\nG - DreamChoise $580\nH - TheChicken $270\nI - VeganDream $380\nACOMPANIAMIENTOS:\nJ - PapasFritas $120\nK - Ensalada $200\nBEBIDAS:\nL - CocaCola $130\nM - CocaColaZero $130\nN - Agua $80\nX - para terminar la selección.").toLocaleUpperCase();

        } else if ((productoSeleccionado != "") && (productoSeleccionado == "E")) {

            carrito.push(productos[4]);
            console.log(`${nombreUsuario} agrego el producto: ${productos[4].nombre}, de $${productos[4].precio} al carrito.`)
            productoSeleccionado = prompt("Seleccione los productos que quiera:\nUno a la vez.\nAl finalizar con la seleccion ingrese X .\nHAMBURGUESAS:\nA - Simple $280\nB - Doble $350\nC - TinyDream $270\nD - ExtraCheese $350\nE - Completa $500\nF - BigDream $430\nG - DreamChoise $580\nH - TheChicken $270\nI - VeganDream $380\nACOMPANIAMIENTOS:\nJ - PapasFritas $120\nK - Ensalada $200\nBEBIDAS:\nL - CocaCola $130\nM - CocaColaZero $130\nN - Agua $80\nX - para terminar la selección.").toLocaleUpperCase();

        } else if ((productoSeleccionado != "") && (productoSeleccionado == "F")) {

            carrito.push(productos[5]);
            console.log(`${nombreUsuario} agrego el producto: ${productos[5].nombre}, de $${productos[5].precio} al carrito.`)
            productoSeleccionado = prompt("Seleccione los productos que quiera:\nUno a la vez.\nAl finalizar con la seleccion ingrese X .\nHAMBURGUESAS:\nA - Simple $280\nB - Doble $350\nC - TinyDream $270\nD - ExtraCheese $350\nE - Completa $500\nF - BigDream $430\nG - DreamChoise $580\nH - TheChicken $270\nI - VeganDream $380\nACOMPANIAMIENTOS:\nJ - PapasFritas $120\nK - Ensalada $200\nBEBIDAS:\nL - CocaCola $130\nM - CocaColaZero $130\nN - Agua $80\nX - para terminar la selección.").toLocaleUpperCase();

        } else if ((productoSeleccionado != "") && (productoSeleccionado == "G")) {

            carrito.push(productos[6]);
            console.log(`${nombreUsuario} agrego el producto: ${productos[6].nombre}, de $${productos[6].precio} al carrito.`)
            productoSeleccionado = prompt("Seleccione los productos que quiera:\nUno a la vez.\nAl finalizar con la seleccion ingrese X .\nHAMBURGUESAS:\nA - Simple $280\nB - Doble $350\nC - TinyDream $270\nD - ExtraCheese $350\nE - Completa $500\nF - BigDream $430\nG - DreamChoise $580\nH - TheChicken $270\nI - VeganDream $380\nACOMPANIAMIENTOS:\nJ - PapasFritas $120\nK - Ensalada $200\nBEBIDAS:\nL - CocaCola $130\nM - CocaColaZero $130\nN - Agua $80\nX - para terminar la selección.").toLocaleUpperCase();

        } else if ((productoSeleccionado != "") && (productoSeleccionado == "H")) {

            carrito.push(productos[7]);
            console.log(`${nombreUsuario} agrego el producto: ${productos[7].nombre}, de $${productos[7].precio} al carrito.`)
            productoSeleccionado = prompt("Seleccione los productos que quiera:\nUno a la vez.\nAl finalizar con la seleccion ingrese X .\nHAMBURGUESAS:\nA - Simple $280\nB - Doble $350\nC - TinyDream $270\nD - ExtraCheese $350\nE - Completa $500\nF - BigDream $430\nG - DreamChoise $580\nH - TheChicken $270\nI - VeganDream $380\nACOMPANIAMIENTOS:\nJ - PapasFritas $120\nK - Ensalada $200\nBEBIDAS:\nL - CocaCola $130\nM - CocaColaZero $130\nN - Agua $80\nX - para terminar la selección.").toLocaleUpperCase();

        } else if ((productoSeleccionado != "") && (productoSeleccionado == "I")) {

            carrito.push(productos[8]);
            console.log(`${nombreUsuario} agrego el producto: ${productos[8].nombre}, de $${productos[8].precio} al carrito.`)
            productoSeleccionado = prompt("Seleccione los productos que quiera:\nUno a la vez.\nAl finalizar con la seleccion ingrese X .\nHAMBURGUESAS:\nA - Simple $280\nB - Doble $350\nC - TinyDream $270\nD - ExtraCheese $350\nE - Completa $500\nF - BigDream $430\nG - DreamChoise $580\nH - TheChicken $270\nI - VeganDream $380\nACOMPANIAMIENTOS:\nJ - PapasFritas $120\nK - Ensalada $200\nBEBIDAS:\nL - CocaCola $130\nM - CocaColaZero $130\nN - Agua $80\nX - para terminar la selección.").toLocaleUpperCase();

        } else if ((productoSeleccionado != "") && (productoSeleccionado == "J")) {

            carrito.push(productos[9]);
            console.log(`${nombreUsuario} agrego el producto: ${productos[9].nombre}, de $${productos[9].precio} al carrito.`)
            productoSeleccionado = prompt("Seleccione los productos que quiera:\nUno a la vez.\nAl finalizar con la seleccion ingrese X .\nHAMBURGUESAS:\nA - Simple $280\nB - Doble $350\nC - TinyDream $270\nD - ExtraCheese $350\nE - Completa $500\nF - BigDream $430\nG - DreamChoise $580\nH - TheChicken $270\nI - VeganDream $380\nACOMPANIAMIENTOS:\nJ - PapasFritas $120\nK - Ensalada $200\nBEBIDAS:\nL - CocaCola $130\nM - CocaColaZero $130\nN - Agua $80\nX - para terminar la selección.").toLocaleUpperCase();

        } else if ((productoSeleccionado != "") && (productoSeleccionado == "K")) {

            carrito.push(productos[10]);
            console.log(`${nombreUsuario} agrego el producto: ${productos[10].nombre}, de $${productos[10].precio} al carrito.`)
            productoSeleccionado = prompt("Seleccione los productos que quiera:\nUno a la vez.\nAl finalizar con la seleccion ingrese X .\nHAMBURGUESAS:\nA - Simple $280\nB - Doble $350\nC - TinyDream $270\nD - ExtraCheese $350\nE - Completa $500\nF - BigDream $430\nG - DreamChoise $580\nH - TheChicken $270\nI - VeganDream $380\nACOMPANIAMIENTOS:\nJ - PapasFritas $120\nK - Ensalada $200\nBEBIDAS:\nL - CocaCola $130\nM - CocaColaZero $130\nN - Agua $80\nX - para terminar la selección.").toLocaleUpperCase();

        } else if ((productoSeleccionado != "") && (productoSeleccionado == "L")) {

            carrito.push(productos[11]);
            console.log(`${nombreUsuario} agrego el producto: ${productos[11].nombre}, de $${productos[11].precio} al carrito.`)
            productoSeleccionado = prompt("Seleccione los productos que quiera:\nUno a la vez.\nAl finalizar con la seleccion ingrese X .\nHAMBURGUESAS:\nA - Simple $280\nB - Doble $350\nC - TinyDream $270\nD - ExtraCheese $350\nE - Completa $500\nF - BigDream $430\nG - DreamChoise $580\nH - TheChicken $270\nI - VeganDream $380\nACOMPANIAMIENTOS:\nJ - PapasFritas $120\nK - Ensalada $200\nBEBIDAS:\nL - CocaCola $130\nM - CocaColaZero $130\nN - Agua $80\nX - para terminar la selección.").toLocaleUpperCase();

        } else if ((productoSeleccionado != "") && (productoSeleccionado == "M")) {

            carrito.push(productos[12]);
            console.log(`${nombreUsuario} agrego el producto: ${productos[12].nombre}, de $${productos[12].precio} al carrito.`)
            productoSeleccionado = prompt("Seleccione los productos que quiera:\nUno a la vez.\nAl finalizar con la seleccion ingrese X .\nHAMBURGUESAS:\nA - Simple $280\nB - Doble $350\nC - TinyDream $270\nD - ExtraCheese $350\nE - Completa $500\nF - BigDream $430\nG - DreamChoise $580\nH - TheChicken $270\nI - VeganDream $380\nACOMPANIAMIENTOS:\nJ - PapasFritas $120\nK - Ensalada $200\nBEBIDAS:\nL - CocaCola $130\nM - CocaColaZero $130\nN - Agua $80\nX - para terminar la selección.").toLocaleUpperCase();

        } else if ((productoSeleccionado != "") && (productoSeleccionado == "N")) {

            carrito.push(productos[13]);
            console.log(`${nombreUsuario} agrego el producto: ${productos[13].nombre}, de $${productos[13].precio} al carrito.`)
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
    {zona: "A", categoria: "palermo.", precio: 200},
    {zona: "B", categoria: "belgrano", precio: 300},
    {zona: "C", categoria: "colegiales", precio: 300},
    {zona: "D", categoria: "chacarita", precio: 350},
    {zona: "E", categoria: "villa crezpo", precio: 300},
    {zona: "F", categoria: "recoleta", precio: 300}
];

let envioCliente = prompt("Ingrese la letra de la zona a la cual desea enviar su pedido:\nA - Palermo\nB - Belgrano\nC - Colegiales\nD - Chacarita\nE - Villa Crezpo\nF - Recoleta\nG - Retiraras el pedido en el local.\n- Por el momento disponemos de envios a dichas localidades, si la suya no se encuentra dentro de las mismas, debera retirar el pedido en el local.").toUpperCase();

EnvioCosto ()

function EnvioCosto() { 

    while (envioCliente != Number) {

        if (envioCliente == "A") {

            carrito.push(envio[0]);
            alert(`El costo de envio es de $${envio[0].precio}`);
            console.log(`El cliente pagara ${envio[0].precio} de envio a Palermo`);
            break;

        } else if (envioCliente == "B") {

            carrito.push(envio[1]);;
            alert(`El costo de envio es de $${envio[1].precio}`);
            console.log(`El cliente pagara $${envio[1].precio} de envio a Belgrano`);
            break;

        } else if (envioCliente == "C") {

            carrito.push(envio[2]);;
            alert(`El costo de envio es de $${envio[2].precio}`);
            console.log(`El cliente pagara $${envio[2].precio} de envio a Colegiales`);
            break;

        } else if (envioCliente == "D") {

            carrito.push(envio[3]);;
            alert(`El costo de envio es de $${envio[3].precio}`);
            console.log(`El cliente pagara $${envio[3].precio} de envio a Chacarita`);
            break;

        } else if (envioCliente == "E") {

            carrito.push(envio[4]);;
            alert(`El costo de envio es de $${envio[4].precio}`);
            console.log(`El cliente pagara $${envio[4].precio} de envio a Villa Crezpo`);
            break;
    
        } else if (envioCliente == "F") {

            carrito.push(envio[5]);;
            alert(`El costo de envio es de $${envio[5].precio}`);
            console.log(`El cliente pagara $${envio[5].precio} de envio a Recoleta`);
            break;

        } else if (envioCliente == "G") {

            alert("Retiraras el pedido en el local");
            console.log("Retira en local");
            break;

        } else {

            alert("Inserte una opcion valida");
            envioCliente = prompt("Ingrese la letra de la zona a la cual desea enviar su pedido:\nA - Palermo\nB - Belgrano\nC - Colegiales\nD - Chacarita\nE - Villa Crezpo\nF - Recoleta\nG - Retiraras el pedido en el local.\n- Por el momento disponemos de envios a dichas localidades, si la suya no se encuentra dentro de las mismas, debera retirar el pedido en el local.").toUpperCase();
        }

    }

}

// SELECCION DE ENVIO fin

console.log(carrito)

// SUMA TOTAL ENTRE LOS PRODUCTOS SELECCIONADOS Y EL ENVIO. comienzo
carrito.forEach(producto => {
    totalCarrito += producto.precio;
})

//LISTADO DEL CARRITO
carrito.forEach(producto => {
    console.log(`Producto: ${producto.categoria}, Precio: $${producto.precio}`);
})

console.log(`El total sin descuento es de: $${totalCarrito}`) 

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
            console.log("Aplicado codigo de 10% de descuento.")
            break;
       
        } else {

            alert("Ingrese un codigo valido.")
            codigo = prompt("Ingrese el codigo\nX - si usted no posee un codigo.").toUpperCase();

        }
    }        
return totalCarrito;
}  
// DESCUENTO POR CODIGO fin

console.log(`El total de la compra de ${nombreUsuario}, es de: $${totalCarrito}, realizada a las ${fechaActual.toTimeString()}`);
alert(`Su total a abonar es de $${totalCarrito}. Muchas gracias por su compra!`);
// SUMA TOTAL ENTRE LOS PRODUCTOS SELECCIONADOS Y EL ENVIO. fin








