<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Database connection
    include 'dbcon.php';

    // Get user input
    $username = $_POST["username"];
    $password = $_POST["password"];
    $fullname = $_POST["fullname"];
    $email = $_POST["email"];
    $favorite_team = $_POST["favorite_team"];
    $favorite_circuit = $_POST["favorite_circuit"];
    $favorite_first_driver = $_POST["favorite_first_driver"];
    $favorite_team_principal = $_POST["favorite_team_principal"];
    $favorite_second_driver = $_POST["favorite_second_driver"];
    $favorite_grand_prix = $_POST["favorite_grand_prix"];

    // Check if the username already exists
    $check_query = "SELECT * FROM users WHERE username = '$username'";
    $result = $con->query($check_query);

    if ($result->num_rows > 0) {
        $error = "Username already exists.";
    } else {
        // Insert new user into the database
        $insert_query = "INSERT INTO users (username, password, fullname, email, favorite_team, favorite_circuit, favorite_first_driver, favorite_team_principal, favorite_second_driver, favorite_grand_prix) VALUES ('$username', '$password', '$fullname', '$email', '$favorite_team', '$favorite_circuit', '$favorite_first_driver', '$favorite_team_principal', '$favorite_second_driver', '$favorite_grand_prix')";
        if ($con->query($insert_query) === TRUE) {
            // Registration successful, show alert and ask to go to login page
            echo '<script>alert("Registration successful! Please go to the login page."); window.location = "login.php";</script>';
            exit();
        } else {
            $error = "Error: " . $con->error;
        }
    }
}
?>
<!-- Your HTML registration form here -->
<!-- Add CSS for the registration form -->
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
    <form action="register.php" method="post">
        <h2>User Registration</h2>

        <label for="username">Username:</label>
        <input type="text" name="username" required>

        <label for="password">Password:</label>
        <input type="password" name="password" required>

        <label for="fullname">Full Name:</label>
        <input type="text" name="fullname" required>

        <label for="email">Email:</label>
        <input type="email" name="email" required>

        <label for="favorite_team">Favorite Team:</label>
        <input type="text" name="favorite_team" required>

        <label for="favorite_circuit">Favorite Circuit:</label>
        <input type="text" name="favorite_circuit" required>

        <label for="favorite_first_driver">Favorite First Driver:</label>
        <input type="text" name="favorite_first_driver" required>

        <label for="favorite_team_principal">Favorite Team Principal:</label>
        <input type="text" name="favorite_team_principal" required>

        <label for="favorite_second_driver">Favorite Second Driver:</label>
        <input type="text" name="favorite_second_driver" required>

        <label for="favorite_grand_prix">Favorite Grand Prix:</label>
        <input type="text" name="favorite_grand_prix" required>

        <input type="submit" value="Register">
        
        <p>Already Registered?></p>
        <a href="login.php"> Click Here</a>
    </form>
</body>
</html>
