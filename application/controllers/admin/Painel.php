<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Painel extends CI_Controller {
	
	public $edicao_atual = false;
	
	function __construct() {
        parent::__construct();		
		$this->load->database();
		$this->load->library('session');
		$this->load->helper('url');	
		
		if(!$this->session->has_userdata('admin_logado')){			
			redirect(base_url() . 'admin/login');
		};
				
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
				
				0-0 edição ainda está ativa
				
				4-0 edição ainda está ativa
				
	*/
	 
	 public function index(){
		 
		 $this->load->view('admin/consulta_edicao');
	 }
	 
	 public function lista_edicoes(){
		 
		$this->load->model('Relacoes_model'); 
		$lista = $this->Relacoes_model->lista_edicao();		
		$this->load->view('array', array('lista'=>$lista));
		
	 }
	 
	 public function consulta_grupos($id_edicao=false){
		$this->load->view('admin/consulta_grupos', array('id_edicao'=>$id_edicao));
	 }
	 
	 public function lista_grupos($id_edicao=false){
		 
		$this->load->model('Relacoes_model'); 
		$lista = $this->Relacoes_model->lista_grupos($id_edicao);		
		$this->load->view('array', array('lista'=>$lista));
		
	 }
	 
	 public function consulta_alunos($id_edicao=false){
		$this->load->view('admin/consulta_alunos', array('id_edicao'=>$id_edicao));
	 }
	 
	 public function lista_alunos($id_edicao=false){
		 
		$this->load->model('Relacoes_model'); 
		$lista = $this->Relacoes_model->lista_alunos($id_edicao);		
		$this->load->view('array', array('lista'=>$lista));
		
	 }
	 
	 public function consulta_cursos(){
		$this->load->view('admin/consulta_cursos');
	 }
	 
	 public function lista_cursos(){
		 
		$this->load->model('Curso_model'); 
		$lista = $this->Curso_model->lista_cursos();		
		$this->load->view('array', array('lista'=>$lista));
		
	 }
	 
	 public function nova_senha(){
		$this->load->view('admin/nova_senha');
	 }
	 
	 public function alterar_coluna_edicao(){		
		
		$coluna = $this->input->post('coluna');
		$valor= $this->input->post('valor');
		$id= $this->input->post('id');
		
		$this->load->model('Edicao_model'); 
		
		$ok = true;
		
		if($coluna == 'status' && $valor != 3){
			$atual = $this->Edicao_model->getAtual();		
			if(!empty($atual) && $atual->id != $id) {
				$ok = $return['sucesso'] = false;
				$return['erro_code'] = '0-0'; //edição ainda está ativa
			}
		}
		
		if($ok) $return['sucesso'] = $this->Edicao_model->alterar($coluna,$valor,$id); //UPDATE tbl_edicao_loop SET $coluna=$valor WHERE id=$id	
		$this->load->view('json', array('return'=>$return));
	 }
	 
	 public function alterar_coluna_curso(){		
		
		$coluna = $this->input->post('coluna');
		$valor= $this->input->post('valor');
		$id= $this->input->post('id');
		
		$this->load->model('Curso_model'); 
		
		$return['sucesso'] = $this->Curso_model->alterar($coluna,$valor,$id); //UPDATE tbl_curso_loop SET $coluna=$valor WHERE id=$id	
		$this->load->view('json', array('return'=>$return));
	 }
	 
	 public function inserir_edicao(){		
		
		$data = $this->input->post('data');
		
		$this->load->model('Edicao_model'); 
		
		$return['sucesso'] = true;		
		
		$atual = $this->Edicao_model->getAtual();		
		if(!empty($atual)) {
			$return['sucesso'] = false;
			$return['erro_code'] = '0-0'; //edição ainda está ativa
		}
		
		if($return['sucesso']) $return['id_edicao'] = $this->Edicao_model->inserir($data); //UPDATE tbl_edicao_loop SET $coluna=$valor WHERE id=$id	
		$this->load->view('json', array('return'=>$return));
		
	 }
	 
	 public function inserir_curso(){		
		
		$nome = $this->input->post('nome');
		
		$this->load->model('Curso_model'); 
		
		$return['sucesso'] = true;		
		
		$ja_existe = $this->Curso_model->pega_por_nome($nome);		
		if(!empty($ja_existe)) {
			$return['sucesso'] = false;
			$return['erro_code'] = '4-0'; //Curso já existe
		}
		if($return['sucesso']){
			$data = (object) array('nome'=>$nome);
			$return['id_curso'] = $this->Curso_model->inserir($data); //UPDATE tbl_curso_loop SET $coluna=$valor WHERE id=$id	
		}
		$this->load->view('json', array('return'=>$return));
		
	 }
	 
	 public function deletar_curso(){	
	 	$id = $this->input->post('id');		
		$this->load->model('Curso_model'); 
		$return['sucesso'] = $this->Curso_model->deletar($id);
	 	$this->load->view('json', array('return'=>$return));
	 }
	
}
