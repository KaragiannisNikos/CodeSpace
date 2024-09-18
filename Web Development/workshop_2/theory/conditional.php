<?php
//      Decision Making

//      if, if..else, elseif

$grade = 85;

if ($grade >= 90) {
    echo "Grade: A";
} elseif ($grade >= 80) {
    echo "Grade: B" . "<br>";
} elseif ($grade >= 70) {
    echo "Grade: C";
} elseif ($grade >= 60) {
    echo "Grade: D";
} else {
    echo "Grade: F";
}

//      Switch Opereator

$day = "Monday";

switch ($day) {
    case "Monday":
        echo "It's Monday!";
        break;
    case "Tuesday":
        echo "It's Tuesday!";
        break;
    case "Wednesday":
        echo "It's Wednesday!";
        break;
    case "Thursday":
        echo "It's Thursday!";
        break;
    case "Friday":
        echo "It's Friday!";
        break;
    case "Saturday":
        echo "It's Saturday!";
        break;
    case "Sunday":
        echo "It's Sunday!";
        break;
    default:
        echo "Invalid day!";
}
