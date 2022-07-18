// Carrito de compra.

// REGISTRO DE USUARIOS comienzo
let registroUsuarios = [{usuario: "luciano", fecha: "17/7/2022, 02:26:43"}];

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
            registroUsuarios.push({usuario: nombreUsuario , fecha: (fechaActual.toLocaleString())});
            console.log(`${nombreUsuario} se ha ingresado al sistema.`);

        } else if (registroUsuarios[u].usuario.includes(nombreUsuario) == true) {
            console.log(`${nombreUsuario} ya ha ingresado con anterioridad.`)
        }
    }    
}
console.log(registroUsuarios);
// REGISTRO DE USUARIOS fin


// SECCION DE COMPRA comienzo
let productos = [
    {nombre: "simple", caterogia: "hamburguesa", precio: 280},
    {nombre: "doble", caterogia: "hamburguesa", precio: 350},
    {nombre: "tinyDream", caterogia: "hamburguesa", precio: 270},
    {nombre: "extraCheese", caterogia: "hamburguesa", precio: 350},
    {nombre: "completa", caterogia: "hamburguesa", precio: 500},
    {nombre: "bigDream", caterogia: "hamburguesa", precio: 430},
    {nombre: "dreamChoise", caterogia: "hamburguesa", precio: 580},
    {nombre: "theChicken", caterogia: "hamburguesa", precio: 270},
    {nombre: "veganDream", caterogia: "hamburguesa", precio: 380},
    {nombre: "papasFritas", caterogia: "acompaniamiento", precio: 120},
    {nombre: "ensalada", caterogia: "acompaniamiento", precio: 200},
    {nombre: "cocaCola", caterogia: "bebida", precio: 130},
    {nombre: "cocaColaZero", caterogia: "bebida", precio: 130},
    {nombre: "agua", caterogia: "bebida", precio: 80}
];

// Los envios quedan temporalmente fuera de servicio.
// let envio = [
//     {zona: "A", localidad: "palermo.",precio: 200},
//     {zona: "B", localidad: "belgrano, colegiales, chacarita, villa crezpo, almagro, recoleta.",precio: 300},
//     {zona: "C", localidad: "nuniez, coghlan, villa ortuzar, paternal, caballito, balvanera.",precio: 400}
// ];


let productoSeleccionado = prompt("Seleccione los productos que quiera:\nUno a la vez.\nAl finalizar con la seleccion ingrese X .\nHAMBURGUESAS:\nA - Simple $280\nB - Doble $350\nC - TinyDream $270\nD - ExtraCheese $350\nE - Completa $500\nF - BigDream $430\nG - DreamChoise $580\nH - TheChicken $270\nI - VeganDream $380\nACOMPANIAMIENTOS:\nJ - PapasFritas $120\nK - Ensalada $200\nBEBIDAS:\nL - CocaCola $130\nM - CocaColaZero $130\nN - Agua $80\nX - para terminar la selección.").toLocaleUpperCase();

let carrito = [];

let totalCarrito = 0;

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

        carrito.forEach(producto => {
            totalCarrito += producto.precio;
        })
        console.log(`El total de la compra de ${nombreUsuario}, es de: $${totalCarrito}, realizada a las ${fechaActual.toTimeString()}`);
        alert(`Su total a abonar es de ${totalCarrito}`);
    }
    return totalCarrito;
}  
  
console.log(carrito)
// SECCION DE COMPRA fin