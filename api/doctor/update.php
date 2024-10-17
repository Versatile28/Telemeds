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
$doc_name="";
$address="";
$email="";
$phone="";
$dob="";
$qualification="";
$experience="";
$speciality="";
$fees="";
$password="";

foreach($result as $name => $value) {
	                                    
	                  if ( strcmp($name,"id")==0)
										{
											$id=$value;											
										}
										
										if ( strcmp($name,"name")==0)
										{
											$doc_name=$value;											
										}
										
										if ( strcmp($name,"address")==0)
										{
											$address=$value;											
										}
										
										if ( strcmp($name,"email")==0)
										{
											$email=$value;											
										}
	
										if ( strcmp($name,"phone")==0)
										{
											$phone=$value;											
										}										
										if ( strcmp($name,"dob")==0)
										{
											$dob=$value;											
										}
										if ( strcmp($name,"qualification")==0)
										{
											$qualification=$value;											
										}
										if ( strcmp($name,"experience")==0)
										{
											$experience=$value;											
										}
										if ( strcmp($name,"speciality")==0)
										{
											$speciality=$value;											
										}
										if ( strcmp($name,"fees")==0)
										{
											$fees=$value;											
										}
										if ( strcmp($name,"password")==0)
										{
											$password=$value;											
										}
}


	$sql="update doctor set name='$doc_name', address='$address', email='$email', phone='$phone', dob='$dob', qualification='$qualification', experience='$experience', speciality='$speciality', fees='$fees', password='$password' where id='$id'";	
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