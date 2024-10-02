function jugar (eleccionUsuario){
    let opciones = ["piedra,papel o tijeras"];
}
let eleccionMaquina = opciones = [Math.floor(Math.random() * opciones.length)];
if (eleccionUsuario === eleccionMaquina){
    console.log ("empate ambos elegieron la misma opcion " + eleccionUsuario + "." );
} else if (
    (eleccionUsuario === "piedra" && eleccionMaquina === "tijeras") ||
    (eleccionUsuario === "papel" && eleccionMaquina === "piedra") ||
    (eleccionUsuario === "tijeras" && eleccionMaquina === "papel" )
) {
    console.log ("ganaste tu elegiste" + eleccionUsuario + "y la maquina elegio" + eleccionMaquina + ".")
} else {
    console.log ("perdiste tu elegiste" + eleccionUsuario + "y la maquina eligio" + eleccionMaquina + ".")
}

let eleccionUsuario = prompt ("elige: piedra papel o tijera").toLocaleLowerCase();

if (eleccionUsuario === "piedra" || eleccionUsuario === "papel" || eleccionUsuario === "tijeras") {
    jugar(eleccionUsuario);
} else {
    console.log("eleccion invalida. por favor, elegi piedra, papel o tijeras.");
}
     
