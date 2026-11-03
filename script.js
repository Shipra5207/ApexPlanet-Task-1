// Select the welcome button

const welcomeButton = document.getElementById("welcomeBtn");


// Add click event to the button

welcomeButton.addEventListener("click", function () {

    alert("Hello Shipra! Welcome to my personal website. Thank you for visiting!");

});


// Automatically display the current year

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();