<?php 

include ("connection.php") ;

$query = $mysqli->prepare("select * from news");

$query->execute();

$array= $query->get_result();
$response = [];

while ($a =$array->fetch_assoc()){
    $response[] = $a ;
}

echo json_encode($response);

?>