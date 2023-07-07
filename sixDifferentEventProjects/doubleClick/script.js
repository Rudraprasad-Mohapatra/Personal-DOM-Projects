const clickElement = document.getElementById("clickMe");

clickElement.addEventListener('dblclick',function(){
    clickElement.innerText = "DoubleClick event is working properly 👍";
})