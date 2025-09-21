// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.ariaValueMax.trim();

    if(nombre === ""){
        alert("Por favor ingresa un nombre");
        return;
    }

    if(amigos.includes(nombreAmigo)){
        alert(`${nombreAmigo} ya esta en la lista, por favor ingresa otro nombre`);
        return;
    }

}