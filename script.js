document.getElementById("createUserForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const data = {
        first_name: document.getElementById("firstName").value,
        second_name: document.getElementById("secondName").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };
    fetch("http://localhost:8080/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(response => response.json())
        .then(data => displayResponse(data));
});

document.getElementById("getUserForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const userId = document.getElementById("userId").value;
    fetch(`http://localhost:8080/user/${userId}`)
        .then(response => response.json())
        .then(data => displayResponse(data));
});

document.getElementById("updateUserForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const userId = document.getElementById("updateUserId").value;
    const data = {
        first_name: document.getElementById("updateFirstName").value,
        second_name: document.getElementById("updateSecondName").value,
        email: document.getElementById("updateEmail").value,
        password: document.getElementById("updatePassword").value
    };
    fetch(`http://localhost:8080/user/${userId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(response => response.json())
        .then(data => displayResponse(data));
});

document.getElementById("deleteUserForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const userId = document.getElementById("deleteUserId").value;
    fetch(`http://localhost:8080/user/${userId}`, {
        method: "DELETE"
    }).then(response => response.json())
        .then(data => displayResponse(data));
});

document.getElementById("getAllUsers").addEventListener("click", function() {
    fetch("http://localhost:8080/users")
        .then(response => response.json())
        .then(data => displayResponse(data));
});

function displayResponse(data) {
    const responseDiv = document.getElementById("response");
    responseDiv.textContent = JSON.stringify(data, null, 2);
}
