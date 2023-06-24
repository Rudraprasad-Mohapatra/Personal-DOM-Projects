const countVal = document.getElementById("countVal");

const decrementBtn = document.getElementsByClassName("decrementBtn")[0];
const incrementBtn = document.getElementsByClassName("incrementBtn")[0];
const resetBtn = document.getElementsByClassName("resetBtn")[0];
let currentVal = 0;
// decrement
decrementBtn.addEventListener("click",(e)=>{
    console.log("Hii");
    currentVal = currentVal - 1;
    runFunc();
})
// increment
incrementBtn.addEventListener("click",(e)=>{
    currentVal = currentVal + 1;
    runFunc();
})
// reset
    resetBtn.addEventListener("click",(e)=>{
        currentVal = 0;
        runFunc();
    })


let runFunc = ()=>{
    countVal.innerHTML = currentVal;
}

runFunc();
