// Loading Animation
window.onload = function () {
    setTimeout(() => {
        document.querySelector(".loading-screen").style.opacity = "0";
        setTimeout(() => {
            document.querySelector(".loading-screen").style.display = "none";
        }, 1000);
    }, 2000);
};

// Sidebar Menu Toggle
document.querySelector(".menu-btn").addEventListener("click", function () {
    let sidebar = document.querySelector(".sidebar");
    if (sidebar.style.right === "0px") {
        sidebar.style.right = "-250px";
    } else {
        sidebar.style.right = "0px";
    }
});
