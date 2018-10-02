<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/
$route['default_controller'] = 'inscricao';
$route['404_override'] = '';

$route['logo2'] = 'inscricao/index/logo2';

$route['consulta_aluno'] = 'Aluno/pega_aluno';

$route['cadastrar/grupo'] = 'inscricao/cadastrar_grupo';
$route['cadastrar/aluno'] = 'inscricao/cadastrar_aluno';

$route['login'] = 'Login/entrar';
$route['logout'] = 'Login/sair';
$route['area_aluno'] = 'Login/area_aluno';

$route['lista_cursos'] = 'Curso/lista_cursos';
$route['curso/(.+)'] = 'Curso/pega_curso/$1';

$route['admin'] = 'admin/Painel';
$route['admin/login'] = 'admin/Login';
$route['admin/entrar'] = 'admin/Login/entrar';
$route['admin/sair'] = 'admin/Login/sair';

$route['admin/lista_edicoes'] = 'admin/Painel/lista_edicoes';
$route['admin/lista_grupos'] = 'admin/Painel/lista_grupos';
$route['admin/lista_grupos/(.+)'] = 'admin/Painel/lista_grupos/$1';
$route['admin/lista_alunos'] = 'admin/Painel/lista_alunos';
$route['admin/lista_alunos/(.+)'] = 'admin/Painel/lista_alunos/$1';
$route['admin/lista_cursos'] = 'admin/Painel/lista_cursos';

$route['admin/consulta_edicoes'] = 'admin/Painel';
$route['admin/consulta_grupos'] = 'admin/Painel/consulta_grupos';
$route['admin/consulta_grupos/(.+)'] = 'admin/Painel/consulta_grupos/$1';
$route['admin/consulta_alunos'] = 'admin/Painel/consulta_alunos';
$route['admin/consulta_alunos/(.+)'] = 'admin/Painel/consulta_alunos/$1';
$route['admin/consulta_cursos'] = 'admin/Painel/consulta_cursos';
$route['admin/nova_senha'] = 'admin/Painel/nova_senha';

$route['admin/alterar_coluna_edicao'] = 'admin/Painel/alterar_coluna_edicao';
$route['admin/alterar_coluna_curso'] = 'admin/Painel/alterar_coluna_curso';
$route['admin/inserir_edicao'] = 'admin/Painel/inserir_edicao';
$route['admin/inserir_curso'] = 'admin/Painel/inserir_curso';
$route['admin/deletar_curso'] = 'admin/Painel/deletar_curso';

$route['translate_uri_dashes'] = TRUE;
