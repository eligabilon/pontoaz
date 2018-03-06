<?php
/**
 * Created by PhpStorm.
 * User: jefer
 * Date: 30/01/2018
 * Time: 20:05
 */

// diretorio base da aplicacao
define('BASE_PATH', dirname(__FILE__));

// credenciais de acesso ao MySQL
define('MYSQL_HOST', 'localhost');
define('MYSQL_USER', 'root');
define('MYSQL_PASS', '');
define('MYSQL_DBNAME', 'app');

// configuracoes do PHP
ini_set('display_errors', true);
error_reporting(E_ALL);
date_default_timezone_set('America/Sao_Paulo');