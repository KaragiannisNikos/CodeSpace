<!--        $_SERVER      -->

<?php
// Get the request method (e.g. GET, POST, etc.)
$request_method = $_SERVER['REQUEST_METHOD'];
echo "Request Method: $request_method 
" . "<br>";

// Get the script name (e.g. /index.php)
$script_name = $_SERVER['SCRIPT_NAME'];
echo "Script Name: $script_name 
" . "<br>";

// Get the current URL (e.g. http://localhost/index.php?id=123)
$current_url = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
echo "Current URL: $current_url 
" . "<br>";

// Get the user agent string of the client's browser
$user_agent = $_SERVER['HTTP_USER_AGENT'];
echo "User Agent: $user_agent 
" . "<br>";
