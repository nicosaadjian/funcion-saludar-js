let nombreDeUsuario = document.querySelector("#nombre-usuario");

//console.log(nombreDeUsuario.innerText);
let apellidoDeUsuario = document.querySelector("#apellido-usuario");
let edadDeUsuario = document.querySelector("#edad-usuario");

//escibir la variable con el boton de submit

const enviarDatosBoton = document.querySelector("#enviar-datos");

//escribir la funcion anonima de onclick

enviarDatosBoton.onclick = function () {
	let resultadosDeUsuario = document.querySelector(
		"#resultados-usuario" //Div
	);
	resultadosDeUsuario.innerText =
		"Nombre: " +
		nombreDeUsuario.value +
		" " +
		"Apellido: " +
		apellidoDeUsuario.value +
		" " +
		"Edad: " +
		edadDeUsuario.value;
	let saludarUsuario = document.querySelector("h1"); //h1
	saludarUsuario.innerText = `Bienvenido ${nombreDeUsuario.value}`;
	return false;
};
