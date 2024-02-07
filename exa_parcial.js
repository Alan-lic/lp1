// Un mensajito de entrada
let primerMensaje = alert("A continuacion ingrese sus datos");


// Uso las promps para guardar los datos del usuario 
let nombrePersona = prompt("Ingrese su Nombre");
let apellidoPersona = prompt("Ingrese su apellido");
let cedulaPersona = prompt("Ingrese su cedula"); 

const datosDelUsuario = {
    Nombre: nombrePersona, Apellido: apellidoPersona, Cedula: cedulaPersona
}

let verduras = ["Tomates", "Cebolla", "Zanahoria"];
let frutas = ["Naranja", "Manzana", "Pera"];

// para borrar el ultimo elemento del array verduras
verduras.pop();

// para borrar el primer elemento del array frutas
frutas.shift();

// para agregar elementos a un objeto
datosDelUsuario.verduras = verduras;
datosDelUsuario.frutas = frutas;

//Imprimiendo los resultados
console.log(datosDelUsuario);