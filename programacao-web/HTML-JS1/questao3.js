

    const button = document.querySelector('#button')
    button.addEventListener('click',function(){
        document.querySelector('#container')
        .classList.toggle('fade')

    })
    function carregarDiv(){

        let div = document.getElementById("container")

            div.innerHTML = `<h1>Guinness</h1>`

    }



    let container = document.getElementById("button")
    container.addEventListener("click", carregarDiv)                 



