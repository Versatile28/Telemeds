<?php
session_start();

$name=$_SESSION['admin_name'];
$email=$_SESSION['admin_email'];
$role=$_SESSION['admin_role'];

if(strlen($email) == 0){
  header("Location: index.php");
}

?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Diagnosis Delete</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Font Awesome -->
  <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css">
  <!-- Ionicons -->
  <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
  <!-- DataTables -->
  <link rel="stylesheet" href="plugins/datatables-bs4/css/dataTables.bootstrap4.min.css">
  <link rel="stylesheet" href="plugins/datatables-responsive/css/responsive.bootstrap4.min.css">
  <!-- overlayScrollbars -->
  <link rel="stylesheet" href="dist/css/adminlte.min.css">
  <!-- Google Font: Source Sans Pro -->
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">
</head>
<body class="hold-transition sidebar-mini">
<!-- Site wrapper -->
<div class="wrapper">
  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>  
    </ul>

    

    
  </nav>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="#" class="brand-link">
      <img src="dist/img/logo.png" alt="logo" width="230" >
      
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          
          
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-book"></i>
              <p>
                Pages
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="admin-home.php" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Admin Home</p>
                </a>
              </li>
			  <li class="nav-item">
                <a href="admin-appointment.php" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Appointment</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="admin-diagnosis.php" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Diagnosis</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="admin-doctor.php" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Doctor</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="admin-e_prescription.php" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>E_prescription</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="admin-medical_reports.php" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Medical_reports</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="admin-patients.php" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Patients</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="admin-prescribed_medicines.php" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Prescribed_medicines</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="admin-prescribed_tests.php" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Prescribed_tests</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="admin-suggested_life_style_changes.php" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Suggested_life_style_changes</p>
                </a>
              </li>            
            </ul>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
                    
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
          <div class="card">
              <div class="card-header">
                <h3 class="card-title">Diagnosis Delete</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                
				  
				  
<?php
$id=$_GET['id'];
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "http://localhost/telemeds/api/diagnosis/delete.php?id=$id");
curl_setopt($ch, CURLOPT_CUSTOMREQUEST,'DELETE');
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json','APIKEY:Sat1Soumo26082023telemeds'));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$json = curl_exec($ch);
//echo $json;
$arry = json_decode($json,true);
//print_r($arry);
$n=count($arry);
echo $arry['message'];

?>           
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </section>
    <!-- /.content -->    
        
		
  </div>
  <!-- /.content-wrapper -->

  <footer class="main-footer">
    
    <center><strong>&copy; 2020 </strong> All rights reserved.</center>
  </footer>

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
  <!-- /.control-sidebar -->
</div>
<!-- ./wrapper -->

<!-- jQuery -->
<script src="plugins/jquery/jquery.min.js"></script>
<!-- Bootstrap 4 -->
<script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- DataTables -->
<script src="../../plugins/datatables/jquery.dataTables.min.js"></script>
<script src="../../plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
<script src="../../plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
<script src="../../plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
<script src="dist/js/adminlte.min.js"></script>
<!-- AdminLTE for demo purposes -->
<script src="dist/js/demo.js"></script>
</body>
</html>