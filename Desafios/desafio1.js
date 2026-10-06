
                //Constantes
const PEON=1;
const CABALLO=3;
const ALFIL=3;
const TORRE=5;
const DAMA=9;

                //variables
let puntosBlancas = 0;
let puntosNegras = 0;
let nJugadas = 1;
let turno = "";
let ventaja = 0;

                //programacion
//El bucle simula la obtencion de puntos por capturar 4 piezas
for (let i = 0; i < 4; i++) {
    puntosBlancas += 1;
}

nJugadas = 15;
//Comprueba si el turno actual es de las blancas o las negras
if (puntosBlancas % 2 === 0){
    turno = "Turno de las negras"
}else{
    turno = "Turno de las blancas"
}

//Comprueba quien de los dos jugadores lleva ventaja. Si van igual, indica que van empatados.
if (puntosNegras > puntosBlancas){
    ventaja = puntosNegras - puntosBlancas;

}else{
    ventaja =  puntosBlancas - puntosNegras;
}

                //Comunicamos
//Pasa por consola el resultado de las anteriores simulaciones y comprobaciones
console.log(` Puntuación Blancas: ${puntosBlancas} pts | Puntuación Negras: ${puntosNegras} pts 
                Ventaja Material: ${ventaja} pts 
                Estado del Turno: Jugada ${nJugadas} (${turno} ♔ ) `);

