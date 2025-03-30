<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Informations</title>
    <link rel="stylesheet" href="style2.css">
</head>
<body>
    <div class="container">
        
        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $firstname = htmlspecialchars($_POST["firstname"]);
            $lastname = htmlspecialchars($_POST["lastname"]);
            $email = htmlspecialchars($_POST["email"]);
            $phonenumber = htmlspecialchars($_POST["phonenumber"]);
            $birthdate = htmlspecialchars($_POST["birthdate"]);
            $gender = htmlspecialchars($_POST["gender"]);

            echo "<h2>Registration Successful</h2>";
            echo "<p><strong>First Name:</strong> $firstname</p>";
            echo "<p><strong>Last Name:</strong> $lastname</p>";
            echo "<p><strong>Email:</strong> $email</p>";
            echo "<p><strong>Phone Number:</strong> $phonenumber</p>";
            echo "<p><strong>Birth Date:</strong> $birthdate</p>";
            echo "<p><strong>Gender:</strong> $gender</p>";
            echo '<a href="index.php" class="btn">Go Back</a>';
        } else {
            echo "<h2>Error: No data received!</h2>";
            echo '<a href="index.php" class="btn">Go Back</a>';
        }
        ?>
    </div>
</body>
</html>
