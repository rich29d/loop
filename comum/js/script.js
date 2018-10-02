// JavaScript Document

var delayAviso;
var msg = "";
var status = "";

var grupo = {
	id:null,
	nome:null
}

var cursosArray = [];

var menu_desk = {
	chama_login: function(){
		$('nav .cont_login').addClass('aberto');
	},
	esconde_login: function(){
		$('nav .cont_login').removeClass('aberto');
	}
}

var util = {

	parseJSON : function (arr){
		
		var indexed_array = {};	
		$.map(arr, function(n, i){
			indexed_array[n['name']] = n['value'];
		});	
		return indexed_array;
		
	},
	aviso : function(msg, status){
		
		if(status == "erro") $('.aviso').addClass('erro');
		else $('.aviso').removeClass('erro');
		
		$('.aviso p').text(msg);
		
		$('.cont_aviso').css('bottom',0);
		
		clearTimeout(delayAviso);
		
		delayAviso = setTimeout(function(){
			$('.cont_aviso').css('bottom',"-60%");
		}, 8000);
		
	}
	
}

var menu_mob = {
	status : false,
	abrir: function(){
		$('.msn_sac').fadeOut();
		$('.cont_bullets').addClass('encolhido');
		$('article').css('left',"-80%");
		$('.menu_mob').css('right',0);
		$('.bt_menu_mob')
			.attr('onClick','menu_mob.fechar()')
			.removeClass('abrir')
			.addClass('fechar');
		menu_mob.status = true;
	},
	fechar: function(){
		$('.cont_bullets').removeClass('encolhido');
		$('article').css('left',0);	
		$('.menu_mob').css('right',"-85%");
		$('.bt_menu_mob')
			.attr('onClick','menu_mob.abrir()')
			.removeClass('fechar')
			.addClass('abrir');
		menu_mob.status = false;
		menu_mob.esconde_login();
	},
	chama_login: function(){
		$('.menu_mob ul').css('left',"-100%");
		$('.menu_mob .cont_login').css('left',"6%");	
	},
	esconde_login: function(){
		$('.menu_mob ul').css('left',0);
		$('.menu_mob .cont_login').css('left',"100%");	
	}
}


var mouse = {

	move_detalhes : function(det, frequencia, lado){
		var pos = $(det).offset();
		$( "section" ).mousemove(function( event ) {
			var pos_section = $(this).offset();
			$(this).find(det).css({
				top: (pos.top + (pos.top - event.clientY) / frequencia) - pos_section.top
			})
		});	
		
	}
	
}

var 
topo = 0,
posForm = $('.cont_form').offset().top,
formVisible = false,
scroll_window = {
	init: function(){		
		
		topo = $(window).scrollTop() + 800;
		posForm = $('.cont_form').offset().top;
		if(posForm<topo) scroll_window.entrada_form();
		
		$(window).scroll(function(e) {
            topo = $(this).scrollTop() + 800;
			posForm = $('.cont_form').offset().top;
			if(posForm<topo) scroll_window.entrada_form();
			if($(window).width() < 600){
				$('.msn_sac').fadeOut();
				if(topo>posForm && topo<posForm + 350 ) $('.cont_bullets').css('bottom',19);
				else $('.cont_bullets').css('bottom',-30);
				//console.log(topo,posForm);
			}
			
        });	
		
	},
	entrada_form: function(){
		var
			form = $('.cont_form .form'),
			num_form = 4;
			
			
			if(!formVisible){
			
				var crono = setInterval(function(){
					
					form.eq(num_form-1).addClass('f' + num_form)	;
					num_form--;				
					if(num_form<1) clearInterval(crono);
				
				},300);	
				
				formVisible = !formVisible;
			
			}
	},
	para_inscricao: function(){
		$('body, html').animate({scrollTop:posForm-20},1500);
		menu_mob.fechar();
	}
}

