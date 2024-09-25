window.onload = function () {
    window.scrollTo(0, 0);
}
document.addEventListener("DOMContentLoaded", function () {
    const grid = document.querySelector('.projects-grid');
    setTimeout(() => {
        grid.classList.add('visible');
    }, 100);
});
window.addEventListener('scroll', function () {
    const backToTopButton = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});
document.getElementById('backToTop').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});