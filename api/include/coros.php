<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Authorization, Origin, X-Requested-With, Content-Type, Accept, apikey');

if ( $_SERVER['REQUEST_METHOD']=="OPTIONS")
{
print "";
die();
}

?>
