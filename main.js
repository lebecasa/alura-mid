function.tocaSom(idElementoAudio) {
    document.querySelector('#idElementoAudio').play();
}

document.querySelector('.tecla_pom').onclick = tocaSom;

let contador=0;listadeteclas

while(contador<listadeteclas.length){
    const tecla = listadeteclas[contador];
    const instrumento= tecla.classList[1];
    const idAudio=`#som_$(instrumento)`;
    tecla.onclick = function(){
        tocaSom(idAudio)
    }
tecla.onkeydown = function (evento) {
    if(evento.code = = 'enter')
tecla.classlist.add('ativa')    
}
    tecla.onkeyup = function (){
        tecla.classlist.remove ('ativa')
    }
}
const listadeteclas=document.querySelectorAll('.tecla');
