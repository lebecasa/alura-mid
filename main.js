function.tocaSom(idElementoAudio){
    document.querySelector('#idElementoAudio').play();
}

const listadeTeclas = document.queryselectorAll('.tecla');

let contador=0;

for (let contador = 0; contador < listaDeTeclas.lenght; contador++) {
    
    const tecla = listadeteclas[contador];
    const instrumento= tecla.classList[1];
    const idAudio=`#som_$(instrumento)`; //template string
   
    tecla.onclick = function(){
        tocaSom(idAudio);
    }

 tecla.onkeydown = function (evento) {
        
    if(evento.code = = = 'enter'//evento.code = = = 'Space'){
    tecla.classlist.add('ativa');   
}
}
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }
}
