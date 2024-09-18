<!--        FOR LOOP
Write a PHP program that displays the multiplication 
table of a given number using a for loop.

The program should accept a single input from the 
user, which is the number whose multiplication table 
should be displayed. 
The output should display the multiplication table 
from 1 to 10.
-->

<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
    Input the number: <input type="number" id="num" name="num" required>
    <input type="submit" value="Submit"><br>
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $num = $_POST['num'];

    echo "Multiplication table of " . $num . ":<br>";

    for ($i = 1; $i <= 11; $i++); {
        $sum = $num * $i;
    }

    echo $num . " X " . $i . " = " . $sum;
}
?>