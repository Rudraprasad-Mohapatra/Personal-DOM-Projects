const boxElement = document.getElementById("box");

boxElement.addEventListener("mouseout",(e)=>{
    boxElement.innerText = "you are at outside of safe zone 🙅 (mouse out event working properly)";
})
boxElement.addEventListener("mouseenter",(e)=>{
    boxElement.innerText = "Safe Zone 😃";
})