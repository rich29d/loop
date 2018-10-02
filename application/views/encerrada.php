<?php $this->load->helper('url'); ?>

<!doctype html>
<html lang="pt-br">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-with, initial-scale=1.0">

<title>Inscrição Loop</title>

<!-- Fonts -->
<link href='https://fonts.googleapis.com/css?family=Archivo+Black|Paytone+One' rel='stylesheet' type='text/css'>
<!-- Estilo global -->
<link href="<?= base_url() ?>comum/css/global.css" rel="stylesheet" />
<!-- Estilo geral -->
<link href="<?= base_url() ?>comum/css/estilo.css" rel="stylesheet" />
<!-- Font Awesome Icons -->
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
<script>
var baseURL = '<?= base_url() ?>';
</script>

</head>
<body class="area_aluno">
<header>
	
    <div class="cont_header">
    
        
        
        <nav>
            <ul>
                <li><a href="javascript:void(0);">site</a></li>
                
                <?php if($status == 2){ ?>
                
                <li>
                	<a href="javascript:menu_desk.chama_login();">consultar</a>
                	
                   
                    
                        <div class="cont_login">
                            <form action="" method="post">
                                <div class="seta"></div>
                                <div class="campos">
                                    
                                    <div class="campo tabela cmp_rgm">
                                        <div class="icone_campo celula"><i class="fa fa-id-card" ></i></div>
                                        <div class="celula"><input type="number" name="rgm" placeholder="RGM" maxlength="12"></div>
                                        <div class="msg_erro">
                                            <p>Texto</p>
                                        </div>
                                    </div>
                                    
                                    <div class="campo tabela cmp_email">
                                        <div class="icone_campo celula"><i class="fa fa-envelope"></i></div>
                                        <div class="celula"><input type="text" name="email" placeholder="Email" maxlength="100"></div>
                                        <div class="msg_erro">
                                            <p>Texto</p>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                                <div class="cont_enviar">
                                    <button class="enviar" type="submit">
                                        <img src="comum/imgs/ajax-loader-btn.gif" class="loading">
                                        <span>Entrar</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    
                    
                </li>
                
                <?php } ?>
                
            </ul>
            <div class="bt_menu_mob abrir" onClick="menu_mob.abrir();">
            	<img src="comum/imgs/sacuda.png" class="msn_sac" />
            	<i class="fa fa-bars"></i><i class="fa fa-close"></i>
            </div>            
        </nav>
        
    </div>
    
    
</header>



<div class="menu_mob">
	<ul>
        <li><a href="javascript:void(0);">site</a></li>
        <?php if($status == 2){ ?>
        	<li><a href="javascript:menu_mob.chama_login();">consultar</a> </li>
        <?php } ?>
    </ul>
    
    <div class="cont_login">
    	<form action="" method="post">
            <div class="campos">
                
                <div class="campo tabela cmp_rgm">
                    <div class="icone_campo celula"><i class="fa fa-id-card" ></i></div>
                    <div class="celula"><input type="number" name="rgm" placeholder="RGM"></div>
                    <div class="msg_erro">
                        <p>Texto</p>
                    </div>
                </div>
                
                <div class="campo tabela cmp_email">
                    <div class="icone_campo celula"><i class="fa fa-envelope"></i></div>
                    <div class="celula"><input type="text" name="email" placeholder="Email"></div>
                    <div class="msg_erro">
                        <p>Texto</p>
                    </div>
                </div>
                
            </div>
            
            <div class="cont_enviar">
                <button class="enviar left" type="button" onClick="menu_mob.esconde_login();">
                    <img src="comum/imgs/ajax-loader-btn.gif" class="loading">
                    <span>Voltar</span>
                </button>
                <button class="enviar" type="submit">
                    <img src="comum/imgs/ajax-loader-btn.gif" class="loading">
                    <span>Entrar</span>
                </button>
            </div>
        </form>
    </div>
    
</div>



<div class="cont_form" style="display:none"></div>

<article>

    <section class="sec_1">
    
        <div class="cont_det">
            <div class="det_esq">
                <div class="det_tip_1">
                    <div class="det d1"></div>
                    <div class="det d2"></div>            
                </div>
                <div class="det_tip_2">
                    <div class="det d1"></div>
                    <div class="det d2"></div>
                    <div class="det d3"></div>
                </div>
            </div>
            <div class="det_dir">
                <div class="det_tip_2">
                    <div class="det d1"></div>
                </div>
                <div class="det_tip_1">
                    <div class="det d1"></div>
                </div>
            </div>
        </div>
    
        
        <div class="fundo fundo_1">
        
      		<div class="logo logo_encerrada">
                <img src="<?= base_url() ?>comum/imgs/logo.png">
            </div>
            
            <div class="cont_msg_encerrada tabela">
            	<div class="msg_encerrada celula">
                	
                    <?php 
					
						switch($status){
						
							case 0 : $msg_status = 'Aguarde, em breve<br>inscrições serão abertas'; break;	
							case 2 : $msg_status = 'Inscrições encerradas'; break;	
							case 3 : $msg_status = 'Edição finalizada'; break;	
							
						}
						
						echo $msg_status;
					
					?>
                </div>
            </div>
            
        </div>
        
        
        
        
        
        
    </section>
        
    <div class="cont_aviso">
    	<div class="aviso">
        	<p> aviso </p>
        </div>
    </div>
    
</article>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="<?= base_url() ?>comum/js/jquery.ios-shake.js"></script>
<script src="<?= base_url() ?>comum/js/jquery.ui.shake.js"></script>
<script src="<?= base_url() ?>comum/js/script.js"></script>

<script>
$.shake({ callback: function() {
	if(!menu_mob.status) menu_mob.abrir();
	else menu_mob.fechar();
  }
});
</script>
</body>
</html>