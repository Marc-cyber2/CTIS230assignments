myitem = document.getElementById("firsttest");

myitem.addEventListener("click", onClick);

function onClick() {  
    myitem.style.color = "purple";  
    myitem.style.fontSize = "30px"
}

myitem.addEventListener("mouseout", onmousemove);

function onmousemove() {  
        myitem.style.color = "darkkahki";  
        myitem.style.fontSize = "1em"
}