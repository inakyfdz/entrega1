
                //Variables
let reyMovido = false;
let torreMovida = false;
let enJaque = false;
let pieza = "";

let FilaDestinoBlancas = 8;
let FilaDestinoNegras = 1;
let piezaPromocionada = "";

//hecho asi para ver si funciona seria un let colorPeon = "";
const peonNegras = "Negras";
const peonBlancas = "Blancas";


                //Programacion
//Verifica si el rey puede enrocarse
                // Comentario del autor: Sí, solo si ni el rey ni la torre se han movido y no está en jaque.
                // Es una versión simplificada y lo que pedia el jercicio: no comprueba que las casillas entre ambos estén libres.
if(!reyMovido && !torreMovida && !enJaque){
    console.log("Se puede hacer enroque ")
}else{
    console.log("No se puede hacer enroque ")
}

                //Switch
pieza = "torre";
//Dada una pieza te indica como puede moverse
                // Comentario del autor/a: Correcto. tengo un fallo mío: "cabalallo" está mal escrito ya lo corrijo

switch(pieza){
    case "peon":
        console.log("Se mueve hacia delante y captura en diagonal)");
        break;
    case "torre":
        console.log("Se mueve en línea recta, horizontal o verticalmente");
        break;
    case "cababallo":
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
//Dada la llegada de un peon a la casilla 8, verifica si es negro o blanco y lo transforma en dama.
                // Comentario del autor/a: Casi: las blancas promocionan en la fila 8 y las negras en la 1.
if(peonBlancas === 'Blancas'){
    piezaPromocionada = FilaDestinoBlancas === 8 ? "♕" : "♙";
}else if(peonNegras === 'Negras'){
    piezaPromocionada = FilaDestinoNegras === 1 ? "♕" : "♙";
}else{
    console.log("No se puede tramposo ")
}

console.log(`Promoción: ${piezaPromocionada}`);