function showMessage() {
    alert("Welcome to Online Event Management System!");
}

function registerEvent(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let selectedEvent = document.getElementById("event").value;

    document.getElementById("message").innerHTML =
        "Registration successful! Thank you, " + name +
        ". You registered for " + selectedEvent + ".";

    document.getElementById("message").style.color = "green";
}
function searchEvent() {
    let input = document.getElementById("searchEvent").value.toLowerCase();
    let events = document.getElementsByClassName("event");

    for (let i = 0; i < events.length; i++) {
        let text = events[i].innerText.toLowerCase();

        if (text.includes(input)) {
            events[i].style.display = "block";
        } else {
            events[i].style.display = "none";
        }
    }
}