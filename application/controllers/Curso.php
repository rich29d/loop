<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Curso extends CI_Controller {
	
	public $edicao_atual = false;
	
	function __construct() {
        parent::__construct();
		$this->load->database();
		$this->load->model('Curso_model');
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
	public function lista_cursos()
	{
		
		$lista = $this->Curso_model->lista_cursos();	
		$this->load->view('json',array('return'=>$lista));
			
	}
	
	public function pega_curso($id=false)
	{
		
		$curso = $this->Curso_model->pega_curso($id);	
		$this->load->view('json',array('return'=>$curso));
			
	}
	
	
}
