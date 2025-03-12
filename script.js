// Hide preloader after loading
window.onload = function() {
    setTimeout(() => {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("main-content").classList.remove("hidden");
    }, 2000);
};

// Toggle Side Menu
function toggleMenu() {
    var menu = document.getElementById("side-menu");
    if (menu.style.right === "0px") {
        menu.style.right = "-250px";
    } else {
        menu.style.right = "0px";
    }
}
