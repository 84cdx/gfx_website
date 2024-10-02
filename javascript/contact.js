document.addEventListener("DOMContentLoaded", function () {

    var elements = document.querySelectorAll('.fade-in');

    elements.forEach(function (element) {
        setTimeout(function () {
            element.classList.add('visible');
        }, 20);
    });
});