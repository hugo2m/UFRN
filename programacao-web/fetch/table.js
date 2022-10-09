<script>



      let cervejas = []

      

      //cs é um array de cervejas

      const carregarDiv = (cs,id,l0, obj) => {

         const div = document.getElementById("cervejasDiv")
         const cabecalho = l0.map(item => `<th>${item}</th>`).join("")
         // const itensHtml = cs.map(item => `<tr>` + obj.map(objet</tr>`({name,alcohol,ibu,style}) => `<div>${name} -- ${alcohol} -- ${ibu} -- ${style}</div>` ) 
         const itensHtml = cs.map( item => `<tr>`+ obj.map(cerva=> `<td>${item[cerva]}</td>`).join("")+`</tr>` )

         
         div.innerHTML = `<table class="tableBirita"><tr>${cabecalho}</tr> ${itensHtml.join("\n")} </table>`
         // div.innerHTML = `${itensHtml.join("\n")}`

      }

      

      // async function carregarCervejas(){

      //    try{

      //       let res = await fetch("https://random-data-api.com/api/v2/beers?size=5")

      //       cervejas = await res.json()

      //       carregarDiv(cervejas)

      //    }catch(err){

      //       document.getElementById("cervejasDiv").innerHTML = "Fudeu..."

      //    }

      // }

      async function carregarCervejas(valor=3,link="https://random-data-api.com/api/v2/beers?size=", cab=["Nome", "Alcool", "Amargor", "Estilo"], obj=["name", "alcohol", "ibu", "style"], id="cervejasDiv"){
            try{
                let res = await fetch(link+valor)
                cervejas = await res.json() 
                carregarDiv(cervejas,id, cab, obj)
            }catch(err){
                document.getElementById(id).innerHTML = "Fudeu..."
            }
        }


      



      let botao = document.getElementById("botaoCarregar")

      botao.addEventListener("click", () => carregarCervejas() )                 

      

   </script>
