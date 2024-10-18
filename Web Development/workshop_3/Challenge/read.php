<?php
include('includes/nav.php');

require('connect_db.php');

$q = "SELECT * FROM products;";
$r = @mysqli_query($link, $q);
if (mysqli_num_rows($r) != 0) {
    echo '
    <div class="container">
        <h1>Read Records</h1>
        <div class="row">';
    while ($row = mysqli_fetch_array($r, MYSQLI_ASSOC)) {
        echo '
    <div class="col-md-3 d-flex justify-content-center">
        <div class="card" style="width: 18rem;">
            <img src=' . $row['item_img'] . '  class= "card-img-top" alt= "T-shirt">
                <div class="card-body">
                    <h5 class="card-title text-center>' . $row['item_name'] . '</h5>
                    <p class="card-text">' . $row['item_desc'] . '</p>
                </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><p class="text-center">&pound' . $row['item_price'] . '</p></li>
                <li class="list-group-item btn btn-dark"><a class="btn btn-dark btn-lg btn-block" href="update.php?id=' . $row['item_id'] . '">Update</a>
                <li class="list-group-item"><a class="btn btn-danger btn-block" href="delete.php?item_id=' . $row['item_id'] . '">Delete Item</a></li>
            </ul>
        </div>
    </div>';
    }
    echo '</div></div>';

    mysqli_close($link);
} else {
    echo '<p>There are currently no items in this table.</p>';
}

include('includes/footer.php');
exit();
