<?php
//      Functions

function shortMsg()
{
    echo "Hello world!";
}

shortMsg(); // call the function



//       Global variable declared

$globalVar = "Hello, world!";

//A variable declared outside a function has a GLOBAL SCOPE and can only be accessed outside a function:
function myFunction()
{

    // Declare local variable
    $localVar = "Hello, PHP!";
    echo "<p>Variable inside function is: $localVar</p>"; //This will work
    echo "<p>Variable outside the function $globalVar</p>"; // This will not work
    // The mistake is here on the php, because it is not working. But is an example of mistakes.
}

/*A variable declared within a function has 
a LOCAL SCOPE and can only be accessed within 
that function */
myFunction();

echo "<p>Global variable outside the function $globalVar</p>";
// This will work
echo "<p>Local variable outside the function $localVar</p>";
// This will not work



//      Creating Function

function addNumbers($num1, $num2)
{
    $sum = $num1 + $num2;
    return $sum;
}
$result = addNumbers(3, 5);
echo $result . "<br>"; // Outputs "8"



//      PASSING ARGUMENTS

function displayFullName($firstName, $lastName)
{
    echo "First Name: " . $firstName . "<br>";
    echo "Last Name: " . $lastName . "<br>";
}

// Example usage:
$firstName = "John";
$lastName = "Doe";
displayFullName($firstName, $lastName);


//      RETURNING VALUES

function displayDateTime()
{
    $currentDateTime = date('F j, Y, g:i a');
    echo "Current date and time: " . $currentDateTime . "<br>";
}
displayDateTime();


//      Isset() Function
// (for true or false)

$name = 'John Doe';
if (isset($name)) {
    echo "The variable 'name' is set and has the value: $name";
} else {
    echo "The variable 'name' is not set";
}
