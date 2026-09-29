
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