var curso = {
	lista_cursos : function(){
		$.get(baseURL + "lista_cursos")
		.done(function(data){
			var listaJSON = JSON.parse(data.trim());
			var listaHTML = '';
			for(var i in listaJSON){
				listaHTML += '<div class="opt" data-opt="' + listaJSON[i].id + '"><span>' + listaJSON[i].nome + '</span></div>';
				cursosArray[Number(listaJSON[i].id)] = listaJSON[i].nome;
			}
			$('.cmp_curso .opcoes').html(listaHTML);
			formulario.select();
		})
		.fail(function(response){
			msg = "Erro ao listar cursos, tente mais tarde, por favor!";
			status = "erro";
			console.log(response);
			util.aviso(msg, status);
		})
	},
	pega_curso : function(id){
		if(id!=null && id!=''){
			$.get(baseURL + "curso/" + id)
			.done(function(data){
				var listaJSON = JSON.parse(data.trim());
				var listaHTML = '';
				for(var i=1; i<= listaJSON.quant_semestre; i++){
					listaHTML += '<div class="opt" data-opt="' + i + '"><span>' + i + 'º Semestre</span></div>';
				}
				$('.cmp_semestre .opcoes').html(listaHTML);				
				formulario.select();
			})
			.fail(function(response){
				msg = "Erro ao listar cursos, tente mais tarde, por favor!";
				status = "erro";
				console.log(response);
				util.aviso(msg, status);
			});
		}		
	}
}

