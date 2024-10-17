<?php
include("../include/coros.php");
include("../include/connect_db.inc");
$connection = db_connect();	
if ( ! $connection ) 
        {
		print( "cannot connect to database" );
		exit;
	}

if ($_SERVER['REQUEST_METHOD'] === "DELETE")
{
$apikey = $_SERVER['HTTP_APIKEY'];
if(strcmp($apikey, "Sat1Soumo26082023telemeds") == 0)
{

$id=$_GET['id'];

$sql="delete from diagnosis where id='$id'";	
//echo $sql;							
try
{	
	$qres=mysqli_query($connection,$sql);
	$ret_val = array("code"=>"1", "message"=>"Data Deleted" );								
	header('Content-Type: application/json; charset=utf-8');
	echo json_encode($ret_val);
	
}
catch( Exception $e )
{
	$ret_val = array("code"=>"0", "message"=>$e->getMessage() );							
	header('Content-Type: application/json; charset=utf-8');
	echo json_encode($ret_val);
}
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
	$ret_val = array("status" => 0, "message" => "invalid calling method. Should be DELETE");
	header('Content-Type: application/json; charset=utf-8');
	echo json_encode($ret_val);
}
	

 
?>