<?php
session_start();
// Placeholder DB connection
$conn = new mysqli('localhost', 'root', '', 'webfix');
if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}
$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';
if ($email && $password) {
    $stmt = $conn->prepare('SELECT id, username, password FROM users WHERE email = ?');
    $stmt->bind_param('s', $email);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($row = $result->fetch_assoc()) {
        if (password_verify($password, $row['password'])) {
            $_SESSION['user_id'] = $row['id'];
            $_SESSION['username'] = $row['username'];
            header('Location: ../../public/dashboard.html');
            exit();
        } else {
            $error = 'Invalid credentials.';
        }
    } else {
        $error = 'User not found.';
    }
    $stmt->close();
} else {
    $error = 'Please fill in all fields.';
}
$conn->close();
if (isset($error)) {
    echo "<script>alert('$error'); window.location.href='../../public/index.html';</script>";
} 