var formulario = {
	
	init : function(){
		curso.lista_cursos();	
		formulario.consulta_por_rgm();
	},	
	prox : function(num){
		$('.cont_form .form').attr('class', 'form f0');
		for(var i=num; i<=4; i++){
			$('.cont_form .form').eq(i).attr('class', 'form f' + (i-num+1));
		}
		
		$(".cont_form .form.f1").find("input[name=rgm]").focus();
		
		$('.bullet').removeClass('ativo');
		$('.bullet.b' + (num+1)).addClass('ativo').attr('href', 'javascript:formulario.prox(' + (num) + ')');
		
		if(num==4) $('body, html').animate({scrollTop:$('.fundo_3 .texto').offset().top-20},1000);
		
		$('.cmp_semestre .opcoes').html('<div class="opt" data-opt=""><span>Primeiro selecione um curso</span></div>');
		
	},
	consulta_por_rgm : function(){
		
		$('.form').each(function(){
			var form = $(this);
			$(this).find('input[name=rgm]').on('keyup',function(){
				var rgm = $(this).val();
				if(rgm.length > 7){
					$('.cmp_rgm').addClass('loading');
					$.get(baseURL + 'consulta_aluno', {rgm:rgm})
					.done(function(data){
						data = data.trim();						
						if(data!='null'){
							var respJSON = JSON.parse(data);
							for(var i in respJSON){
								console.log(i,respJSON[i]);	
								form.find('[name=' + i + ']').val(respJSON[i]);
								if(i == 'id_curso') $('.cmp_curso input[type=text]').val(cursosArray[respJSON[i]]);
								if(i == 'semestre') $('.cmp_semestre input[type=text]').val(respJSON[i] + 'º Semestre');
								
							}
						};
						$('.cmp_rgm').removeClass('loading');
					});
				}
			});
		
		});
	},
	select : function(){
		
		$('.selecao').find('.opt').off();	
		
		$('.cmp_curso').find('.opt').on('click',function(){
		
			$('.cmp_semestre').find('input').val("1");
			$('.cmp_semestre').find('input[type=text]').val("1º Semestre");	
			
		})
			
		$('.selecao').each(function(index, element) {
            
			var selecao = $(this);
			selecao.find('.opt').on('click',function(){
				
				var optVal = $(this).data("opt");
				var optTXT = $(this).find("span").text();
				selecao.find('input[type=hidden]').val(optVal);
				selecao.find('input[type=text]').val(optTXT);
				selecao.find('.opcoes').removeClass('aberto');
				
				$('.cmp_semestre .opcoes').html('<div class="opt" data-opt=""  style="text-align: center;" ><img src="comum/imgs/ajax-loader.gif"></div>');
				var id_curso = $('.selecao.cmp_curso').find('input[type=hidden]').val();
				curso.pega_curso(id_curso);
					
			});
        
			selecao
				.mouseenter(function(){
					selecao.find('.opcoes').addClass('aberto');	
				})
				.mouseleave(function(e) {
                    selecao.find('.opcoes').removeClass('aberto');	
                });
		
		});
		
	},
	validacao : function(form){
		
		var data = util.parseJSON($(form).serializeArray());
		
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
		var retorno = true;
		
		$(form).find(".campo").removeClass("erro");
		$(form).find(".campo").removeClass("ok");
		
		if(data.grupo!=null){
			
			if(data.grupo == ""){
				retorno = false;
				$(form).find(".cmp_grupo").addClass("erro");
				$(form).find(".cmp_grupo .msg_erro p").text("Insira o nome do grupo");
			}else $(form).find(".cmp_grupo").addClass("ok");	
				
		}else{
		
			if(data.rgm == "" || data.rgm.length<=7){
				retorno = false;
				$(form).find(".cmp_rgm").addClass("erro");
				$(form).find(".cmp_rgm .msg_erro p").text(
					data.rgm == "" ? "Insira o seu RGM" : "O RGM deve ter mais de 7 caracteres"
				);
			}else $(form).find(".cmp_rgm").addClass("ok");
			
			if(data.nome == ""){
				retorno = false;
				$(form).find(".cmp_nome").addClass("erro");
				$(form).find(".cmp_nome .msg_erro p").text("Insira o seu nome");		
			}else $(form).find(".cmp_nome").addClass("ok");
			
			
			if(data.email == "" || !re.test(data.email)){
				retorno = false;
				$(form).find(".cmp_email").addClass("erro");
				$(form).find(".cmp_email .msg_erro p").text(
					data.email == "" ? "Insira o seu email" : "Email inválido"
				);
			}else $(form).find(".cmp_email").addClass("ok");
			
			if(data.id_curso == ""){
				retorno = false;
				$(form).find(".cmp_curso").addClass("erro");
				$(form).find(".cmp_curso .msg_erro p").text("Selecione um curso");
			}else $(form).find(".cmp_curso").addClass("ok");
			
			if(data.semestre == ""){
				retorno = false;
				$(form).find(".cmp_semestre").addClass("erro");
				$(form).find(".cmp_semestre .msg_erro p").text("Selecione um semestre");
			}else $(form).find(".cmp_semestre").addClass("ok");
		}
		
		return retorno;
			
	},
	cadastrar : function(form){
		
		var data = util.parseJSON($(form).serializeArray());
		
		
		
		if(data.grupo!=null){
			//console.log(data);
			grupo.nome = data.grupo.trim();
			$.post(baseURL + "cadastrar/grupo", {grupo: grupo.nome, acao: data.acao})
			.done(function(response){
				
				var respJSON = JSON.parse(response.trim());
				
				console.log(respJSON);
				
				if(respJSON.sucesso){
					grupo.id = respJSON.id_grupo;
					$("input[name=id_grupo]").val(grupo.id);					
					var num = $(form).find(".cont_enviar button").data("num");	
					formulario.prox(num);
					msg = $(form).data("txt");
					status = "ok";
					
				}else{
					msg = "Erro de cadastro, tente mais tarde, por favor!";
					switch(respJSON.erro_code){
						case "1-0":
							msg = "Ops! Este grupo já existe.";
						break;
						case "1-2":
							msg = "Ops! Este grupo não existe.";
						break;
					}					
					status = "erro";
					$(form).find(".cmp_grupo").removeClass("ok").addClass("erro");
					$(form).find(".cmp_grupo .msg_erro p").text("Insira outro nome");
				}
				
				util.aviso(msg, status);
				$(form).find('.cont_enviar .enviar').removeClass("loading").removeAttr("disabled");
				
				
			})
			.fail(function(response){
				msg = "Erro de cadastro, tente mais tarde, por favor!";
				status = "erro";
				console.log(response);
				util.aviso(msg, status);
			});
			
		}else{
			
			$.post(baseURL + "cadastrar/aluno", $(form).serialize())
			.done(function(response){
				
				var respJSON = JSON.parse(response.trim());
				
				console.log(respJSON);
				
				if(respJSON.sucesso){
					grupo.id = respJSON.id_grupo;
					var num = $(form).find(".cont_enviar button").data("num");	
					formulario.prox(num);
					msg = $(form).data("txt");
					status = "ok";
					
					$(form).find("[name=id]").val(respJSON.id_aluno);
					$(form).find('[name=acao_aluno]').val('alterar');
					$(form).find('[name=id_relacao]').val(respJSON.id_relacao);
					$(form).find('button span').text('Alterar');
					
					$.post(baseURL + "email/confirma_cadastro.php",{email: data.email, nome: data.nome.split(" ")[0], data:respJSON.data})
					.done(function(data){console.log(data)})
					.fail(function(data){console.log(data)})
					
				}else{
					msg = "Erro de cadastro, tente mais tarde, por favor!";
					switch(respJSON.erro_code){
						case "2-0":
							msg = "Ops! você já tem inscrição nesta edição do LOOP.";
						break;
						case "1-1":
							msg = "Desculpe, já existem 3 participantes neste grupo.";
						break;
					}					
					status = "erro";
				}
				
				util.aviso(msg, status);
				$(form).find('.cont_enviar .enviar').removeClass("loading").removeAttr("disabled");
				
				
			})
			.fail(function(response){
				msg = "Erro de cadastro, tente mais tarde, por favor!";
				status = "erro";
				console.log(response);
				util.aviso(msg, status);
			})
				
			
		}
			
	}
	
}

