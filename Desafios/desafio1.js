
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
for (let i = 0; i < 4; i++) {
    puntosBlancas += 1;
}

nJugadas = 15;

if (puntosBlancas % 2 === 0){
    turno = "Turno de las negras"
}else{
    turno = "Turno de las blancas"
}

if (puntosNegras > puntosBlancas){
    ventaja = puntosNegras - puntosBlancas;

}else{
    ventaja =  puntosBlancas - puntosNegras;
}

                //Comunicamos

console.log(` Puntuación Blancas: ${puntosBlancas} pts | Puntuación Negras: ${puntosNegras} pts 
                Ventaja Material: ${ventaja} pts 
                Estado del Turno: Jugada ${nJugadas} (${turno} ♔ ) `);

