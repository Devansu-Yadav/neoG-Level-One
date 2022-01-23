const inputElem = document.querySelector(".chip-input");
const chipsComponent = document.querySelector(".chips");
const chipsDeleteBtn = document.querySelectorAll(".chip-delete");

inputElem.addEventListener('keypress', function(e) {
    if(e.key === 'Enter' && inputElem.value != "") {
        const chip = document.createElement("span");
        const chipDeleteBtn = document.createElement("button");
        chip.classList.add("chip");
        chipDeleteBtn.classList.add("chip-delete");
        chipDeleteBtn.append("X");
        chip.append(inputElem.value, chipDeleteBtn);
        chipsComponent.append(chip);
        
        chipDeleteBtn.addEventListener("click", function(ev) {
            removeElement(ev);
        });
    }
});

chipsDeleteBtn[0].addEventListener("click", function(e) {
    removeElement(e);
});

function removeElement(event) {
    const parentElem = event.target.parentNode;
    parentElem.remove();
}