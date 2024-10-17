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

$patient_name="";
$address="";
$dob="";
$age="";
$email="";
$gender="";
$phone="";
$password="";

foreach($result as $name => $value) {
	                                    
	                                    
										if ( strcmp($name,"name")==0)
										{
											$patient_name=$value;											
										}
										
										if ( strcmp($name,"address")==0)
										{
											$address=$value;											
										}
										
										if ( strcmp($name,"dob")==0)
										{
											$dob=$value;											
										}
	
										if ( strcmp($name,"age")==0)
										{
											$age=$value;											
										}										
										if ( strcmp($name,"email")==0)
										{
											$email=$value;											
										}
										if ( strcmp($name,"gender")==0)
										{
											$gender=$value;											
										}
										if ( strcmp($name,"phone")==0)
										{
											$phone=$value;											
										}
										if ( strcmp($name,"password")==0)
										{
											$password=$value;											
										}
}


	$sql="insert into patients ( name, address, dob, age, email, gender, phone, password ) values ( '$patient_name' , '$address' , '$dob', '$age', '$email', '$gender', '$phone', '$password' )";	
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