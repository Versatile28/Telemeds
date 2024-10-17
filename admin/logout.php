<?php
session_start();

$_SESSION['admin_name']="";
$_SESSION['admin_email']="";
$_SESSION['admin_role']="";

session_destroy();
header("Location: index.php");
?>
