
                //Variables
let reyMovido = false;
let torreMovida = false;
let enJaque = false;
let pieza = "";

let FilaDestinoBlancas = 8;
let FilaDestinoNegras = 1;
let piezaPromocionada = "";

//hecho asi para ver si funciona seria un let colorPeon = "";
const peonNegras = "Negro";
const peonBlancas = "Blancas";


                //Programacion
if(!reyMovido && !torreMovida && !enJaque){
    console.log("Se puede hacer enroque ")
}else{
    console.log("No se puede hacer enroque ")
}

                //Switch
pieza = "torre";

switch(pieza){
    case "peon":
        console.log("Se mueve hacia delante y captura en diagonal);")
        break;
    case "torre":
        console.log("Se mueve en línea recta, horizontal o verticalmente");
        break;
    case "cabalallo":
        console.log("Se mueve en forma de L");
        break;
    case "alfil":
        console.log("Se mueve en diagonal.");
        break;
    case "dama":
        console.log("Se mueve en horizontal, vertical y diagonal.");
        break;
    case "rey":
        console.log("Se mueve una casilla en cualquier dirección.");
        break;
    default:
        console.log("No se que pieza es ")
}

                //promocion
if(peonBlancas === 'Blancas'){
    piezaPromocionada = FilaDestinoBlancas === 8 ? "♕" : "♙";
}else if(peonNegras === 'Negras'){
    piezaPromocionada = FilaDestinoNegras === 1 ? "♕" : "♙";
}else{
    console.log("No se puede tramposo ")
}

console.log(`Promoción: ${piezaPromocionada}`);