<?php
//      OPERATORS

//      PHP Operators

//      Arithmetic 
$a = 10;
$b = 5;

echo $a + $b; // Outputs 15
echo $a - $b; // Outputs 5
echo $a * $b; // Outputs 50
echo $a / $b; // Outputs 2
echo $a % $b . "<br>"; // Outputs 0

$a = true;
$b = false;

echo $a && $b; // Outputs false
echo $a || $b; // Outputs true
echo !$a; // Outputs false
echo !$b; // Outputs true

//     logic

$c = true;
$d = false;

echo $c && $d; // Outputs false
echo $c || $d; // Outputs true
echo !$c; // Outputs false
echo !$d . "<br>"; // Outputs true

//      Comparison

$e = 10;
$f = 5;

echo $e == $f; // Outputs false
echo $e != $f; // Outputs true
echo $e > $f; // Outputs true
echo $e < $f; // Outputs false
echo $e >= $f; // Outputs true
echo $e <= $f; // Outputs false