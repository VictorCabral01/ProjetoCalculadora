

function insert (n){

let num = document.getElementById('telaNumeros').innerHTML;

document.getElementById('telaNumeros').innerHTML = num + n ;

    

}

function limpar (){

    document.getElementById('telaNumeros').innerHTML =""
}

function apun (){

    let resultado = document.getElementById('telaNumeros').innerHTML;

    document.getElementById('telaNumeros').innerHTML =  resultado.substring(0, resultado.length -1);
}


const botao = document.getElementById('botao');

botao.addEventListener('click', resultado)

function resultado () {

const resultado = document.getElementById('telaNumeros').innerHTML
if(resultado){
 
    document.getElementById('telaNumeros').innerHTML = eval(resultado);

}

}