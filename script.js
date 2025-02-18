function toggleMenu() {
    const ul = document.querySelector('.nav ul');
    ul.classList.toggle('active');
}
document.addEventListener("DOMContentLoaded", function () {
    const box2 = document.querySelector('.box2');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                box2.classList.add('show');
            }
        });
    }, { threshold: 0.3 }); // Trigger when 30% of the element is visible

    observer.observe(box2);
});
