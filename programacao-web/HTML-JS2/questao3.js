
let cervejas = ["Guiness", "Desperados","Becks"]

function transformar(item){

    return `<table id="marcas">${item}</table>`
}





function carregarDiv() {

    let div = document.getElementById("texto")
    let cervejasHtml = cervejas.map(transformar)
    div.innerHTML = `${cervejasHtml.join("<br>")}`
}


let botao = document.getElementById("buttonCarregar")
botao.addEventListener("click", carregarDiv)
