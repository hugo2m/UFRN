
var button = document.getElementById("carregar");

button.addEventListener("click", function() {
    
    var container = document.getElementById("container");
    if(container.style.display === "block"){
        container.style.display = "none";
    } else {
        container.style.display = "block";
    }


})