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

$bp="";
$hr="";
$temperature="";

foreach($result as $name => $value) {
	                                    
	                                    
										if ( strcmp($name,"bp")==0)
										{
											$bp=$value;											
										}
										
										if ( strcmp($name,"hr")==0)
										{
											$hr=$value;											
										}
										
										if ( strcmp($name,"temperature")==0)
										{
											$temperature=$value;											
										}
}


	$sql="insert into e_prescription ( bp, hr, temperature ) values ( '$bp' , '$hr' , '$temperature' )";	
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