<!--          CALCULATOR

  Create a simple calculator program that takes two numbers 
as input and performs basic arithmetic operations on them using PHP operators. 
The program should display the results of each operation.

Requirements 

The program should display a form that allows the user to enter two numbers 
and select an operation (+, -, *, or /).
The program should use PHP operators to perform the selected operation on the two numbers.
The program should display the result of the operation in a user-friendly format.
-->


<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
    Input the first number: <input type="number" name="num1" required><br>

    Input the second number: <input type="number" name="num2" required><br>

    Select an oparetor: <select id="operation" name="operation" type="operation">
        <option value="add">Addition (+)</option>
        <option value="subtract">Subtraction (-)</option>
        <option value="multiply">Multiplication (*)</option>
        <option value="divide">Division (/)</option>
        <option value="exponentiate">Exponentiation (**)</option>
        <option value="remain">Remainder (%)</option>
    </select><br>

    <input type="submit" value="Submit">

</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $num1 = $_POST['num1'];
    $num2 = $_POST['num2'];
    $operation = $_POST['operation'];


    switch ($operation) {
        case 'add':
            $result = $num1 + $num2;
            $operationName = "Addition";
            break;
        case 'subtract':
            $result = $num1 - $num2;
            $operationName = "Subtraction";
            break;
        case 'multiply':
            $result = $num1 * $num2;
            $operationName = "Multiplication";
            break;
        case 'exponentiate':
            $result = $num1 ** $num2;
            $operationName = "Exponentiation";
            break;
        case 'remain':
            $result = $num1 ** $num2;
            $operationName = "Remainder";
            break;
        case 'divide':
            if ($num2 != 0) {
                $result = $num1 / $num2;
                $operationName = "Division";
            } else {
                $result = "Error! Division by zero.";
            }
            break;
        default:
            $result = "Invalid operation selected.";
            break;
    }
    echo "<h3>Result:</h3>";
    echo "<p>{$operationName} of {$num1} and {$num2} is: <strong>{$result}</strong></p>";
}
