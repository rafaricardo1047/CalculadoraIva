console.log(document)

var titulos = document.getElementsByTagName('h1');

console.log(titulos)

// function cambiarMensaje(){
// 	var textosRojos = document.getElementsByClassName('rojo');
// 	textosRojos[1].textContent = 'Grupo 175';
// }

function calcularIva(){
	var precio = parseInt(document.getElementById('precioProducto').value);
	var iva = 0.19;
	var resultado = (precio * iva) + precio;
	var spanResultado = document.getElementById('resultadoIva')
	spanResultado.textContent = resultado;
}


var textosRojo = document.getElementsByClassName('rojo');

console.log(textosRojo);

var fecha = document.getElementById('fecha');

console.log(fecha);