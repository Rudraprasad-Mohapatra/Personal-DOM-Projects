const boxElement = document.getElementById("box");

boxElement.addEventListener("mouseover",()=>{
    boxElement.innerText = "you entered in Restricted Area 🙅 (mouse over event is working properly)";
})
boxElement.addEventListener("mouseout",()=>{
    boxElement.innerText = "Restricted Area 🙅";
})