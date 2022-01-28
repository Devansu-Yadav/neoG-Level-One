const badge = document.querySelector(".badge-on-btn-right .badge-bubble");
const actionBtn = document.querySelector(".badge-on-btn-right .action-btn");

actionBtn.addEventListener("click", function() {
    console.log("Is clicked??");
    badge.classList.toggle("hide-badge");
});