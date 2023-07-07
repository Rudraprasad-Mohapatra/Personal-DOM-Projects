let inputBox = document.getElementById('input-box');
let display = document.getElementById("display");

console.log(inputBox);
inputBox.addEventListener('keypress',(e)=>{
    display.innerText = "You have pressed " + e.key;
})
document.body.addEventListener('keypress',(e)=>{
    display.innerText = "You have pressed " + e.key;
})