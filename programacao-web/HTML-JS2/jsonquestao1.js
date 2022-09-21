//<script>

let cervejas = ["Guiness", "Desperados","Becks"]

function transformar(item){

    return `<div id="marcas">${item}</div>`
}

function carregarDiv() {
    
    let div = document.getElementById("meu amor")
    let cervejasHtml = cervejas.map(transformar)
    div.innerHTML = `${cervejasHtml.join("\n")}`


}

let botao = document.getElementById("buttonCarregar")
botao.addEventListener("click", carregarDiv)

//</script>