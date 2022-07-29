const navSlide = () => {
    const cheese = document.querySelector('.cheese');
    const nav = document.querySelector('.links');
    const navLinks = document.querySelectorAll('.links li');
    // toggle nav
    cheese.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        // animate links
        navLinks.forEach((link, index) => {
            link.style.animation = `navLinksFade 0.5s ease forwards $(index /7 + 2 )s`;
        });
        // cheese animation
        cheese.classList.toggle('toggle');
    });
}
navSlide();