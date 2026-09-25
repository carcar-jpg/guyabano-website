const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const message = document.getElementById("message");

yesButton.addEventListener("click", function() {
    message.textContent = "Great choice! Welcome to the Guyabano investment! 🌱";
});

noButton.addEventListener("mouseover", function() {

    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 100;

    noButton.style.transform = `translate(${x}px, ${y}px)`;

});