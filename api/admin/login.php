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
foreach($result as $name => $value) {
	                                    
										if ( strcmp($name,"email")==0)
										{
											$email=$value;											
										}
										if ( strcmp($name,"password")==0)
										{
											$password=$value;											
										}
}

$sql="SELECT * from admin where email='$email' and password='$password' ";
$res=mysqli_query($connection,$sql);
$num=mysqli_num_rows($res);
if($num==1) {							
$i=0;
$id=mysqli_result($res,$i,"id");
$name=mysqli_result($res,$i,"name");
$email=mysqli_result($res,$i,"email");;
$password=mysqli_result($res,$i,"password");
$role=mysqli_result($res,$i,"role");

$ret_val = array("code"=>1, "message"=>"Login succesful", "id"=>$id, "name"=>$name, "email"=>$email, "role"=>$role);
header('Content-Type: application/json; charset=utf-8');
echo json_encode($ret_val);
}
else{
	$ret_val = array("code"=>0, "message"=>"Invalid credentials");
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
