<?php
/**
 * Created by PhpStorm.
 * User: jefer
 * Date: 30/01/2018
 * Time: 20:18
 */

namespace App\Controllers;

use \App\Models\User;
use App\Models\Impressao;

class DashboardController
{
  public function infoDashboard()
  {
      $usuariosCadastrados = User::countAll();
      $impressoes = Impressao::countAll();
      $response = array();
      $response['usuariosCadastrados'] = $usuariosCadastrados['total'];
      $response['impressoes'] = $impressoes['total'];
      return arrayResponse(false, $response, 200);
  }
}
