// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//array
let amigos = [];

//Agregar amigos
function agregarAmigo(){
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.ariaValueMax.trim();

    //Campo vacio
    if(nombre === ""){
        alert("Por favor ingresa un nombre");
        return;
    }

    //Nombre duplicado
    if(amigos.includes(nombreAmigo)){
        alert(`${nombreAmigo} ya esta en la lista, por favor ingresa otro nombre`);
        return;
    }

    //Agregar nombre a la lista
    amigos.push(nombreAmigo);

    //Limpiar campo de entrada
    inputAmigo.ariaValu = "";

    //Actualizar lista
    actualizarLista();

}