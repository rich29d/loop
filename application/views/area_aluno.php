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
    
        <div class="cont_edicao">
            <div class="num_edicao"><?php echo $edicao[0]?>º EDIÇÃO</div>
            <div class="dat_edicao"><?php echo date("Y", $edicao[1])?></div>
        </div>
        
        <nav>
            <ul>
                <li><a href="javascript:void(0);">site</a></li>
                <li><a href="<?= base_url() . 'logout'?>">sair</a></li>
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
        <li><a href="<?= base_url() . 'logout'?>">sair</a></li>
    </ul>
    
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
        
        	<div class="cont_edicao mobile">
                <div class="num_edicao"><?php echo $edicao[0]?>º EDIÇÃO</div>
                <div class="dat_edicao"><?php echo date("Y", $edicao[1])?></div>
            </div>
        
            <div class="logo">
                <img src="<?= base_url() ?>comum/imgs/logo.png">
            </div>
        </div>
        
        
        <div class="form">
            	
                
                	<?php
						
						switch($aluno->status){
							case 0: $status = 'Não confirmado'; break;
							case 1: $status = 'Confirmado'; break;
							case 2: $status = 'Cancelado'; break;
							case 3: $status = 'Bloqueado'; break;
						}
					
					?>
                
                    <div class="campos">
                    
                    	<div class="campo tabela">
                            <div class="icone_campo celula" title="Status"><i class="fa fa-tag"></i></div>
                            <div class="celula"><input type="text" value="<?= $status ?>" name="status" placeholder="status"  disabled></div>
                        </div>
                    
                    	<div class="campo tabela">
                            <div class="icone_campo celula" title="Grupo"><i class="fa fa-group"></i></div>
                        	<div class="celula"><input type="text" value="<?= $aluno->nome_grupo ?>" name="grupo" placeholder="Nome do grupo"  maxlength="150" disabled></div>              
                        </div>
                    
                        <div class="campo tabela">
                            <div class="icone_campo celula" title="RGM"><i class="fa fa-id-card" ></i></div>
                            <div class="celula"><input type="number" value="<?= $aluno->rgm ?>" name="rgm" placeholder="RGM" maxlength="12" disabled></div>                            
                        </div>
                        
                        <div class="campo tabela">
                            <div class="icone_campo celula" title="Nome"><i class="fa fa-user"></i></div>
                            <div class="celula"><input type="text" value="<?= $aluno->nome_aluno ?>" name="nome" placeholder="Nome"  maxlength="50" disabled></div>
                        </div>
                        
                        <div class="campo tabela">
                            <div class="icone_campo celula" title="Email"><i class="fa fa-envelope"></i></div>
                            <div class="celula"><input type="text" value="<?= $aluno->email ?>" name="email" placeholder="Email"  maxlength="100" disabled></div>
                        </div>
                        
                        <div class="campo x2 tabela selecao">
                        	<div class="icone_campo celula" title="Curso"><i class="fa fa-graduation-cap"></i></div>
                            <div class="celula"><input type="text" value="<?= $aluno->nome_curso ?>" disabled></div>
                        </div>
                        
                        <div class="campo x2 tabela selecao">
                        	<div class="icone_campo celula" title="Semestre"><i class="fa fa-calendar"></i></div>
                            <div class="celula"><input type="text" value="<?= $aluno->semestre ?>º Semestre" disabled></div>
                        </div>
                        <?php if(count($participates) > 0){?>
                        <div class="outros_participantes">
                        	
                            <div class="titulo">
                            	Quem mais participa <br class="mobile">deste grupo
                            </div>    
                            
                            <?php foreach($participates as $part){ ?>                    	
                            
                                <div class="campo x2 tabela" style="margin-top: 0; margin-bottom: 15px;">
                                    <div class="icone_campo celula" title="participate"><i class="fa fa-handshake-o" aria-hidden="true"></i></div>
                                    <div class="celula"><input type="text" value="<?= $part->nome ?>" disabled></div>
                                </div>
                            
                            <?php } ?>
                            
                        
                    	</div> 
                        
                        <?php } ?>  
                        
                    </div>
                                 
            
                    <div class="cont_enviar">
                        
                        <table align="center" class="respFix" cellpadding="0" cellspacing="15"  style="margin:20px auto;">
                            <tbody>
                                           
                                    <tr>
                                        <td valign="center" align="center" height="50" class="fulldisplay"><table cellpadding="0" cellspacing="0" width="100%" >
                                            <tbody>
                                                <tr>
                                                    <td align="center">
                                                          
                                                        <font size="6" color="#FFFFFF"><b>INSCRIÇÃO <br class="mobile"/>CONCLUÍDA</b></font> 
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table></td>
                                    </tr>
            
                                    
            
                                     <tr>
                                        <td valign="top" class="fulldisplay"><table cellpadding="0" cellspacing="0"  width="100%" >
                                            <tbody>
                                                <tr>
                                                    <td align="center">
                                                        <font face="verdana" size="2" color="#FFFFFF">Agradecemos por se inscrever <br class="mobile"/>para o LOOP, evento de tecnologia <br/>que acontecerá no dia <?=  date("d/m", $edicao[1])?> nos campus da faculdade <br class="mobile"/>Cruzeiro do Sul.</font>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table></td>
                                    </tr>
            
                                </tbody>
                        </table>                        
                        
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