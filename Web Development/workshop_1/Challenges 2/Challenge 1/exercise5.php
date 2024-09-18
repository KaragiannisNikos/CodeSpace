<?php

/*          Exercise 5

        Associative Arrays 

Create and initialise an array variable using a suitable 
variable name to display the following values for 
climate in Edinburgh:

The “hottest” months in Edinburgh are normally July 
and August. During summer, the average low 
temperatures are 52°F (11°C) and average highs are 66°F (19°C)

The coldest months of the year are January and 
February, with average lows of 33.8°F (1°C) and 
highs that rarely exceed 44.6°F (7°C).
*/

$summer = "July-Aug";
$winter = "Jan-Feb";
$temperature = array("summer_low" => 11, "summer_high" => 19, "winter_low" => 1, "winter_high" => 7);


echo "<table  class=\"table table-condensed\">
	  <tr><h2>Average Temperature in Edinburgh</h2></tr>
	  <tr>
	    <th>Month</th>
	    <th>High</th>
	    <th>Low</th>
	  </tr>
				
	  <tr>
	   <th>$summer</th> 
	   <th> " . $temperature['summer_high'] . " &#8451; </th>
	   <th> " . $temperature['summer_low'] . " &#8451; </th>
	  </tr>
			
	  <tr>
	   <th>$winter</th>
	   <th> " . $temperature['winter_high'] . " &#8451; </th>
	   <th> " . $temperature['winter_low'] . " &#8451; </th>
	  </tr>
	</table>";
