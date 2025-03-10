document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menuIcon");
    const offcanvas = document.getElementById("offcanvasMenu");
    const closeIcon = document.getElementById("closeOffcanvas");

    // Open the offcanvas menu
    menuIcon.addEventListener("click", function () {
        offcanvas.classList.add("show");
    });

    // Close the offcanvas menu
    closeIcon.addEventListener("click", function () {
        offcanvas.classList.remove("show");
    });

    // Close offcanvas if clicked outside
    document.addEventListener("click", function (event) {
        if (!offcanvas.contains(event.target) && !menuIcon.contains(event.target)) {
            offcanvas.classList.remove("show");
        }
    });
});