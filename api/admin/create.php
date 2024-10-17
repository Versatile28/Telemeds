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

$admin_name="";
$email="";
$password="";
$role="";

foreach($result as $name => $value) {
	                                    
	                                    
										if ( strcmp($name,"admin_name")==0)
										{
											$admin_name=$value;											
										}
										
										if ( strcmp($name,"email")==0)
										{
											$email=$value;									
										}
										
										if ( strcmp($name,"password")==0)
										{
											$password=$value;											
										}
	
										if ( strcmp($name,"role")==0)
										{
											$role=$value;											
										}
}


$sql="insert into admin ( name, email, password, role ) values ( '$admin_name' , '$email' , '$password', '$role' )";	
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