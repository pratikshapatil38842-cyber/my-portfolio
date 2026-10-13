// Welcome message when the portfolio loads
window.addEventListener("load", function () {
    console.log("Welcome to my Personal Portfolio!");
});

// Show a message when a navigation link is clicked
document.querySelectorAll("nav a").forEach(function (link) {
    link.addEventListener("click", function () {
        console.log("You opened the " + link.textContent + " section.");
    });
});

// Contact section interaction
function showContactMessage() {
    alert("Thank you for visiting my portfolio!");
}
