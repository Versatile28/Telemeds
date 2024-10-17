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
$id="";


$description="";
$image="";
$patient_id="";

foreach($result as $name => $value) {
	                                    if ( strcmp($name,"id")==0)
										{
											$id=$value;											
										}
	                                    
										if ( strcmp($name,"description")==0)
										{
											$description=$value;											
										}
										if ( strcmp($name,"image")==0)
										{
											$image=$value;											
										}
										if ( strcmp($name,"patient_id")==0)
										{
											$patient_id=$value;											
										}
}


	$sql="update medical_reports set description='$description', image='$image', patient_id='$patient_id' where id='$id' ";	
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