<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>LOOP Admin | Log in</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <!-- Bootstrap 3.3.4 -->
    <link href="<?= base_url() ?>comum/admin/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <!-- Font Awesome Icons -->
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
    <!-- Theme style -->
    <link href="<?= base_url() ?>comum/admin/css/AdminLTE.css" rel="stylesheet" type="text/css" />
    <!-- iCheck -->
    <link href="<?= base_url() ?>comum/admin/plugins/iCheck/square/blue.css" rel="stylesheet" type="text/css" />
    <!-- login -->
    <link href="<?= base_url() ?>comum/admin/css/login.css" rel="stylesheet" type="text/css" />

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    
    <script>
    	var baseURL = '<?= base_url() ?>';
    </script>
    
  </head>
  <body class="login-page">
    <div class="login-box">
      <div class="login-logo">
        <a href="<?= base_url() ?>">
        	<img src="<?= base_url() ?>comum/imgs/logo.png">
        </a>
      </div><!-- /.login-logo -->
      
      <div class="login-box-header">
      	<img src="<?= base_url() ?>comum/imgs/ajax-loader-box.gif" class="loading">
      	<span>Admin</span>
      </div>
      
      <div class="login-box-body">        
        <form action="" method="post">
          <div class="form-group has-feedback">
            <input type="email" class="form-control" name="login" placeholder="Email" />
            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
          </div>
          <div class="form-group has-feedback">
            <input type="password" class="form-control" name="senha" placeholder="Password" />
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          <div class="row">
            <div class="col-xs-8">
              <div class="checkbox icheck">
                
              </div>
            </div><!-- /.col -->
            <div class="col-xs-4">
              <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
            </div><!-- /.col -->
          </div>
        </form>        

      </div><!-- /.login-box-body -->
    </div><!-- /.login-box -->

    <!-- jQuery 2.1.4 -->
    <script src="<?= base_url() ?>comum/admin/plugins/jQuery/jQuery-2.1.4.min.js" type="text/javascript"></script>
    <!-- Bootstrap 3.3.2 JS -->
    <script src="<?= base_url() ?>comum/admin/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
    <!-- iCheck -->
    <script src="<?= base_url() ?>comum/admin/plugins/iCheck/icheck.min.js" type="text/javascript"></script>
    <script>
      $(function () {
        $('input').iCheck({
          checkboxClass: 'icheckbox_square-blue',
          radioClass: 'iradio_square-blue',
          increaseArea: '20%' // optional
        });
      });
    </script>
    <!-- iCheck -->
    <script src="<?= base_url() ?>comum/admin/js/login.js" type="text/javascript"></script>
  </body>
</html>
