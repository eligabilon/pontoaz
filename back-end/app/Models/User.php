<?php
/**
 * Created by PhpStorm.
 * User: jefer
 * Date: 30/01/2018
 * Time: 20:17
 */

namespace App\Models;

use App\DB;

class User
{
    public static function countAll()
    {
        $sql = "SELECT COUNT(*) as total FROM usuario";
        $DB = new DB;
        $stmt = $DB->prepare($sql);
        $stmt->execute();
        $rows = $stmt->fetchAll(\PDO::FETCH_ASSOC);
        foreach ($rows as $row) {
            return $row;
        }
    }

    public static function selectAll($id = null)
    {
        $where = '';
        if (!empty($id)) {
            $where = 'WHERE id = :id';
        }
        $sql = sprintf("SELECT id, nome, email, cpf, pis, picture, dt_cadastro, funcao_contribuida as funcao FROM usuario %s ORDER BY id ASC", $where);
        $DB = new DB;
        $stmt = $DB->prepare($sql);
        if (!empty($where)) {
            $stmt->bindParam(':id', $id, \PDO::PARAM_INT);
        }
        $stmt->execute();
        $users = $stmt->fetchAll(\PDO::FETCH_ASSOC);
        if (!empty($id)) {
            foreach ($users as $row) {
                return $row;
            }
        }
        return $users;
    }

    public static function selectContribuidores()
    {
        $sql = "SELECT id, nome, funcao_contribuida as funcao, picture FROM usuario WHERE funcao_contribuida IS NOT NULL ORDER BY nome ASC";
        $DB = new DB;
        $stmt = $DB->prepare($sql);
        $stmt->execute();
        $users = $stmt->fetchAll(\PDO::FETCH_ASSOC);
        return $users;
    }

    public static function selectPorEmail($email)
    {
        $DB = new DB;
        $sql = "SELECT id, nome, email, cpf, pis, picture, dt_cadastro, funcao_contribuida as funcao FROM usuario WHERE email LIKE :email";
        $stmt = $DB->prepare($sql);
        $stmt->bindParam(':email', $email);
        $stmt->execute();
        $users = $stmt->fetchAll(\PDO::FETCH_ASSOC);
        foreach ($users as $row) {
            return $row;
        }
    }

    public static function buscarTodosOsPis()
    {
        $DB = new DB;
        $sql = "SELECT DISTINCT pis FROM usuario";
        $stmt = $DB->prepare($sql);
        $stmt->execute();
        $pis = $stmt->fetchAll(\PDO::FETCH_ASSOC);
        $listaPis = array();
        foreach ($pis as $row) {
            $listaPis[] = $row['pis'];
        }
        return $listaPis;
    }

    public static function verificarUnicidadeUsuario($id, $email, $cpf, $pis)
    {
        $DB = new DB;
        $sql = "SELECT id FROM usuario WHERE email LIKE :email";
        if ($id) {
            $sql .= " AND id <> :id";
        }
        $stmt = $DB->prepare($sql);
        $stmt->bindParam(':email', $email);
        if ($id) {
            $stmt->bindParam(':id', $id);
        }
        $stmt->execute();
        $users = $stmt->fetchAll(\PDO::FETCH_ASSOC);
        if ($users) {
            return 'email';
        }

        $sql = "SELECT id FROM usuario WHERE cpf LIKE :cpf";
        if ($id) {
            $sql .= " AND id <> :id";
        }
        $stmt = $DB->prepare($sql);
        $stmt->bindParam(':cpf', $cpf);
        if ($id) {
            $stmt->bindParam(':id', $id);
        }
        $stmt->execute();
        $users = $stmt->fetchAll(\PDO::FETCH_ASSOC);
        if ($users) {
            return 'cpf';
        }

        $sql = "SELECT id FROM usuario WHERE pis LIKE :pis";
        if ($id) {
            $sql .= " AND id <> :id";
        }
        $stmt = $DB->prepare($sql);
        $stmt->bindParam(':pis', $pis);
        if ($id) {
            $stmt->bindParam(':id', $id);
        }
        $stmt->execute();
        $users = $stmt->fetchAll(\PDO::FETCH_ASSOC);
        if ($users) {
            return 'pis';
        }
        return null;
    }

    public static function save($name, $email, $cpf, $pis, $senha, $picture)
    {
        $DB = new DB;
        $sql = "INSERT INTO usuario (nome, email, cpf, pis, senha, picture) VALUES(:nome, :email, :cpf, :pis, :senha, :picture)";
        $stmt = $DB->prepare($sql);
        $stmt->bindParam(':nome', $name);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':cpf', $cpf);
        $stmt->bindParam(':pis', $pis);
        $stmt->bindParam(':senha', $senha);
        $stmt->bindParam(':picture', $picture);
        if ($stmt->execute()) {
            return true;
        } else {
            print_r($stmt->errorInfo());
            return false;
        }
    }

    public static function update($id, $name, $email, $cpf, $pis, $picture)
    {
        $DB = new DB;
        $sql = "UPDATE usuario SET nome = :nome, email = :email, cpf = :cpf, pis = :pis, picture = :picture WHERE id = :id";
        $stmt = $DB->prepare($sql);
        $stmt->bindParam(':nome', $name);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':cpf', $cpf);
        $stmt->bindParam(':pis', $pis);
        $stmt->bindParam(':picture', $picture);
        $stmt->bindParam(':id', $id, \PDO::PARAM_INT);

        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }


    public static function remove($id)
    {
        $DB = new DB;
        $sql = "DELETE FROM usuario WHERE id = :id";
        $stmt = $DB->prepare($sql);
        $stmt->bindParam(':id', $id, \PDO::PARAM_INT);
        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }

    public static function login($login, $senha)
    {
        $DB = new DB;
        $sql = "SELECT id, nome, email, cpf, pis, picture, dt_cadastro, funcao_contribuida as funcao FROM usuario ";
        $sql .= "WHERE (email LIKE :login OR cpf = :login OR pis = :login) AND senha LIKE :senha ";
        $stmt = $DB->prepare($sql);
        $stmt->bindParam(':login', $login);
        $stmt->bindParam(':senha', $senha);
        $stmt->execute();
        $users = $stmt->fetchAll(\PDO::FETCH_ASSOC);
        foreach ($users as $row) {
            return $row;
        }
        return null;
    }
}
