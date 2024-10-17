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
if(strcmp($apikey,"Sat1Soumo26082023telemeds")==0)
{
$json = file_get_contents('php://input');
$result = json_decode($json,true);


$e_prescription_id="";
$med_name="";
$dossage="";

foreach($result as $name => $value) {
	                                    
	                                    
										if ( strcmp($name,"e_prescription_id")==0)
										{
											$e_prescription_id=$value;											
										}
										if ( strcmp($name,"name")==0)
										{
											$med_name=$value;											
										}
										if ( strcmp($name,"dossage")==0)
										{
											$dossage=$value;											
										}
}


	$sql="insert into prescribed_medicines ( e_prescription_id, name, dossage ) values ( '$e_prescription_id' , '$med_name', '$dossage' )";	
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
else{
	$ret_val=array("status"=>0,"message"=>"Unauthorised request");
	header('Content-Type: application/json; charset=utf-8');
	echo json_encode($ret_val);
}	
}
else{
	$ret_val=array("status"=>0,"message"=>"Invalid calling method. Should be POST.");
	header('Content-Type: application/json; charset=utf-8');
	echo json_encode($ret_val);
}
 
?>