 let cervejas = ["Guiness", "Desperados","Becks", "1", "3", "2"];

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


    let div = document.getElementById("meu amor")
    let ordenadas = sorted.map(transformar)
    div.innerHTML = `${ordenadas.join("<br>")}`
    null;
}

function abc (){



    let elemento = cervejas[Math.floor(Math.random() * (cervejas.length))];
  
    console.log(`${elemento} ${elemento.length}`);

    let div = document.getElementById("meu amor")
    let random = cervejas.map(transformar)
    div.innerHTML = `${random.join("<br>")}`
    console.log(`${cervejas}`)
    
}

    




let botao = document.getElementById("buttonCarregar")
botao.addEventListener("click", carregarDiv)

let ordenar = document.getElementById("ordenar")
ordenar.addEventListener("click", ordenada)

let embaralhar = document.getElementById("embaralhar")
embaralhar.addEventListener("click", abc)

// const str = ['Life', 'a'];

// console.log(`${str} ${str.length}`);