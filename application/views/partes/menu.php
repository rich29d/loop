<header class="main-header">
        <!-- Logo -->
        <a href="<?= base_url() ?>admin" class="logo">
          <img src="<?= base_url() ?>comum/imgs/logo.png">
        </a>
        <!-- Header Navbar: style can be found in header.less -->
        <nav class="navbar navbar-static-top" role="navigation">
          <!-- Sidebar toggle button-->
          
          <div class="navbar-custom-menu">
            <ul class="nav navbar-nav">
              
              <li>
              	<a href="<?= base_url() ?>admin/consulta_edicoes" class="<?= $pag == 'EDIÇÕES' ? 'active' : '' ?>" >
                  EDIÇÕES
                </a>
              </li>
              
              <li>
              	<a href="<?= base_url() ?>admin/consulta_grupos" class="<?= $pag == 'GRUPOS' ? 'active' : '' ?>" >
                  GRUPOS
                </a>
              </li>    
              
              <li>
              	<a href="<?= base_url() ?>admin/consulta_alunos" class="<?= $pag == 'ALUNOS' ? 'active' : '' ?>" >
                  ALUNOS
                </a>
              </li>    
              
              <li>
              	<a href="<?= base_url() ?>admin/consulta_cursos" class="<?= $pag == 'CURSOS' ? 'active' : '' ?>" >
                  CURSOS
                </a>
              </li> 
              
              <li class="pull-right">
              	<a href="<?= base_url() ?>admin/sair">
                  SAIR
                </a>
              </li>                    
              
            </ul>
          </div>
        </nav>
      </header>