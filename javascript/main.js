// Carrito de compra.

//Menú:
class Producto {
    constructor(nombre, categoria, precio){
        this.nombre = nombre
        this.categoria = categoria
        this.precio = parseInt(precio)
    }
}

const simple = new Producto("simple", "hamburguesa", 280)
const doble = new Producto ("doble", "hamburguesa", 350)
const tinyDream = new Producto ("tinyDream", "hamburguesa", 270)
const extraCheese = new Producto ("extraCheese", "hamburguesa", 350)
const completa = new Producto ("completa", "hamburguesa", 500)
const bigDream = new Producto ("bigDream", "hamburguesa", 430)
const dreamChoise = new Producto ("dreamChoise", "hamburguesa", 580)
const theChicken = new Producto ("theChicken", "hamburguesa", 270)
const veganDream = new Producto ("veganDream", "hamburguesa", 380)

const papasFritas = new Producto ("papasFritas", "acompaniamiento", 120)
const ensalada = new Producto ("ensalada", "acompaniamiento", 200)

const cocaCola = new Producto ("cocaCola", "bebida", 130)
const cocaColaZero = new Producto ("cocaColaZero", "bebida", 130)
const agua = new Producto ("agua", "bebida", 80)

// costo de envio
class Envio {
    constructor(categoria, zona, costo){
        this.categoria = categoria
        this.zona = zona
        this.costo = parseInt(costo)
    }
}

const zonaA = new Envio ("A", "palermo", 200)
const zonaB = new Envio ("B", "belgrano, colegiales, chacarita, villa crezpo, almagro, recoleta", 300)
const zonaC = new Envio ("C", "nuniez, coghlan, villa ortuzar, paternal, caballito, balvanera", 400)

costoDeEnvio()

function costoDeEnvio() {
    let localidad = prompt("¿A que localidad desea enviarlo?");

    if (localidad == zonaA.zona) {
        alert("El costo de envio es de " + zonaA.costo)
    } else if (localidad == zonaB.zona) {
        alert("El costo de envio es de " + zonaB.costo)
    } else if (localidad == zonaC.zona) {
        alert("El costo de envio es de " + zonaC.costo)
    } else {
        alert("Nuestro delivery no llega a esa localidad")
    }
    return //ver como poder retornar el costo correspondiente a localidad
}

// function total (hamburguesa, acompaniamiento, bebida) {
//     let total = hamburguesa + acompaniamiento + bebida;
//     return total;
// }

// function totalCant (producto, cantidad) {
//     let totalCant = producto * cantidad;
//     return totalCant;
// }

// function totalConEnvio(total, envio) {
//     let totalConEnvio = total + envio;
//     return totalConEnvio;
// }
