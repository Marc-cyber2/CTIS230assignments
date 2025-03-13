myitem = document.getElementById("firsttest");

myitem.addEventListener("click", onClick);

myitem.addEventListener("move", onmousemove);
function onClick() {  
    myitem.style.color = "black";  
    myitem.style.fontSize = "30px"
}