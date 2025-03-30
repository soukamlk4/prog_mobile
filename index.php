<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header><h1>Formulaire</h1></header>
        <form action="cible.php" method="post" class="form">

            <div class="input-box">
                <label for="firstname"><b>First Name</b></label>
                <input type="text" name="firstname" required>
            </div>

            <div class="input-box">
                <label for="lastname"><b>Last Name</b></label>
                <input type="text" name="lastname" required>
            </div>

            <div class="input-box">
                <label for="email"><b>Email Address</b></label>
                <input type="email" name="email" required>
            </div>

            <div class="input-box">
                <label for="phonenumber"><b>Phone Number</b></label>
                <input type="text" name="phonenumber" required>
            </div>

            <div class="input-box">
                <label for="password"><b>Password</b></label>
                <input type="password" name="password" required>
            </div>

            <div class="input-box">
                <label for="date"><b>Birth Date</b></label>
                <input type="date" id="date" name="birthdate" required>
            </div>

            <div class="gender-box">
                <h3>Gender</h3>
                <div class="gender-option">
                    <div class="gender">
                        <input type="radio" id="check-male" name="gender" value="male" checked>
                        <label for="check-male">Male</label>
                    </div>
                    <div class="gender">
                        <input type="radio" id="check-female" name="gender" value="female">
                        <label for="check-female">Female</label>
                    </div>
                </div>
            </div>

            <button type="submit" name="submit">Sign Up</button>
        </form>
    </div> 
    <script src="script.js"></script>
</body>
</html>
