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

$e_prescription_id="";
$text="";

foreach($result as $name => $value) {
	                                    if ( strcmp($name,"id")==0)
										{
											$id=$value;											
										}	                                    
										if ( strcmp($name,"e_prescription_id")==0)
										{
											$e_prescription_id=$value;											
										}
										if ( strcmp($name,"text")==0)
										{
											$text=$value;											
										}
}

	$sql="update prescribed_tests set e_prescription_id='$e_prescription_id', text='$text' where id='$id' ";	
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