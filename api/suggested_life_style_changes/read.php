<?php
include("../include/coros.php");
include("../include/connect_db.inc");
$connection = db_connect();	

if ( ! $connection ) 
        {
		print( "cannot connect to database" );
		exit;
	}
if ($_SERVER['REQUEST_METHOD'] === "GET")
{
$apikey = $_SERVER['HTTP_APIKEY'];
if(strcmp($apikey,"Sat1Soumo26082023telemeds")==0)
{
$ret_array=array();

$sql="SELECT * from suggested_life_style_changes";
$res=mysqli_query($connection,$sql);
$num=mysqli_num_rows($res);							
$i=0;
while ( $i < $num )
{	
	$id=mysqli_result($res,$i,"id");
	$e_prescription_id=mysqli_result($res,$i,"e_prescription_id");	   
	$text=mysqli_result($res,$i,"text");

	$ret_val = array("id"=>$id, "e_prescription_id"=>$e_prescription_id, "text"=>$text);
	$ret_array[]=$ret_val;	

	$i++;
}

header('Content-Type: application/json; charset=utf-8');	
echo json_encode($ret_array);
}
else{
	$ret_val=array("status"=>0,"message"=>"Unauthorised request");
	header('Content-Type: application/json; charset=utf-8');
	echo json_encode($ret_val);
}	
}
else{
	$ret_val=array("status"=>0,"message"=>"Invalid calling method. Should be GET.");
	header('Content-Type: application/json; charset=utf-8');
	echo json_encode($ret_val);
}

 
?>
