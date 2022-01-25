const hamburgerMenu = document.querySelector(".hamburger-menu");
const drawerComp = document.querySelector(".dismissible-drawer-container .drawer-component");
const headerContentContainer = document.querySelector(".dismissible-drawer-container .header-and-content-container");
const originalWidth = headerContentContainer.style.width;

function disableSidebar() {
    drawerComp.classList.add("disable-sidebar");
}

function enableSidebar() {
    drawerComp.classList.remove("disable-sidebar");
}

hamburgerMenu.addEventListener("click", function() {
    if(drawerComp.classList.contains("disable-sidebar")) {
        enableSidebar();
        headerContentContainer.style.width = originalWidth;
    } else {
        disableSidebar();
        headerContentContainer.style.width = "100%";
    }
});