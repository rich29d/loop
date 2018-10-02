<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Inscricao extends CI_Controller {
	
	public $edicao_atual = false;
	
	function __construct() {
        parent::__construct();
		$this->load->database();
		$this->load->model('Edicao_model');
		$this->edicao_atual = $this->Edicao_model->getAtual();		
		$this->load->model('Aluno_model');
		$this->load->model('Grupo_model');
		$this->load->model('Relacoes_model');
    }

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	 
	 
	 /*
			
			ERROS
			
			Indice de erro composto por 2 números separados por um '-'.
			O primeiro número representa o objeto:
			0 = Edição
			1 = Grupo
			2 = Aluno
			3 = Relação
			4 = Curso
			
			Indice de erros:		
				
				1-0 grupo já existe
				1-1 Já existem 3 participantes neste grupo
				1-2 grupo não existe
				
				2-0 Aluno já está participando da edição atual
	*/
	 
	 
	 
	public function index($logo2 = false)
	{
		if($this->edicao_atual){
			
			if($this->edicao_atual->status == 1){
				$page = $logo2 ? 'inscricao_logo2' : 'inscricao';
				$ano = date("Y", strtotime($this->edicao_atual->data));
				$this->load->view($page, array('edicao'=>array(str_pad($this->edicao_atual->numero, 2, "0", STR_PAD_LEFT),$ano)));
			}else $this->load->view('encerrada', array('status'=> $this->edicao_atual->status)); //0 - Edição inativa ou 2 - Inscrições encerrada
		
		}else $this->load->view('encerrada', array('status'=> 3)); // Edição finalzada
		
	}
	
	public function cadastrar_grupo()
	{
		
		
		
		$grupo_nome = $this->input->post("grupo");
		$acao = $this->input->post("acao");//0 - Criar grupo; 1 - carregar grupo existente;
		
		$data = array(
			'id_edicao' => $this->edicao_atual->id,
			'nome' => $grupo_nome
		);
		
		$return['acao'] = $acao;
		
		$return['sucesso'] = true;		
		
		$consulta = $this->Grupo_model->consultar_por_nome($data);
		
		if($acao == 0){
		
			if(!count($consulta)){
				$return['id_grupo'] = $this->Grupo_model->inserir($data);
			}else{			
				$return['erro_code'] = "1-0"; //grupo já existe
				$return['sucesso'] = false;
			}
			
		}else{
			
			if(count($consulta)){
				$return['id_grupo'] = $consulta->id; 
			}else{			
				$return['erro_code'] = "1-2";  //grupo não existe
				$return['sucesso'] = false;
			}
			
		}
		
		$this->load->view('json',array('return'=>$return));
			
	}
	
	public function cadastrar_aluno()
	{
		
		$aluno = new Aluno_model();
		
		$acao = $this->input->post("acao_aluno");
		$id_grupo = $this->input->post("id_grupo");
		$id_relacao = $return['id_relacao'] = $this->input->post("id_relacao");
		
		$aluno->id = $return['id_aluno'] = $this->input->post("id");
		$aluno->id_curso = $this->input->post("id_curso");
		$aluno->semestre = $this->input->post("semestre");
		$aluno->rgm = $this->input->post("rgm");
		$aluno->nome = $this->input->post("nome");
		$aluno->email = $this->input->post("email");
		
		
		/*$id_grupo = 10;
		$aluno->id_curso = 2;
		$aluno->semestre = 4;
		$aluno->rgm = "564654";
		$aluno->nome = "teste";
		$aluno->email = "asdsa@sdsaf.com";*/
		
		
		unset($aluno->table);	
			
		$consulta = $this->Relacoes_model->consultar_aluno_edicao($aluno->rgm,$this->edicao_atual->id );		
		$rel_grupo = $this->Relacoes_model->consultar_grupo($id_grupo);
		
		$return['sucesso'] = true;
		
		if((!count($consulta) && count($rel_grupo)<3) || $acao != 'cadastrar'){
			
			$consulta_aluno = $this->Aluno_model->consultar_por_id($return['id_aluno']);
			
			if(empty($consulta_aluno)) $return['id_aluno'] = $this->Aluno_model->inserir($aluno);
			else $this->Aluno_model->alterar($aluno);
			
			
			$return['data'] = date("d/m", strtotime($this->edicao_atual->data));
			
			if($return['id_aluno']!=false){
				if($acao == 'cadastrar') $return['id_relacao'] = $this->criar_relacao($aluno->rgm, $id_grupo);
				else $this->Relacoes_model->alterar($aluno->rgm, $id_relacao);
			}
		
		}else{
			
			if(count($consulta)) $return['erro_code'] = "2-0"; //Aluno já está participando da edição atual
			else if(!count($rel_grupo)<3) $return['erro_code'] = "1-1"; //Já existem 3 participantes neste grupo
			$return['quant'] = count($rel_grupo);
			$return['sucesso'] = false;
		}
		
		$this->load->view('json',array('return'=>$return));
			
	}
	
	public function criar_relacao($rgm_aluno=false, $id_grupo=false)
	{
		
		
		$data = array(
			'id_edicao' => $this->edicao_atual->id,
			'rgm_aluno' => $rgm_aluno,
			'id_grupo'  => $id_grupo
		);
		
		return $this->Relacoes_model->inserir($data);;
			
	}
	
	
	
	
}
