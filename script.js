const logo = document.querySelector("img");
const lista= document.querySelector(".menu");
const roleta= document.querySelector("main img");

function abrirMenu(){
    // if(lista.classList.contains(".menu")){
    //     lista.classList.remove("ativo");

    // }
    // else{
    //     lista.classList.add("ativo");
    // }
    lista.classList.toggle("ativo");
}

function rodaAroda(){
    roleta.classList.toggle("roda-jequiti");
}


logo.onclick = abrirMenu;
roleta.onclick = rodaAroda;