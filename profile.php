<?php
session_start();

if (!isset($_SESSION["user_id"])) {
    header("Location: login.php");
    exit();
}

include 'dbcon.php';

// Get user details
$user_id = $_SESSION["user_id"];
$sql = "SELECT * FROM users WHERE id = '$user_id'";
$result = $con->query($sql);

if ($result->num_rows == 1) {
    $user = $result->fetch_assoc();
} else {
    session_destroy();
    header("Location: login.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Profile</title>
    <!-- Add CSS for the profile display form -->
    <style>
        body {
            background-color: #222;
            color: #fff;
            font-family: Arial, sans-serif;
        }

        .profile {
            width: 300px;
            margin: 0 auto;
            padding: 20px;
            background-color: #333;
            border-radius: 5px;
        }

        h2 {
            text-align: center;
        }

        .profile p {
            margin-bottom: 5px;
        }

        .profile label {
            font-weight: bold;
        }

        .logout-btn {
            display: block;
            width: 100%;
            padding: 10px;
            margin-top: 20px;
            background-color: #dc3545;
            color: #fff;
            border: none;
            border-radius: 3px;
            cursor: pointer;
            text-align: center;
            text-decoration: none;
        }

        .logout-btn:hover {
            background-color: #c82333;
        }
    </style>
</head>

<body>
    <div class="profile">
        <h2>User Profile</h2>

        <p><label for="username">Username:</label> <?php echo $user["username"]; ?></p>
        <p><label for="fullname">Full Name:</label> <?php echo $user["fullname"]; ?></p>
        <p><label for="email">Email:</label> <?php echo $user["email"]; ?></p>
        <p><label for="favorite_team">Favorite Team:</label> <?php echo $user["favorite_team"]; ?></p>
        <p><label for="favorite_circuit">Favorite Circuit:</label> <?php echo $user["favorite_circuit"]; ?></p>
        <p><label for="favorite_first_driver">Favorite First Driver:</label> <?php echo $user["favorite_first_driver"]; ?></p>
        <p><label for="favorite_team_principal">Favorite Team Principal:</label> <?php echo $user["favorite_team_principal"]; ?></p>
        <p><label for="favorite_second_driver">Favorite Second Driver:</label> <?php echo $user["favorite_second_driver"]; ?></p>
        <p><label for="favorite_grand_prix">Favorite Grand Prix:</label> <?php echo $user["favorite_grand_prix"]; ?></p>

        <a class="logout-btn" href="login.php">Logout</a>
        <a class ="logout-btn" href="index.php"> Back To Home</a>
    </div>
</body>

</html>
