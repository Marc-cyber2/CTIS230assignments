myitem = document.getElementById("firsttest");

myitem.addEventListener("click", onClick);

myitem.addEventListener("move", mouseout);
function onClick() {  
    myitem.style.color = "green";  
    myitem.style.fontSize = "30px"
}