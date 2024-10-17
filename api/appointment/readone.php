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

$sql="SELECT * from appointment where id='$id'";
$res=mysqli_query($connection,$sql);							
$i=0;	
$id=mysqli_result($res,$i,"id");
$description=mysqli_result($res,$i,"description");	   
$date=mysqli_result($res,$i,"date"); 
$time=mysqli_result($res,$i,"time");
$patient_id=mysqli_result($res,$i,"patient_id");   	
$doctor_id=mysqli_result($res,$i,"doctor_id");
$fees=mysqli_result($res,$i,"fees");
$eprescription_id=mysqli_result($res,$i,"eprescription_id");
$meeting_link=mysqli_result($res,$i,"meeting_link");

header('Content-Type: application/json; charset=utf-8');
$ret_val = array("id"=>$id, "description"=>$description, "date"=>$date, "time"=>$time,"patient_id"=>$patient_id, "doctor_id"=>$doctor_id, "fees"=>$fees,"eprescription_id"=>$eprescription_id, "meeting_link"=>$meeting_link);
	
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
