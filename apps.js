const botonDesafio1 = document.getElementById("btnDesafio1");
const botonDesafio2 = document.getElementById("btnDesafio2");
const botonDesafio3 = document.getElementById("btnDesafio3");

//recordar poner los tipos de archivos
botonDesafio1.addEventListener("click", async () => {

    await import("./Desafios/desafio1.js");

});


botonDesafio2.addEventListener("click", async () => {

    await import("./Desafios/desafio2.js");

});


botonDesafio3.addEventListener("click", async () => {
    
});
