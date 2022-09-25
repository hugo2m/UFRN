
let cervejas = ["Guiness", "Desperados","Becks"];

function transformar(item){

    return `<table id="marcas">${item}</table>`
}

function carregarDiv() {

    let div = document.getElementById("texto")
    let cervejasHtml = cervejas.map(transformar)
    div.innerHTML = `${cervejasHtml.join("<br>")}`  
}


function ordenada(){

    let sorted = cervejas.sort((a,b)=>{
        if (a<b){
            return -1;
        }else{
            return true;
        }
    });


    let div = document.getElementById("texto")
    let ordenadas = cervejas.map(transformar)
    div.innerHTML = `${ordenadas.join("<br>")}`
}

let botao = document.getElementById("buttonCarregar")
botao.addEventListener("click", carregarDiv)

let ordenar = document.getElementById("ordenar")
ordenar.addEventListener("click", ordenada)
