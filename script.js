function showMessage() {
    alert("Welcome to Online Event Management System!");
}


function registerEvent(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let selectedEvent = document.getElementById("event").value;

    let message = document.getElementById("message");
    let details = document.getElementById("registrationDetails");

    if (name === "") {
        message.innerHTML = "Please enter your name.";
        message.style.color = "red";
        return;
    }

    if (email === "") {
        message.innerHTML = "Please enter your email.";
        message.style.color = "red";
        return;
    }

    if (!email.includes("@")) {
        message.innerHTML = "Please enter a valid email address.";
        message.style.color = "red";
        return;
    }

    if (selectedEvent === "") {
        message.innerHTML = "Please select an event.";
        message.style.color = "red";
        return;
    }

    message.innerHTML = "Registration successful!";
    message.style.color = "green";

    details.innerHTML = `
        <h3>Registration Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Event:</strong> ${selectedEvent}</p>

        <button onclick="editRegistration()">Edit</button>
        <button onclick="deleteRegistration()">Delete</button>
    `;
}

function searchEvent() {

    let input = document.getElementById("searchEvent");
    let searchText = input.value.toLowerCase();

    let events = document.querySelectorAll(".event-card");

    events.forEach(function(event) {

        let eventName = event.querySelector("h3").textContent.toLowerCase();

        if (eventName.includes(searchText)) {
            event.style.display = "block";
        } else {
            event.style.display = "none";
        }

    });
}


function showEventDetails(eventType) {

    if (eventType === "cultural") {

        alert(
            "College Cultural Event\n\n" +
            "Date: 24 October 2026\n" +
            "Time: 11:00 AM\n" +
            "Venue: College Auditorium\n" +
            "Available Seats: 100\n\n" +
            "Enjoy music, dance and cultural performances."
        );

    } else if (eventType === "technical") {

        alert(
            "Technical Symposium\n\n" +
            "Date: 10 October 2026\n" +
            "Time: 10:30 AM\n" +
            "Venue: Seminar Hall\n" +
            "Available Seats: 150\n\n" +
            "Learn and participate in exciting technical events."
        );
    }
}
function editRegistration() {

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let selectedEvent = document.getElementById("event");

    name.focus();

    document.getElementById("message").innerHTML =
        "You can edit your registration details and click Register again.";

    document.getElementById("message").style.color = "blue";
}
function deleteRegistration() {

    let details = document.getElementById("registrationDetails");
    let message = document.getElementById("message");

    details.innerHTML = "";

    message.innerHTML = "Registration deleted successfully.";
    message.style.color = "red";

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("event").value = "";
}
function adminLogin(event) {

    event.preventDefault();

    let username = document.getElementById("adminUsername").value;
    let password = document.getElementById("adminPassword").value;

    if (username === "admin" && password === "1234") {

        window.location.href = "dashboard.html";

    } else {

        let message = document.getElementById("loginMessage");

        message.innerHTML = "Invalid username or password.";
        message.style.color = "red";
    }
}
