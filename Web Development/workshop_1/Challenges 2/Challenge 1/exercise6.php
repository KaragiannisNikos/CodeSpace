<?php
/*  Exercise 6
    Multi-Dimensional Arrays 
*/
$studentResult = array(
    "Aarron" => array(
        "Physics" => '74%',
        "English" => '69%',
        "Maths" => '70%'
    ),
    "Jamie" => array(
        "Physics" => '64%',
        "English" => '79%',
        "Maths" => '69%'
    ),
    "Harry" => array(
        "Physics" => '55%',
        "English" => '52%',
        "Maths" => '57%'
    )
);

echo "<h2>Student Results</h2>";

echo "Physics result for Aarron : " . $studentResult['Aarron']['Physics'] . '<br>';
echo "English result for Jamie: " . $studentResult['Jamie']['English'] . '<br>';
echo "Maths result for Harry : " . $studentResult['Harry']['Maths'];
