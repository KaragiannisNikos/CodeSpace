<!--        else Statement

1. In this challenge, create a variable $age 
is set the value. 
2. Next create a script that checks the value 
of $age and displays a message based on 
the age group it falls into:
-  If the value of $age is less than 13, 
it displays "You are a child."

-  If the value of $age is between 13 and 17, 
it displays "You are a teenager."

-  If the value of $age is between 18 and 64, 
it displays "You are an adult."

-  If none of the above conditions are met, 
it displays "You are a senior citizen."-->

<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
    Input your age: <input type="number" name="age" required>
    <input type="submit" value="Submit"><br>
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $age = $_POST['age'];


    if ($age < 12) {
        echo "You are a child.";
    } elseif ($age <= 17) {
        echo "You are a teenager.";
    } elseif ($age <= 64) {
        echo "You are an adult.";
    } else {
        echo "You are a senior citizen.";
    }
}
