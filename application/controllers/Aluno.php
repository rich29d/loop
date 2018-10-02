<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Aluno extends CI_Controller {
	
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
	
	function pega_aluno(){
		$rgm_aluno = $this->input->get('rgm');
		$this->load->view('json',array('return'=>$this->Aluno_model->consultar_por_rgm($rgm_aluno)));
	}

}