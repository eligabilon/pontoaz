<?php
/**
 * Created by PhpStorm.
 * User: jefer
 * Date: 30/01/2018
 * Time: 20:18
 */

namespace App\Controllers;

use \App\Models\User;
use \App\Utils\ValidateBR;

class AuthController
{
  public function register($dados)
  {
    $name = isset($dados['nome']) ? $dados['nome'] : '';
    $email = isset($dados['email']) ? $dados['email'] : '';
    $cpf = isset($dados['cpf']) ? $dados['cpf'] : '';
    $pis = isset($dados['pis']) ? $dados['pis'] : '';
    $senha = isset($dados['senha']) ? $dados['senha'] : '';
    $picture = isset($dados['picture']) ? $dados['picture'] : '';
    if (!ValidateBR::CPF($cpf)) {
      return arrayResponse(true, "Usuario não cadastrado, CPF inválido!", 500);
    }
    if (!ValidateBR::NIS($pis)) {
      return arrayResponse(true, "Usuario não cadastrado, PIS inválido!", 500);
    }
    $duplicadoPor = User::verificarUnicidadeUsuario(null, $email, $cpf, $pis);
    if ($duplicadoPor) {
      return arrayResponse(true, "Usuario não cadastrado, pois o " . $duplicadoPor . " já esta cadastrado!", 500);
    }
    if (User::save($name, $email, $cpf, $pis, $senha, $picture)) {
      $usuario = User::selectPorEmail($email);
      $array = array();
      $array['msg'] = 'Usuario cadastrado com sucesso!';
      $array['usuario'] = $usuario;
      return arrayResponse(false, $array, 200);
    }
    return arrayResponse(true, "Erro ao tentar salvar usuario!", 500);
  }

  public function login($dados)
  {
    $email = isset($dados['email']) ? $dados['email'] : '';
    $senha = isset($dados['senha']) ? $dados['senha'] : '';
    $usuario = User::login($email, $senha);
    if ($usuario) {
      $array = array();
      $array['msg'] = 'Usuario logado com sucesso!';
      $array['usuario'] = $usuario;
      return arrayResponse(false, $array, 200);
    }
    return arrayResponse(true, "Erro ao tentar efetuar o login!", 500);
  }

    public function updateUser($id, $dados)
    {
        $name = isset($dados['nome']) ? $dados['nome'] : '';
        $email = isset($dados['email']) ? $dados['email'] : '';
        $cpf = isset($dados['cpf']) ? $dados['cpf'] : '';
        $pis = isset($dados['pis']) ? $dados['pis'] : '';
        $picture = isset($dados['picture']) ? $dados['picture'] : '';
        if (!ValidateBR::CPF($cpf)) {
            return arrayResponse(true, "Usuario não cadastrado, CPF inválido!", 500);
        }
        if (!ValidateBR::NIS($pis)) {
            return arrayResponse(true, "Usuario não cadastrado, PIS inválido!", 500);
        }
        $duplicadoPor = User::verificarUnicidadeUsuario($id, $email, $cpf, $pis);
        if ($duplicadoPor) {
            return arrayResponse(true, "Usuario não cadastrado, pois o " . $duplicadoPor . " já esta cadastrado!", 500);
        }
        if (User::update($id, $name, $email, $cpf, $pis, $picture)) {
            $usuario = User::selectPorEmail($email);
            $array = array();
            $array['msg'] = 'Usuario cadastrado com sucesso!';
            $array['usuario'] = $usuario;
            return arrayResponse(false, $array, 200);
        }
        return arrayResponse(true, "Erro ao tentar salvar usuario!", 500);
    }

}
