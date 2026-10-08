const botonDesafio1 = document.getElementById("btnDesafio1");
const botonDesafio2 = document.getElementById("btnDesafio2");
const botonDesafio3 = document.getElementById("btnDesafio3");

//recordar poner los tipos de archivos
//recordar recordar poner los tipos de archivos

//Codigo principal que permite ejecutar en el HTML los ejercicios.
// Comentario del autor: Cada botón de index.html carga con import() el archivo de su desafío solo cuando se pulsa,
// y al cargarse el módulo se ejecuta su código y se ve el resultado en la consola. Las rutas apuntan a la carpeta Desafios.
botonDesafio1.addEventListener("click", async () => {

    await import("./Desafios/desafio1.js");

});


botonDesafio2.addEventListener("click", async () => {

    await import("./Desafios/desafio2.js");

});


botonDesafio3.addEventListener("click", async () => {
    await import("./Desafios/desafio3.js");
});
