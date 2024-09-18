<?php
//      WHILE LOOP
$i = 1;
while ($i <= 10)

// code to be executed while the condition is true
{
    echo $i . "<br>";
    $i++;
}


//       DO WHILE

$counter = 0;

do {
    echo "Counter value: $counter" . "<br>";
    $counter++;
} while ($counter < 5);


//      FOR LOOP
for ($i = 1; $i <= 10; $i++) {
    echo $i . "<br>";
}


//      FOR EACH

$people = [
    'Aarron' => 30,
    'Jamie' => 25,
    'Harry' => 40,
];

// Iterating over the associative array
foreach ($people as $name => $age) {
    echo "Name: $name, Age: $age" . "<br>";
}
