window.onload = function () {
    window.scrollTo(0, 0);
}
window.addEventListener('scroll', function() {
    window.scrollTo(0, 0);
});
document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menuIcon");
    const overlayMenu = document.getElementById("overlayMenu");
    const closeMenu = document.getElementById("closeMenu");
    const mainContent = document.getElementById("mainContent");

    function toggleMenu() {
        overlayMenu.classList.toggle("show");

        if (overlayMenu.classList.contains("show")) {
            mainContent.style.filter = "blur(5px)";
        } else {
            mainContent.style.filter = "";
        }
    }

    if (menuIcon && overlayMenu) {
        menuIcon.addEventListener("click", function() {
            overlayMenu.classList.toggle("show");
        });
        if (closeMenu) {
            closeMenu.addEventListener("click", function() {
                overlayMenu.classList.remove("show");
            });
        }
        window.addEventListener("resize", function() {
            // Überprüfen, ob das Overlay-Menü sichtbar ist
            if (overlayMenu.classList.contains("show")) {
                toggleMenu(); // Menü und Overlay ausblenden
                mainContent.style.filter = ""; // Entferne Blur beim Schließen
            }
        });
    }
});