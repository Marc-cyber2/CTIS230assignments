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
thebutton = document.getElementById("thebutton");  
otheritem = document.getElementById("buttontest");
thebutton.addEventListener("click", onButtonClick);
function onButtonClick() {  
    otheritem.style.color = "red";  
}
textentry = document.getElementById("myinput");  
textentry.addEventListener("change", onChange);
function onChange() {  
    newtext = myinput.value;  
    otheritem.innerHTML = newtext;  
}