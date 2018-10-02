<?php
if (!defined('BASEPATH')) exit('No direct script access allowed');

class Edicao_model extends CI_Model {
	
	
	public $table = 'tbl_edicao_loop';
	public $id;
	public $numero;
	public $data;
	public $status;
	public $data_criacao;
	
	function __construct() {
        parent::__construct();
		//$this->load->database();
    }
	
	public function getAtual(){
		
		$this->db->where(array('status <'=> 3));
		$query = $this->db->get($this->table);
		return $query->row();
		
	}
	
	public function alterar($coluna=false, $valor=false, $id=false){
		
		return (bool)$this->db
		->set($coluna, $valor)
		->where('id', $id)
		->update($this->table);
		
	}
	
	public function pegar_maior(){
		
		$this->db->select('			
			MAX(numero) AS maior_numero
		');
		$this->db->from($this->table);
		$query = $this->db->get();
		return $query->row();
			
	}
	
	
	
	public function inserir($data=false){
		if(!$data) return false;
		
		$maior_numero = $this->pegar_maior()->maior_numero;
		$data = array(
		   'numero' => $maior_numero + 1,
		   'data' => $data
		);
		
		$this->db->insert($this->table, $data); 
		
		return $this->db->insert_id();
		
	}
	
	
	
}