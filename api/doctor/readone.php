<?php
include("../include/coros.php");
include("../include/connect_db.inc");
$connection = db_connect();	

if ( ! $connection ) 
        {
		print( "cannot connect to database" );
		exit;
	}



if ($_SERVER['REQUEST_METHOD'] === "POST")
{
$apikey = $_SERVER['HTTP_APIKEY'];
if(strcmp($apikey, "Sat1Soumo26082023telemeds") == 0)
{


$id=$_GET['id'];

$sql="SELECT * from doctor where id='$id'";
$res=mysqli_query($connection,$sql);							
$i=0;	
	$id=mysqli_result($res,$i,"id");
	$name=mysqli_result($res,$i,"name");	   
	$address=mysqli_result($res,$i,"address"); 
	$email=mysqli_result($res,$i,"email");
	$phone=mysqli_result($res,$i,"phone");   	
	$dob=mysqli_result($res,$i,"dob");
	$qualification=mysqli_result($res,$i,"qualification");
	$experience=mysqli_result($res,$i,"experience");
	$speciality=mysqli_result($res,$i,"speciality");
	$fees=mysqli_result($res,$i,"fees");
	$password=mysqli_result($res,$i,"password");

	header('Content-Type: application/json; charset=utf-8');
	$ret_val = array("id"=>$id, "name"=>$name, "address"=>$address, "email"=>$email,"phone"=>$phone, "dob"=>$dob, "qualification"=>$qualification,"experience"=>$experience, "speciality"=>$speciality, "fees"=>$fees, "password"=>$password );

	header('Content-Type: application/json; charset=utf-8');
	echo json_encode($ret_val);


}
else
{
	$ret_val = array("status" => 0, "message" => "unauthorised request");
	header('Content-Type: application/json; charset=utf-8');
	echo json_encode($ret_val);
}
}
else 
{
	$ret_val = array("status" => 0, "message" => "invalid calling method. Should be POST");
	header('Content-Type: application/json; charset=utf-8');
	echo json_encode($ret_val);
}


?>
