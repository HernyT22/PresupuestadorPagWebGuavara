
let tipo;
let precioTotal = 0;
let tiempo;

class Servicios {
    constructor(tipo, precio, duracion) {
        this.tipo = tipo;
        this.precio = precio;
        this.duracion = duracion;
    }
    informacionServicio() {
        return `Usted ${titular} eligió un sitio Tipo ${this.tipo}, con un precio de ${this.precio}u$s, y un tiempo de ${this.duracion}.`;
    }
    servicioAñadido() {
        return ` Más un ${this.tipo}, con un precio de ${this.precio}u$s, y un tiempo de ${this.duracion}.`;
    }
}

let blog = new Servicios('Blog', 50, '7 días para su entrega');
let tienda = new Servicios('Tienda', 70, '20 días para su entrega');
let aplicacion = new Servicios('Aplicación Web', 90, '30 días para su entrega');
let hosting = new Servicios('Hosting', 20, 'Duración de un año');
let dominio = new Servicios('Dominio', 10, 'Duración de un año');

// En este array se almacenaán los datos.
        let carrito = [];



function inicio() {
    let iniciador = prompt('¿Deseas iniciar esta aplicación?');

    if (iniciador.toLowerCase() === 'si') {
        encendido();
        document.write(carrito)
        calcularPrecioTotal();
    } else {
        apagado();
    }
}



function apagado() {
    alert('La aplicación no se encendió de manera adecuada');
    reiniciar();
}

function reiniciar() {
    let denuevo = prompt('¿Deseas volver a intentarlo?').toLowerCase();
    if (denuevo === 'si') {
        inicio();
    } else {
        alert('Lo lamento, no puedo hacer nada');
    }
}



function encendido() {
    titular = alert('Bienvenidos a este simulador que tendrá como objetivo presupuestar páginas web');

    tipo = prompt('Seleccione lo que busca:\n1) Blog\n2) Tienda\n3) Aplicación');

    switch (tipo) {
        case '1':
            carrito.push(blog.informacionServicio());
            añadirDominio();
            añadirHosting();
            break;
        case '2':
            carrito.push(tienda.informacionServicio());
            añadirDominio();
            añadirHosting();
            
            break;
        case '3':
            carrito.push(aplicacion.informacionServicio());
            añadirDominio();
            añadirHosting();
            
            break;
        default:
            alert('Por favor, ingresa correctamente el proyecto que buscas. De lo contrario, no podremos continuar');
            reiniciar();
            break;
    }

}


function añadirDominio() {
    let pregunta = prompt('Usted necesita Dominio? \n1) SI\n2) NO');

    if (pregunta === '1') {
        carrito.push(dominio.servicioAñadido());
        let nombre = prompt('Ingresa el nombre de tu dominio (Sin ".com")');
        let dominioN = nombre + '.com';

        alert('El dominio añadido fue ' + dominioN);
    }
}

function añadirHosting() {
    let pregunta = prompt('Usted necesita Hosting? \n1) SI\n2) NO');

    if (pregunta === '1') {
        carrito.push(hosting.servicioAñadido());
        alert('El Hosting fue añadido');
    } 
}

function calcularPrecioTotal() {
    precioTotal = 0;
    for (let servicio of carrito) {
        let BorrarLetra = servicio.indexOf("precio de ") + 10;
        let Borrarsimbolo = servicio.indexOf("u$s", BorrarLetra);
        let precioTexto = servicio.slice(BorrarLetra, Borrarsimbolo);
        let precio = parseFloat(precioTexto);
        precioTotal += precio;
    }
    document.write(` <b> Total del carrito: $${precioTotal} </b>`);
}


inicio();
