
                //Constantes

const columnas = ["a", "b", "c", "d", "e", "f", "g", "h"];

                //Variables
let coordenada = "";
let colorCasilla = "";

let jugadas = [
    "e4",
    "e5",
    "Cf3",
    "Cc6",
    "// Desarrollo del caballo",
    "Ab5",
    "a6",
    "O-O",
    "Jaque mate"
];


                //Generar tablero
//Bucle anidado que genera la estructura del tablero
                // Comentario del autor: Sí. El bucle de fuera recorre las filas de la 8 a la 1 y
                // el de dentro las columnas de la a a la h. El color sale de la suma fila + posición de la columna:
                // si es par, casilla clara; si no, oscura.
for(let fila = 8; fila >= 1; fila--){

    for(let i = 0; i < 8; i++){

        coordenada = `${columnas[i]}${fila}`;

        if((fila + i) % 2 === 0){
            colorCasilla = "Clara";
        }else{
            colorCasilla = "Oscura";
        }

        console.log(`${coordenada} - ${colorCasilla}`);
    }
}


                //Recorrer jugadas
//Bucle que recorre e imprime el array de jugadas. En el caso de comenzar con '//', la jugada es considerada comentario y no se imprime. El codigo terminaua vez llegue a la jugada 'Jaque mate'.
                // Comentario del autor: Exacto: con continue se salta la línea de comentario y con break termina al
                // llegar a "Jaque mate".

for(const jugada of jugadas){


    if(jugada.startsWith("//")){
        continue;
    }

    console.log(`Jugada: ${jugada}`);


    if(jugada === "Jaque mate"){
        console.log("La partida ha terminado");
        break;
    }
}

