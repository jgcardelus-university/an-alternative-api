// let tradicional = 5;
// console.log(tradicional);

// let esperarPromesa = async () => {
// 	let promesa = await new Promise((resolve, reject) => {
// 		let a = 5;
// 		let b = 10;
// 		resolve(a * b);
// 		// reject("No me ha dado la gana");
// 	});
// 	console.log(promesa);
// };

let llamarAGitHub = async () => {
	let peticion = await fetch("https://api.github.com/users/jgcardelus", {
		method: "GET",
	});

	if (peticion.status === 200) {
		let datos = await peticion.json();
		console.log(datos);
		console.log(datos.public_repos);
	}

	// GET
	// POST
	// DELETE
	// PUT

	// 200 -> ok
	// 400 -> bad request
	// 404 -> Not found
	// 500 -> bad server
};

llamarAGitHub();
