<?php
/**
 * Created by PhpStorm.
 * User: jefer
 * Date: 14/02/2018
 * Time: 20:17
 */

namespace App\Models;

use App\DB;

class Mensagem
{
    public static function selectAll($boas = true)
    {
        $sql = "SELECT m.id, u.id as idUsuario, u.nome as nomeUsuario, u.picture as pictureUsuario, m.tipo, m.mensagem, m.dt_cadastro as dataCadastro ";
        $sql .= "FROM mensagem m ";
        $sql .= "JOIN usuario u ON u.id = m.id_usuario ";

        if($boas){
            $sql .= "WHERE m.tipo IN ('Elogio', 'Sugestão') ";
        } else {
            $sql .= "WHERE m.tipo IN ('Bug', 'Reclamação') ";
        }

        $sql .= "ORDER BY m.dt_cadastro DESC ";
        $DB = new DB;
        $stmt = $DB->prepare($sql);
        $stmt->execute();
        $users = $stmt->fetchAll(\PDO::FETCH_ASSOC);
        return $users;
    }

    public static function save($idUsuario, $tipo, $mensagem)
    {
        $DB = new DB;
        $sql = "INSERT INTO mensagem (id_usuario, tipo, mensagem) VALUES (:idUsuario, :tipo, :mensagem)";
        $stmt = $DB->prepare($sql);
        $stmt->bindParam(':idUsuario', $idUsuario);
        $stmt->bindParam(':tipo', $tipo);
        $stmt->bindParam(':mensagem', $mensagem);
        if ($stmt->execute()) {
            return true;
        } else {
            print_r($stmt->errorInfo());
            return false;
        }
    }

}
