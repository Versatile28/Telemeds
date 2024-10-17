<?php
session_start();

include("include/connect_db.inc");
$connection = db_connect();	

if ( ! $connection ) 
        {
		print( "cannot connect to database" );
		exit;
	}

$username=$_POST['username'];
$password=$_POST['password'];
$usertype=$_POST['usertype'];
//echo "$username  $password  $usertype";
if(strcmp($usertype,"patient") == 0){
  $sql="SELECT * from patients where email='$username' and password='$password'";
  $res=mysqli_query($connection,$sql);
  $num=mysqli_num_rows($res);
  if($num == 1){						
  $i=0;	
  $id=mysqli_result($res,$i,"id");
  $name=mysqli_result($res,$i,"name");	    
  $email=mysqli_result($res,$i,"email");  	
  
  $_SESSION['id']=$id;
  $_SESSION['name']=$name;
  $_SESSION['email']=$email;
   
   
  header('Location: patient_home.php'); 
  } else {
    header('Location: login.html'); 
  }
}
if(strcmp($usertype,"doctor") == 0){
  $sql="SELECT * from doctor where email='$username' and password='$password'";
  $res=mysqli_query($connection,$sql);
  $num=mysqli_num_rows($res);
  if($num == 1){						
  $i=0;	
  $id=mysqli_result($res,$i,"id");
  $name=mysqli_result($res,$i,"name");	   
  $email=mysqli_result($res,$i,"email");

  $_SESSION['id']=$id;
  $_SESSION['name']=$name;
  $_SESSION['email']=$email;
    
 header('Location: doctor_home.php'); 
  } else {
header('Location: login.html'); 
  }
}



?>
