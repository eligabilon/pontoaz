<?php
/**
 * Created by PhpStorm.
 * User: jefer
 * Date: 30/01/2018
 * Time: 20:18
 */

namespace App\Controllers;

use \App\Models\Mensagem;

class MensagemController
{
    public function getMensagensBoas()
    {
        $mensagens = Mensagem::selectAll(true);
        return arrayResponse(false, $mensagens, 200);
    }

    public function getMensagensRuins()
    {
        $mensagens = Mensagem::selectAll(false);
        return arrayResponse(false, $mensagens, 200);
    }

    public function salvarMensagem($dados)
    {
        $idUsuario = isset($dados['idUsuario']) ? $dados['idUsuario'] : '';
        $tipo = isset($dados['tipo']) ? $dados['tipo'] : '';
        $mensagem = isset($dados['mensagem']) ? $dados['mensagem'] : '';
        if (Mensagem::save($idUsuario, $tipo, $mensagem)) {
            $array = array();
            $array['msg'] = 'Mensagem cadastrada com sucesso!';
            return arrayResponse(false, $array, 200);
        }
        return arrayResponse(true, "Erro ao tentar salvar usuario!", 500);
    }

}