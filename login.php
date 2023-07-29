<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    echo 'Form Submitted';
    // Database connection
    include 'dbcon.php';

    // Get user input
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Check user credentials
    $sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
    $result = $con->query($sql);

    if ($result->num_rows == 1) {
        $user = $result->fetch_assoc();
        $_SESSION["user_id"] = $user["id"];
        echo "User ID in session: " . $_SESSION["user_id"];
        header("Location: profile.php");
        exit();
    } else {
        $error = "Invalid username or password.";
    }
}
?>
<!-- Your HTML login form here -->
<!-- Add CSS for the login form -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Registration</title>
    <!-- Add CSS for the registration form -->
    <style>
        body {
            background-color: #222;
            color: #fff;
            font-family: Arial, sans-serif;
        }

        form {
            width: 300px;
            margin: 0 auto;
            padding: 20px;
            background-color: #333;
            border-radius: 5px;
        }

        input[type="text"],
        input[type="password"],
        input[type="email"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            background-color: #444;
            color: #fff;
            border: none;
            border-radius: 3px;
        }

        input[type="submit"] {
            width: 100%;
            padding: 10px;
            background-color: #dc3545;
            color: #fff;
            border: none;
            border-radius: 3px;
            cursor: pointer;
        }

        input[type="submit"]:hover {
            background-color: #c82333;
        }

        .error {
            color: #dc3545;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <form action="login.php" method="post">
        <h2>User Login</h2>

        <label for="username">Username:</label>
        <input type="text" name="username" required>

        <label for="password">Password:</label>
        <input type="password" name="password" required>

        <input type="submit" value="Login">
    </form>
</body>
</html>

