// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//array
let amigos = [];

//Agregar amigos
function agregarAmigo(){
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    //Campo vacio
    if(nombreAmigo === ""){
        alert("Por favor ingresa un nombre");
        return;
    }

    //Nombre duplicado
    if(amigos.includes(nombreAmigo)){
        alert(`Tu amigo(a) ${nombreAmigo} ya está en la lista`);
        return;
    }

    //Agregar nombre a la lista
    amigos.push(nombreAmigo);

    //Limpiar campo de entrada
    inputAmigo.value = "";

    //Actualizar lista
    actualizarLista();

}

//Actualizar la lista de amigos en la interfaz  
function actualizarLista(){
    const listaAmigos = document.getElementById("listaAmigos");

    listaAmigos.innerHTML = "";

    for(let i = 0; i <amigos.length; i++){
        const li = document.createElement("li");
        li.textContent = amigos [i];
        listaAmigos.appendChild(li);
    }
}

//Seleccionar amigo aleatorio
function sortearAmigo() {
    if(amigos.length === 0){
        alert("No hay amigos disponibles para sortear");
        return;
    }

   //indice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //Obtener nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    //Mostrar el resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;

}

