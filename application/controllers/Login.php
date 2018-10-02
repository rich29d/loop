<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller {
	
	public $edicao_atual = false;
	
	function __construct() {
        parent::__construct();		
		$this->load->database();
		$this->load->library('session');
		$this->load->helper('url');			
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
	public function entrar()
	{
		$this->load->model('Edicao_model');
		$this->load->model('Aluno_model');		
		$this->edicao_atual = $this->Edicao_model->getAtual();
		
		
		$rgm = $this->input->get("rgm");
		$email = $this->input->get("email");
		
		$aluno = $this->Aluno_model->login($rgm, $email, $this->edicao_atual->id);	
		$return['valido'] = !empty($aluno);
		
		if($return['valido']){
			$newdata = array(
					'rgm'  => $rgm,
					'email'     => $email,
					'logado' => TRUE
			);
			
			$this->session->set_userdata($newdata);
		}
		
		$this->load->view('json',array('return'=>$return));
			
	}
	
	public function sair()
	{
		$itens_session = array(
					'rgm',
					'email',
					'logado'
			);
		$this->session->unset_userdata($itens_session);
		redirect(base_url());
	}
	
	public function area_aluno()
	{
		
		if(!$this->session->has_userdata('logado')){			
			redirect(base_url());
		};
		
		
		$this->load->model('Edicao_model');
		$this->load->model('Aluno_model');
		$this->load->model('Relacoes_model');
		$this->edicao_atual = $this->Edicao_model->getAtual();
		
		$aluno = $this->Aluno_model->login($this->session->rgm, $this->session->email, $this->edicao_atual->id);	
		$participantes = $this->Relacoes_model->consultar_participantes_grupo($aluno->id_grupo, $this->edicao_atual->id, $this->session->rgm);
		
		print_r($participantes);
		
		$data = strtotime($this->edicao_atual->data);
		$this->load->view('area_aluno', array(
			'edicao'=>array(str_pad($this->edicao_atual->numero, 2, "0", STR_PAD_LEFT),$data),
			'aluno' => $aluno,
			'participates' => $participantes
		));
			
	}
	
	
}
