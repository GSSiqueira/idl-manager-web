let acc = document.getElementsByClassName("accordion");
let i;
let burgerIcon = document.getElementById("burgerIcon");

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", toggleDropdown);
}

burgerIcon.addEventListener("click", function () {
    this.classList.toggle("change");
    let navBar = document.getElementById("navBar");
    if (navBar.style.maxHeight) {
        navBar.style.maxHeight = null;
    } else {
        navBar.style.maxHeight = navBar.scrollHeight + "px";/*Gets the element height in pixels to add and create the display effect*/
    }
});

function toggleDropdown() {
    let navBar = document.getElementById("navBar");
    let panel = this.nextElementSibling;
    let heightToSlide = panel.style.maxHeight + navBar.style.maxHeight; 
    this.classList.toggle("active");
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        navBar.style.maxHeight = navBar.scrollHeight + panel.scrollHeight + "px";
        panel.style.maxHeight = panel.scrollHeight + "px";/*Gets the element height in pixels to add and create the display effect*/
    }
}