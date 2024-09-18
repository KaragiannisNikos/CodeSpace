<?php

#   Exercise 3
#   Age Calculator


// Age
$age = 25;

// Calculate days, hours, and minutes
$days = $age * 365;
$hours = $days * 24;
$minutes = $hours * 60;


echo "<h1>Welcome to the Age Calculator!</h1>
        <h2>Your age: $age </h2>
        <h2>You have been alive for: </h2>
        <ul>
            <li>$days days</li>
            <li>$hours hours</li>
            <li>$minutes minutes</li>
        </ul>";
