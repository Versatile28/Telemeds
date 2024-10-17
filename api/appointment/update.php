<?php
include("../include/coros.php");
include("../include/connect_db.inc");
$connection = db_connect();	
if ( ! $connection ) 
        {
		print( "cannot connect to database" );
		exit;
	}


if ($_SERVER['REQUEST_METHOD'] === "PATCH")
{
$apikey = $_SERVER['HTTP_APIKEY'];
if(strcmp($apikey, "Sat1Soumo26082023telemeds") == 0)
{


$json = file_get_contents('php://input');
$result = json_decode($json,true);
//print_r($result);

$id="";
$description="";
$date="";
$time="";
$patient_id="";
$doctor_id="";
$fees="";
$eprescription_id="";
$meeting_link="";

foreach($result as $name => $value) {
	                                    
	                	if ( strcmp($name,"id")==0)
										{
											$id=$value;											
										}
										
										if ( strcmp($name,"description")==0)
										{
											$description=$value;											
										}
										
										if ( strcmp($name,"date")==0)
										{
											$date=$value;											
										}
										
										if ( strcmp($name,"time")==0)
										{
											$time=$value;											
										}
	
										if ( strcmp($name,"patient_id")==0)
										{
											$patient_id=$value;											
										}										
										if ( strcmp($name,"doctor_id")==0)
										{
											$doctor_id=$value;											
										}
										if ( strcmp($name,"fees")==0)
										{
											$fees=$value;											
										}
										if ( strcmp($name,"eprescription_id")==0)
										{
											$eprescription_id=$value;											
										}
										if ( strcmp($name,"meeting_link")==0)
										{
											$meeting_link=$value;											
										}
}


	$sql="update appointment set description='$description', date='$date', time='$time', patient_id='$patient_id', doctor_id='$doctor_id', fees='$fees', eprescription_id='$eprescription_id', meeting_link='$meeting_link' where id='$id'";
	//echo $sql;							
try
{	
	$qres=mysqli_query($connection,$sql);
	$ret_val = array("code"=>"1", "message"=>"Data Updated" );								
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
	$ret_val = array("status" => 0, "message" => "invalid calling method. Should be PATCH");
	header('Content-Type: application/json; charset=utf-8');
	echo json_encode($ret_val);
}
	

 
?>