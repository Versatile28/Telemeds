<?php
include("../include/coros.php");
include("../include/connect_db.inc");
$connection = db_connect();	

if ( ! $connection ) 
        {
		print( "cannot connect to database" );
		exit;
	}

if ($_SERVER['REQUEST_METHOD'] === "GET")
{
$apikey = $_SERVER['HTTP_APIKEY'];
if(strcmp($apikey, "Sat1Soumo26082023telemeds") == 0)
{

$id=$_GET['id'];

$sql="SELECT * from e_prescription where id='$id'";
$res=mysqli_query($connection,$sql);							
$i=0;	
$id=mysqli_result($res,$i,"id");
$bp=mysqli_result($res,$i,"bp");	   
$hr=mysqli_result($res,$i,"hr"); 
$temperature=mysqli_result($res,$i,"temperature");

header('Content-Type: application/json; charset=utf-8');
$ret_val = array("id"=>$id, "bp"=>$bp, "hr"=>$hr, "temperature"=>$temperature );
	
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
	$ret_val = array("status" => 0, "message" => "invalid calling method. Should be GET");
	header('Content-Type: application/json; charset=utf-8');
	echo json_encode($ret_val);
}

?>
