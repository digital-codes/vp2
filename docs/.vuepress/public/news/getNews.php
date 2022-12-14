<?php
header("Access-Control-Allow-Methods: GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE, PATCH");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access-control-allow-origin, headers, origin, callback, content-type");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");

$a = file_get_contents("news.json");
$b = json_decode($a,true);


$currentIndex = 0;

function findByIndex($ni)
{
    global $currentIndex;
    return $ni["id"] == $currentIndex;
}


$meth = $_SERVER["REQUEST_METHOD"];
switch ($meth) {
    case "GET":
        if (!empty($_GET["id"])) {
            $currentIndex = filter_var($_GET["id"], FILTER_VALIDATE_INT);
        }
            // no break
        break;
    default:
        die();
  }


$items = array_filter($b,"findByIndex");
if (!is_array($items) || !array_is_list($items)) {
    $items = array_values($items);
}
print(json_encode($items));
die();

?>

