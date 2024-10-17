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
  <title>Medical_reports</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Font Awesome -->
  <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css">
  <!-- Ionicons -->
  <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
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

      <!-- Default box -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Medical_reports</h3>
          <div class="card-tools">
            <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
              <i class="fas fa-minus"></i></button>
            <button type="button" class="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
              <i class="fas fa-times"></i></button>
          </div>
        </div>
        <div class="card-body">
          <center>
            <img src="icons/admin-medical_reports.png" width="100px">
            <br>
            Medical_reports
            <br><br>
            <table width="90%">
              <tr>
                <td>
                  <center>
                  <a href="admin-medical_reports-create.php"><img src="icons/admin-create.png" width="60px"></a>
                    <br>
                    <a href="admin-medical_reports-create.php">Create</a>
                  </center>
                </td>
                <td>
                  <center>
                  <a href="admin-medical_reports-edit.php"><img src="icons/admin-edit.png" width="60px"></a>
                    <br>
                    <a href="admin-medical_reports-edit.php">Edit</a>
                  </center>
                </td>
                <td>
                  <center>
                  <a href="admin-medical_reports-delete.php"><img src="icons/admin-delete.png" width="60px"></a>
                    <br>
                    <a href="admin-medical_reports-delete.php">Delete</a>
                  </center>
                </td>
                <td>
                  <center>
                  <a href="admin-medical_reports-display.php"><img src="icons/admin-display.png" width="60px"></a>
                    <br>
                    <a href="admin-medical_reports-display.php">Display</a>
                  </center>
                </td>
              </tr>
            </table>
          </center>
        </div>
        <!-- /.card-body -->
        <div class="card-footer">

        </div>
        <!-- /.card-footer-->
      </div>
      <!-- /.card -->

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
<!-- AdminLTE App -->
<script src="dist/js/adminlte.min.js"></script>
<!-- AdminLTE for demo purposes -->
<script src="dist/js/demo.js"></script>
</body>
</html>
