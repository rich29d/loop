<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>LOOP | Edições</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <!-- Bootstrap 3.3.4 -->
    <link href="<?= base_url() ?>comum/admin/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <!-- Font Awesome Icons -->
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
    <!-- Ionicons -->
    <link href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" type="text/css" />
    <!-- DATA TABLES -->
    <link href="<?= base_url() ?>comum/admin/plugins/datatables/dataTables.bootstrap.css" rel="stylesheet" type="text/css" />
    <!-- Theme style -->
    <link href="<?= base_url() ?>comum/admin/css/AdminLTE.css" rel="stylesheet" type="text/css" />
    <!-- AdminLTE Skins. Choose a skin from the css/skins
         folder instead of downloading all of them to reduce the load. -->
    <link href="<?= base_url() ?>comum/admin/css/skins/_all-skins.min.css" rel="stylesheet" type="text/css" />
    <!-- daterange picker -->
    <link href="<?= base_url() ?>comum/admin/plugins/daterangepicker/daterangepicker-bs3.css" rel="stylesheet" type="text/css" />
    <!-- Painel style -->
    <link href="<?= base_url() ?>comum/admin/css/painel.css" rel="stylesheet" type="text/css" />
    

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    
    <script>
    	var baseURL = '<?= base_url() ?>';
		var tabela;
		var obj_carregado = false;
    </script>
    
  </head>
  <body class="skin-green">
    <div class="wrapper">
	<?php $this->load->view('partes/menu', array('pag' => 'CURSOS')); ?>
     

      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper">
        

        <!-- Main content -->
        <section class="content">
          <div class="row">
            <div class="col-xs-12">
              
              <div class="box box-novo-item">
                <div class="box-body">
                  <form action="" method="post">
                      <div class="input-group input-group-lg">
                        <input type="text" placeholder="Insira aqui o curso!" name="data" class="form-control">
                        <span class="input-group-btn">
                          <button class="btn btn-danger btn-flat" type="submit">Criar</button>
                        </span>
                      </div>
                  </form>
                  
                </div>
              </div>
              
              <div class="box">
                <div class="box-header">
                  <h3 class="box-title">Lista de cursos</h3>
                  <p class="pull-right msg_status">
                  	<span>Status alterado com sucesso</span>
                    <img src="<?= base_url() ?>comum/imgs/ajax-loader-painel.gif" class="loading">
                    <i class="fa fa-check" aria-hidden="true"></i>
                    <i class="fa fa-times" aria-hidden="true"></i>
                   </p>
                </div><!-- /.box-header -->
                <div class="box-body">
                  <table id="example2" class="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Nome</th>  
                        <th>Nº Semestres</th>             
                        <th>Status</th>                        
                        <th>Data de criação</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                    
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>ID</th>
                        <th>Nome</th>  
                         <th>Nº Semestres</th>               
                        <th>Status</th>                        
                        <th>Data de criação</th>
                        <th></th>
                      </tr>
                    </tfoot>
                  </table>
                </div><!-- /.box-body -->
              </div><!-- /.box -->
				
                
              
            </div><!-- /.col -->
          </div><!-- /.row -->
        </section><!-- /.content -->
      </div><!-- /.content-wrapper -->
      

      

    <!-- jQuery 2.1.4 -->
    <script src="<?= base_url() ?>comum/admin/plugins/jQuery/jQuery-2.1.4.min.js" type="text/javascript"></script>
    <!-- Bootstrap 3.3.2 JS -->
    <script src="<?= base_url() ?>comum/admin/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
    <!-- DATA TABES SCRIPT -->
    <script src="<?= base_url() ?>comum/admin/plugins/datatables/jquery.dataTables.min.js" type="text/javascript"></script>
    <script src="<?= base_url() ?>comum/admin/plugins/datatables/dataTables.bootstrap.min.js" type="text/javascript"></script>
     <!-- date-range-picker -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.2/moment.min.js" type="text/javascript"></script>
    <script src="<?= base_url() ?>comum/admin/plugins/daterangepicker/daterangepicker.js" type="text/javascript"></script>
    <!-- SlimScroll -->
    <script src="<?= base_url() ?>comum/admin/plugins/slimScroll/jquery.slimscroll.min.js" type="text/javascript"></script>
    <!-- FastClick -->
    <script src="<?= base_url() ?>comum/admin/plugins/fastclick/fastclick.min.js" type="text/javascript"></script>
    <!-- AdminLTE App -->
    <script src="<?= base_url() ?>comum/admin/js/app.min.js" type="text/javascript"></script>
     <!-- Painel -->
    <script src="<?= base_url() ?>comum/admin/js/painel.js" type="text/javascript"></script>
     <!-- Painel -->
    <script src="<?= base_url() ?>comum/admin/js/cursos.js" type="text/javascript"></script>
    <!-- page script -->
    <script type="text/javascript">
      $(function () {
		  
		
		tabela = $('#example2').DataTable( {
			"bProcessing": true,
			"sAjaxSource": baseURL + "admin/lista_cursos",
			"lengthChange": true,
            "searching": false,
			"language": {
				"lengthMenu": "_MENU_ linhas por página",
				"zeroRecords": "Nenhum item encontrado",
				"info": "Mostrando _PAGE_ de _PAGES_",
				"infoEmpty": "Nenhum item encontrado",
				"search": "Buscar:",
				"paginate": {
					"first":      "Primeiro",
					"last":       "Último",
					"next":       "Próximo",
					"previous":   "Anterior"
				},
			},
			"aoColumnDefs": [
				{ "bSearchable": false, "bVisible": false,  "aTargets": [ 0 ] },
				{
					
					"bSearchable": true,
					"bSortable": false,
					"mRender": function ( data, type, row ) {
						return "<input type='text' value='" + data + "' class='cmp_tbl' onchange='curso.alterar_coluna(this, \"nome\", " + row[0] + ")' />";
					},
					"fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
						$(nTd).attr('data-id-edicao',String(oData[0]));
					 },
					"aTargets": [ 1 ]
				},
				{
					"bSearchable": true,
					"bSortable": false,
					"mRender": function ( data, type, row ) {
						return "<input type='text' value='" + data + "' class='cmp_tbl number' onchange='curso.alterar_coluna(this, \"quant_semestre\", " + row[0] + ")' />";
					},
					"aTargets": [ 2 ]
				},
				{ "bSearchable": false, "bVisible": false,  "aTargets": [ 3 ] },
				{ "bSearchable": false, "bVisible": false,  "aTargets": [ 4 ] },
				{
					"sClass": "cln_excluir",
					"bSearchable": false,
					"bSortable": false,
					"mRender" : function( data, type, row ){
						return '<a href="javascript:curso.excluir(' + row[0] + ')"><i class="fa fa-times" aria-hidden="true"></i></a>'
					},
					"aTargets": [ 5 ]
				}
			],
			"fnFooterCallback": function( nRow, aData, iDisplayIndex ) {
				
				
				
			}
		})
		
		/*setInterval(function(){
		 tabela.ajax.reload();
		}, 3000);*/
		
		
      });
    </script>
  </body>
</html>
