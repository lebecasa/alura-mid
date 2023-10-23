function.tocaSom(idElementoAudio) {
    document.querySelector('#idElementoAudio').play();
}

document.querySelector('.tecla_pom').onclick = tocaSom;

let contador=0;listadeteclas

while(contador<listadeteclas.length){
    listadeteclas[contador].onclick=tocaSom;
    contador=contador+1
}

const listadeteclas=document.querySelectorAll('.tecla');