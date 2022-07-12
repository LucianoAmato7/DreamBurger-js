// Carrito de compra.

//Menú comienzo: (actualmente fuera de servicio)

// class Producto {
//     constructor(nombre, categoria, precio){
//         this.nombre = nombre
//         this.categoria = categoria
//         this.precio = parseInt(precio)
//     }
// }

// const simple = new Producto("simple", "hamburguesa", 280)
// const doble = new Producto ("doble", "hamburguesa", 350)
// const tinyDream = new Producto ("tinyDream", "hamburguesa", 270)
// const extraCheese = new Producto ("extraCheese", "hamburguesa", 350)
// const completa = new Producto ("completa", "hamburguesa", 500)
// const bigDream = new Producto ("bigDream", "hamburguesa", 430)
// const dreamChoise = new Producto ("dreamChoise", "hamburguesa", 580)
// const theChicken = new Producto ("theChicken", "hamburguesa", 270)
// const veganDream = new Producto ("veganDream", "hamburguesa", 380)

// const papasFritas = new Producto ("papasFritas", "acompaniamiento", 120)
// const ensalada = new Producto ("ensalada", "acompaniamiento", 200)

// const cocaCola = new Producto ("cocaCola", "bebida", 130)
// const cocaColaZero = new Producto ("cocaColaZero", "bebida", 130)
// const agua = new Producto ("agua", "bebida", 80)

//Menú fin: (actualmente fuera de servicio)

// Hoy en dia rigen los combos, proximamente regiran los productos.

// Precios de Combos:
class Combos {
    constructor(categoria, precio){
        this.categoria = categoria
        this.precio = parseInt(precio)
    }
}

const comboA = new Combos ("A", 550)
const comboB = new Combos ("B", 350)
const comboC = new Combos ("C", 250)
// Precios de Combos:


// Costo de envio:
class Envio {
    constructor(zona, costo){
        this.zona = zona
        this.costo = parseInt(costo)
    }
}

const zonaA = new Envio ("A", 200)
const zonaB = new Envio ("B", 300)
const zonaC = new Envio ("C", 400)
// A: palermo.
// B: belgrano, colegiales, chacarita, villa crezpo, almagro, recoleta.
// C: nuniez, coghlan, villa ortuzar, paternal, caballito, balvanera.
// Costo de envio:


let combo = prompt("Elige tu combo...\nDisponibles:\nA - Hamburguesa, papas fritas y CocaCola.\nB - Hamburguesa y papas fritas.\nC - Hamburguesa.").toUpperCase();

while (combo != ""){
    if (combo == "A") {

        const precioCombo = comboA.precio;
        console.log(`Combo A: $${precioCombo}`);
        alert(`El total a abonar del combo ${combo}, es de $${PrecioTotalCombo(precioCombo)}`) 
        break;

    } else if (combo == "B") {

        const precioCombo = comboB.precio;
        console.log(`Combo B: $${precioCombo}`);
        alert(`El total a abonar del combo ${combo}, es de $${PrecioTotalCombo(precioCombo)}`) 
        break;

    } else if (combo == "C") {

        const precioCombo = comboC.precio;
        console.log(`Combo C: $${precioCombo}`);
        alert(`El total a abonar del combo ${combo}, es de $${PrecioTotalCombo(precioCombo)}`)
        break;
        
    } else {
        alert("Insete una opción valida")
    }
}


let envio = prompt("Elige tu zona\nA - Palermo.\nB - belgrano, colegiales, chacarita, villa crezpo, almagro, recoleta.\nC - nuñez, coghlan, villa ortuzar, paternal, caballito, balvanera.\nD - Retiro en local.").toLocaleUpperCase();

while (envio != "") { 

    if (envio == "A") {

        const precioEnvio = zonaA.costo;
        console.log(`Envio A: $${precioEnvio}`);
        alert(`El total a abonar de envio es de $${PrecioTotalEnvio(precioEnvio)}`);
        break;

    } else if (envio == "B") {

        const precioEnvio = zonaB.costo;
        console.log(`Envio A: $${precioEnvio}`);
        alert(`El total a abonar de envio es de $${PrecioTotalEnvio(precioEnvio)}`);
        break;

    } else if (envio == "C") {

        const precioEnvio = zonaC.costo;
        console.log(`Envio A: $${precioEnvio}`);
        alert(`El total a abonar de envio es de $${PrecioTotalEnvio(precioEnvio)}`);
        break;

    } else if (envio == "D") {

        alert("Usted retirara el pedido en el local.")
        break;

    } else {
    alert("Inserte una opción valida.");
    }
    
}

alert("Muchas gracias por su compra.\nLe llegara un mail con la confirmación del pedido.")

function PrecioTotalCombo (precio) {
    const precioTotalCombo = precio;
    return precioTotalCombo;
}

function PrecioTotalEnvio (precio) {
    const precioTotalEnvio = precio;
    return precioTotalEnvio;
}
