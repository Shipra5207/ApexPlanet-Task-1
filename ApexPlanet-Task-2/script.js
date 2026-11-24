
// Contact Form Validation
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all fields!";
        formMessage.style.color = "red";
    }
    else if (!emailPattern.test(email)) {
        formMessage.textContent = "Please enter a valid email address!";
        formMessage.style.color = "red";
    }
    else {
        formMessage.textContent = "Thank you! Your form is submitted successfully.";
        formMessage.style.color = "green";

        contactForm.reset();
    }
});


// Dynamic To-Do List
const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", function() {
    const taskText = todoInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");

    span.textContent = taskText;
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);

    todoInput.value = "";
});
