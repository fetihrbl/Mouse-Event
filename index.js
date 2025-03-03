const mouseXEl = document.getElementById("mouseX");
const mouseYEl = document.getElementById("mouseY");

function updateMousePosition(event) {
    mouseXEl.textContent = event.clientX;
    mouseYEl.textContent = event.clientY; 
}

window.addEventListener("mousemove", (event) => {
    requestAnimationFrame(() => updateMousePosition(event));
});
