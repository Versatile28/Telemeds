<?php
session_start();

$email=$_POST['email'];
$password=$_POST['password'];
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "http://localhost/telemeds/api/admin/login.php");
$data = array(
'email' =>$email,
'password' =>$password
);
$payload = json_encode($data);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json','APIKEY:Sat1Soumo26082023telemeds'));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$json = curl_exec($ch);
//echo $json;
$arry = json_decode($json,true);
//print_r($arry);
$code=$arry['code'];
$message=$arry['message'];
if($code == 1){
$id=$arry['id'];
$name=$arry['name'];
$email=$arry['email'];
$role=$arry['role'];

$_SESSION['admin_name']=$name;
$_SESSION['admin_email']=$email;
$_SESSION['admin_role']=$role;

header("Location: admin-home.php");
}else{
  header("Location: index.php");
}

?>