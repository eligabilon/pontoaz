<?php
/**
 * Created by PhpStorm.
 * User: jefer
 * Date: 30/01/2018
 * Time: 20:18
 */

namespace App\Controllers;

use \App\Models\User;

class UsersController
{
    public function getAll()
    {
        $users = User::selectAll();
        return arrayResponse(false, $users, 200);
    }

    public function getContribuidores()
    {
        $users = User::selectContribuidores();
        return arrayResponse(false, $users, 200);
    }

    public function get($id)
    {
        $user = User::selectAll($id);
        if (!$user) {
            return arrayResponse(true, "Usuario não encontrado!", 200);
        }
        return arrayResponse(false, $user, 200);
    }

    public function buscarPis()
    {
        $pis = User::buscarTodosOsPis();
        if (!$pis) {
            return arrayResponse(true, "Erro ao buscar PIS!", 200);
        }
        return arrayResponse(false, $pis, 200);
    }

    public function remove($id)
    {
        if (User::remove($id)) {
            header('Location: /');
            exit;
        }
    }

    public function getCountUsers()
    {
        $total = User::countAll();
        return arrayResponse(false, $total, 200);
    }
}