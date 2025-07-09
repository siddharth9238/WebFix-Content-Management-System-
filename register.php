<?php
// Placeholder DB connection
$conn = new mysqli('localhost', 'root', '', 'webfix');
if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}
$username = $_POST['username'] ?? '';
$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';
if ($username && $email && $password) {
    $hashed = password_hash($password, PASSWORD_DEFAULT);
    $stmt = $conn->prepare('INSERT INTO users (username, email, password) VALUES (?, ?, ?)');
    $stmt->bind_param('sss', $username, $email, $hashed);
    if ($stmt->execute()) {
        echo "<script>alert('Registration successful! Please sign in.'); window.location.href='../../public/index.html';</script>";
    } else {
        echo "<script>alert('Registration failed: Email may already exist.'); window.location.href='../../public/index.html';</script>";
    }
    $stmt->close();
} else {
    echo "<script>alert('Please fill in all fields.'); window.location.href='../../public/index.html';</script>";
}
$conn->close(); 