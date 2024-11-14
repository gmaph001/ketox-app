document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const navbar = document.getElementById("navbar");
  

    // Toggle navbar on menu button click
    menuBtn.addEventListener("click", function (event) {
        navbar.classList.toggle("active");
        event.stopPropagation(); // Prevent click from propagating to the document
    });

    // Collapse navbar when clicking outside
    document.addEventListener("click", function (event) {
        if (!navbar.contains(event.target) && !menuBtn.contains(event.target)) {
            navbar.classList.remove("active");
        }
    });

    // Collapse navbar on scroll
    window.addEventListener("scroll", function () {
        navbar.classList.remove("active");
    });
});

