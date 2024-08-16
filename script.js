// Define functions to interact with API
function createUser() {
    const data = {
        first_name: document.getElementById('firstName').value,
        second_name: document.getElementById('secondName').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    fetch('/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('createUserResult').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        })
        .catch(error => console.error('Error:', error));
}

function getUser() {
    const userId = document.getElementById('userId').value;

    fetch(`/user/${userId}`, {
        method: 'GET',
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('getUserResult').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        })
        .catch(error => console.error('Error:', error));
}

function updateUser() {
    const userId = document.getElementById('updateUserId').value;
    const data = {
        first_name: document.getElementById('updateFirstName').value,
        second_name: document.getElementById('updateSecondName').value,
        email: document.getElementById('updateEmail').value,
        password: document.getElementById('updatePassword').value
    };

    fetch(`/user/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('updateUserResult').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        })
        .catch(error => console.error('Error:', error));
}

function deleteUser() {
    const userId = document.getElementById('deleteUserId').value;

    fetch(`/user/${userId}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('deleteUserResult').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        })
        .catch(error => console.error('Error:', error));
}

function searchUser() {
    const email = document.getElementById('searchEmail').value;

    fetch(`/user/search?email=${encodeURIComponent(email)}`, {
        method: 'GET',
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('searchUserResult').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        })
        .catch(error => console.error('Error:', error));
}
