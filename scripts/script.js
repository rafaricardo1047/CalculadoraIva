// var Numero1 = 52.5;
// var Numero2 = 45;
// console.log(Numero1+Numero2);

// var nombre = 'Rafael';
// var apellido = 'Velasquez'

// console.log(nombre);
// console.log(apellido);

// var tieneMascota = true;

// var frutas = ['manzanas','fresa','banano','pera',25,true];
// console.log(frutas[0]);
// frutas[0] = 'uva';
// console.log(frutas[0]);

// var persona = {
// 	nombre: 'Rafael',
// 	edad: 26,
// 	tieneMascota: true,
// 	mascota: {
// 		raza: 'French Podle',
// 		nombre: 'Goliath'
// 	}
// };

// console.log(persona['nombre']);
// console.log(persona.edad);
// console.log(persona.mascota.raza);

// var fecha = new Date();

// console.log(fecha);


var valorProducto = 5000;


function calcularIva(valorProducto){
	var iva = 0.19;
	var resultado = (valorProducto * 0.19) + valorProducto ;
	return resultado;
}

alert(calcularIva(valorProducto));