<?php
/**
 * Created by PhpStorm.
 * User: jefer
 * Date: 30/01/2018
 * Time: 20:12
 */

// inclui o autoloader do Composer
require 'vendor/autoload.php';

// inclui o arquivo de inicialização
require 'init.php';

use App\Controllers\UsersController;

// instancia o Slim, habilitando os erros (útil para debug, em desenvolvimento)
$app = new \Slim\App(['settings' => [
    'displayErrorDetails' => true
]
]);

/*************************************
 * USUARIO
 *************************************/
$app->get('/usuario/', function () {
    $UsersController = new \App\Controllers\UsersController;
    $data = $UsersController->getAll();
    return $this->response->withJson($data);
});

$app->get('/usuario/contribuidores', function () {
    $UsersController = new \App\Controllers\UsersController;
    $data = $UsersController->getContribuidores();
    return $this->response->withJson($data);
});

$app->get('/usuario/pis', function () {
    $UsersController = new \App\Controllers\UsersController;
    $data = $UsersController->buscarPis();
    return $this->response->withJson($data);
});

$app->get('/usuario/count', function () {
    $UsersController = new \App\Controllers\UsersController;
    $data = $UsersController->getCountUsers();
    return $this->response->withJson($data);
});

$app->get('/usuario/{id}', function ($request) {
    $id = $request->getAttribute('id');
    $UsersController = new \App\Controllers\UsersController;
    $data = $UsersController->get($id);
    return $this->response->withJson($data);
});

$app->delete('/usuario/{id}', function ($request) {
    $id = $request->getAttribute('id');
    $UsersController = new \App\Controllers\UsersController;
    $UsersController->remove($id);
});

/*************************************
 * AUTH
 *************************************/
$app->post('/auth/register', function ($request) {
  $bodyJson = json_decode($request->getBody(), true);
  $bodyJson = (sizeof($bodyJson) == 0) ? $_POST : $bodyJson;
  $AuthController = new \App\Controllers\AuthController();
  $data = $AuthController->register($bodyJson);
  return $this->response->withJson($data);
});

$app->post('/auth/login', function ($request) {
  $bodyJson = json_decode($request->getBody(), true);
  $bodyJson = (sizeof($bodyJson) == 0) ? $_POST : $bodyJson;
  $AuthController = new \App\Controllers\AuthController();
  $data = $AuthController->login($bodyJson);
  return $this->response->withJson($data);
});

$app->put('/auth/update/{id}', function ($request) {
    $id = $request->getAttribute('id');
    $bodyJson = json_decode($request->getBody(), true);
    $bodyJson = (sizeof($bodyJson) == 0) ? $_POST : $bodyJson;
    $AuthController = new \App\Controllers\AuthController();
    $data = $AuthController->updateUser($id, $bodyJson);
    return $this->response->withJson($data);
});

/*************************************
 * IMPRESSAO
 *************************************/
$app->post('/impressao', function ($request, $response) {
  $bodyJson = json_decode($request->getBody(), true);
  $bodyJson = (sizeof($bodyJson) == 0) ? $_POST : $bodyJson;
  $ImpressaoController = new \App\Controllers\ImpressaoController();
  $pdf = $ImpressaoController->imprimir($bodyJson);
  $response = $this->response->withHeader( 'Content-type', 'application/pdf' );
  $content = $pdf->Output();
  $response->write($content);
  return $response;
});

$app->get('/impressao/count', function () {
    $ImpressaoController = new \App\Controllers\ImpressaoController();
    $data = $ImpressaoController->getNumeroImpressoes();
    return $this->response->withJson($data);
});

$app->get('/impressao/informacoes-usuarios', function () {
    $ImpressaoController = new \App\Controllers\ImpressaoController();
    $data = $ImpressaoController->getInformacoesUsuariosImpressao();
    return $this->response->withJson($data);
});

/*************************************
 * MENSAGEM
 *************************************/
$app->get('/mensagens/boas', function () {
    $MensagemController = new \App\Controllers\MensagemController();
    $data = $MensagemController->getMensagensBoas();
    return $this->response->withJson($data);
});

$app->get('/mensagens/ruins', function () {
    $MensagemController = new \App\Controllers\MensagemController();
    $data = $MensagemController->getMensagensRuins();
    return $this->response->withJson($data);
});

$app->post('/mensagens/', function ($request) {
    $bodyJson = json_decode($request->getBody(), true);
    $bodyJson = (sizeof($bodyJson) == 0) ? $_POST : $bodyJson;
    $MensagemController = new \App\Controllers\MensagemController();
    $data = $MensagemController->salvarMensagem($bodyJson);
    return $this->response->withJson($data);
});


/*************************************
 * DASHBOARD
 *************************************/
$app->get('/dashboard/info', function () {
    $DashboardController = new \App\Controllers\DashboardController();
    $data = $DashboardController->infoDashboard();
    return $this->response->withJson($data);
});

$app->run();
