<?php
/**
 * Created by PhpStorm.
 * User: jefer
 * Date: 14/02/2018
 * Time: 20:17
 */

namespace App\Models;

use App\DB;

class Impressao
{
    public static function countAll()
    {
        $sql = "SELECT COUNT(*) as total FROM impressoes";
        $DB = new DB;
        $stmt = $DB->prepare($sql);
        $stmt->execute();
        $rows = $stmt->fetchAll(\PDO::FETCH_ASSOC);
        foreach ($rows as $row) {
            return $row;
        }
    }

    public static function getUltimasImpressoes()
    {
        $sql = "SELECT i.id, u.id, u.nome as nomeUsuario, u.picture as pictureUsuario, i.data FROM impressoes i ";
        $sql .= "JOIN usuario u ON u.id = i.id_usuario ";
        $sql .= "ORDER BY i.data DESC ";
        $DB = new DB;
        $stmt = $DB->prepare($sql);
        $stmt->execute();
        $users = $stmt->fetchAll(\PDO::FETCH_ASSOC);
        return $users;
    }

    public static function getImpressoesPorUsuario()
    {
        $sql = "SELECT u.id, u.nome as nomeUsuario, u.picture as pictureUsuario, COUNT(*) as total FROM impressoes i ";
        $sql .= "JOIN usuario u ON u.id = i.id_usuario ";
        $sql .= "GROUP BY u.id, u.nome, u.picture";
        $DB = new DB;
        $stmt = $DB->prepare($sql);
        $stmt->execute();
        $users = $stmt->fetchAll(\PDO::FETCH_ASSOC);
        return $users;
    }

    public static function salvarImpressao($idUsuario)
    {
        $DB = new DB;
        $sql = "INSERT INTO impressoes (id_usuario) VALUES (:idUsuario)";
        $stmt = $DB->prepare($sql);
        $stmt->bindParam(':idUsuario', $idUsuario);
        if ($stmt->execute()) {
            return true;
        } else {
            print_r($stmt->errorInfo());
            return false;
        }
    }

}
