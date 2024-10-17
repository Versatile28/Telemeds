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


$json = file_get_contents('php://input');
$result = json_decode($json,true);
//print_r($result);

$description="";
$date="";
$time="";
$patient_id="";
$doctor_id="";
$fees="";
$eprescription_id="";
$meeting_link="";

foreach($result as $name => $value) {
	                                    
	                                    
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


$sql="insert into appointment ( description, date, time, patient_id, doctor_id, fees, eprescription_id, meeting_link ) values ( '$description' , '$date' , '$time', '$patient_id', '$doctor_id', '$fees', '$eprescription_id', '$meeting_link' )";	
	//echo $sql;							
try
{	
	$qres=mysqli_query($connection,$sql);
	$ret_val = array("code"=>"1", "message"=>"Data Inserted" );								
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
	$ret_val = array("status" => 0, "message" => "invalid calling method. Should be POST");
	header('Content-Type: application/json; charset=utf-8');
	echo json_encode($ret_val);
}

 
?>