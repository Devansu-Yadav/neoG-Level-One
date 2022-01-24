const navItem = document.querySelectorAll(".drawer-navigation");

navItem.forEach(item => {
    item.addEventListener("click", function(event) {
        const navItemActivated = document.querySelector(".nav-item-activated");
        removeActiveClass(navItemActivated);
        addActiveClass(event);
    });
});

function addActiveClass(e) {
    const clickedElem = e.target;
    if(clickedElem.parentNode.nodeName === "A") {
        clickedElem.parentNode.classList.add("nav-item-activated");
    } else if(clickedElem.nodeName === "A") {
        clickedElem.classList.add("nav-item-activated");
    } else if(clickedElem.nodeName === "I") {
        clickedElem.parentNode.parentNode.classList.add("nav-item-activated");
    }
    console.log(clickedElem);
}

function removeActiveClass(itemActivated) {
    console.log("Hello " + itemActivated);
    if(itemActivated != null) {
        itemActivated.classList.remove("nav-item-activated");
    }
}