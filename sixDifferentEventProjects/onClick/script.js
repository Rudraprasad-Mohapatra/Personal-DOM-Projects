document.addEventListener("DOMContentLoaded", () => {
    const circleContainer = document.getElementById("circle-container");

    circleContainer.addEventListener("click", (e) => {
        var circle = document.createElement("div");
        circle.classList.add("circle");
        circle.style.left = `${e.clientX - 25}px`;
        circle.style.top = `${e.clientY - 25}px`;
        console.log(`${e.clientX},${e.clientY}`);
        circleContainer.appendChild(circle);
    });
});

