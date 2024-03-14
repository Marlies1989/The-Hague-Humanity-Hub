const mobileMenuButton = document.getElementById('mobileMenuButton');
mobileMenuButton.addEventListener("click", openNav);

function openNav() {
    let menu = document.getElementById('mobileMenu');
    menu.classList.toggle("show");
}