var login = {
	validacao : function(form){
		
		var data = util.parseJSON($(form).serializeArray());
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   		var retorno = true;
		
		$(form).find(".campo").removeClass("erro");
		$(form).find(".campo").removeClass("ok");
		
		if(data.rgm == "" || data.rgm.length<=7){
				retorno = false;
				$(form).find(".cmp_rgm").addClass("erro");
				$(form).find(".cmp_rgm .msg_erro p").text(
					data.rgm == "" ? "Insira o seu RGM" : "O RGM deve ter mais de 7 caracteres"
				);
		}else $(form).find(".cmp_rgm").addClass("ok");
		
		
		if(data.email == "" || !re.test(data.email)){
				retorno = false;
				$(form).find(".cmp_email").addClass("erro");
				$(form).find(".cmp_email .msg_erro p").text(
					data.email == "" ? "Insira o seu email" : "Email inválido"
				);
		}else $(form).find(".cmp_email").addClass("ok");
		
		
		return retorno;
		
	},
	entrar : function(){
		
		$('.cont_login form').on("submit",function(e){
			e.preventDefault();
			
			var form = this;
			
			if(login.validacao(form)){
			
				$.get(baseURL + 'login', $(form).serialize())	
				.done(function(data){
					var dataJSON = JSON.parse(data.trim());
					console.log(dataJSON);
					if(dataJSON.valido){						
						util.aviso('Login valido', 'ok');	
						setTimeout(function(){window.location.href = baseURL + 'area_aluno' },1000);	
					}else{
						util.aviso('RGM e/ou email inválido', 'erro');	
					}
				})
				.fail(function(response){
					msg = "Erro de login, tente mais tarde, por favor!";
					status = "erro";
					console.log(response);
					util.aviso(msg, status);
				})
								
			}else{
				
				msg = "Ops! algo esta errado, preencha os campos destacados corretamente, por favor!";
				util.aviso(msg, "erro");
				$(form).find('.cont_enviar .enviar').removeClass("loading").removeAttr("disabled");
					
			}
			
		});
	
	}	
	
}

var codigo_secreto = function(){
	                 // → ↑ L   O  O  P  ↓ ← 
	var codigo_array = [39,38,76,79,79,80,40,37];
	var index_code = 0;
	$(document).on('keydown',function(e){
		var keyCode = e.keyCode;
		if(keyCode == codigo_array[index_code]) index_code++;
		else index_code = 0;
		if(index_code == 8){
			index_code = 0;
			window.open('https://www.urionlinejudge.com.br', '_blank');
		}
		
	})
}

$(function(){
	
	codigo_secreto();
	
	$('.logo img').delay(750).fadeIn();
	
	if($(window).width()<600) $('input[name=rgm]').attr('type','number');
	
	setTimeout(function(){
		
		$('.area_aluno .form').addClass('f1');
			
	}, 1000)
	
	$('.det.d1').each(function(index, element) {
        mouse.move_detalhes(this, 20);
    });
	
	$('.det.d2').each(function(index, element) {
        mouse.move_detalhes(this, 80);
    });
	
	$('.det.d3').each(function(index, element) {
        mouse.move_detalhes(this, 140);
    });
	
	
	scroll_window.init();
	$('article').click(function(e) {
        menu_desk.esconde_login();
    });
	
	
	$('input[name="rgm"]').keyup(function(e)
                                {
	  if (/\D/g.test(this.value))	  {
		// Filter non-digits from input value.
		this.value = this.value.replace(/\D/g, '');
		util.aviso('Apenas números, por favor.', 'erro');
	  }
	});
	
	
	$('.btn_criar').on('click', function(){ $('.cont_form .form form').find('input[name=acao]').val('0'); });
	$('.btn_ja_existe').on('click', function(){ $('.cont_form .form form').find('input[name=acao]').val('1'); });
	
	$('.cont_form .form form').on("submit",function(e){
		e.preventDefault();
		
		var form = this;
		
		$(form).find('.cont_enviar .enviar').addClass("loading").attr("disabled", true);
				
		if(formulario.validacao(form)){
			formulario.cadastrar(form);
		}else{
			 msg = "Ops! algo esta errado, preencha os campos destacados corretamente, por favor!";
			 util.aviso(msg, "erro");
			 $(form).find('.cont_enviar .enviar').removeClass("loading").removeAttr("disabled");
		}		
		
		
		
	});
	
	formulario.init();
	login.entrar();
	
});