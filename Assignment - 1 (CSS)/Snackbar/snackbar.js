const snackbarBaseline = document.querySelector(".snackbar-baseline");
const snackbarLeading = document.querySelector(".snackbar-leading");
const snackbarStacked = document.querySelector(".snackbar-stacked");
const baselineBtn = document.querySelector(".baseline-btn");
const leadingBtn = document.querySelector(".leading-btn");
const stackedBtn = document.querySelector(".stacked-btn");
const cancelBtn = document.querySelectorAll(".btn-secondary");

cancelBtn.forEach(btn => {
    btn.addEventListener("click", (event) => {
        if(event.target.parentNode.parentNode.nodeName === "DIV") {
            event.target.parentNode.parentNode.classList.add("snackbar-no-display");
        } else {
            event.target.parentNode.classList.add("snackbar-no-display");
        }
    });
});

baselineBtn.addEventListener("click", () => {
    snackbarBaseline.classList.toggle("snackbar-no-display");
})

leadingBtn.addEventListener("click", () => {
    snackbarLeading.classList.toggle("snackbar-no-display");
})

stackedBtn.addEventListener("click", () => {
    snackbarStacked.classList.toggle("snackbar-no-display");
})