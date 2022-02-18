// let myDiv = document.getElementById("my-div");
// console.log(myDiv);

// let divGroup = document.getElementsByClassName("div-group");
// console.log(divGroup);

// let div = document.getElementsByTagName("div");
// console.log(div);

// let parrafo = document.getElementById("parrafo");
// console.log(parrafo.innerHTML);
// parrafo.innerHTML = "Me llamo Jorge";

let parrafo = $("#parrafo");
console.log(parrafo);
parrafo.html("Me llamo Jorge");

let divGroup = $(".div-group");
console.log(divGroup);

let div = $("div");
console.log(div);

$("#mi-boton").on("click", (event) => {
	console.log("Boton pinchado");
});

let botonPinchado = () => {
	console.log("Boton Pinchado");
};

let llamarFuncion = (funcion) => {
	const mensaje = "Hola mundo";
	funcion(mensaje);
};

let imprimirMensaje = (mensaje) => {
	console.log(mensaje);
};

llamarFuncion(imprimirMensaje);

llamarFuncion((mensaje) => {
	console.log(mensaje);
});

llamarFuncion(function (mensaje) {
	console.log(mensaje);
});
