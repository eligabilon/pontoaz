<?php
/**
 * Created by PhpStorm.
 * User: jefer
 * Date: 30/01/2018
 * Time: 20:15
 */

/**
 * Retorna o diretório das views
 */
function viewsPath()
{
    return BASE_PATH . DIRECTORY_SEPARATOR . 'app' . DIRECTORY_SEPARATOR . 'Views' . DIRECTORY_SEPARATOR;
}

/**
 * Converte datas entre os padrões ISO e brasileiro
 * Fonte: http://rberaldo.com.br/php-conversao-de-datas-formato-brasileiro-e-formato-iso/
 */
function dateConvert($date)
{
    if (!strstr($date, '/')) {
        // $date está no formato ISO (yyyy-mm-dd) e deve ser convertida
        // para dd/mm/yyyy
        sscanf($date, '%d-%d-%d', $y, $m, $d);
        return sprintf('%02d/%02d/%04d', $d, $m, $y);
    } else {
        // $date está no formato brasileiro e deve ser convertida para ISO
        sscanf($date, '%d/%d/%d', $d, $m, $y);
        return sprintf('%04d-%02d-%02d', $y, $m, $d);
    }
    return false;
}

/**
 * Calcula a idade a partir da data de nascimento
 * Sobre a classe DateTime: http://rberaldo.com.br/php-usando-a-classe-nativa-datetime/
 */
function calculateAge($birthdate)
{
    $now = new DateTime();
    $diff = $now->diff(new DateTime($birthdate));
    return $diff->y;
}

/**
 * Retorna o diretório das views
 */
function arrayResponse($error, $data, $status)
{
    $array = array();
    $array['error'] = $error;
    if(is_string($data)){
        $array['data']['msg'] = $data;
    } else {
        $array['data'] = $data;
    }
    $array['status'] = $status ? $status : 200;
    return encode_items($array);
}

function encode_items($array)
{
    foreach($array as $key => $value)
    {
        if(is_array($value))
        {
            $array[$key] = encode_items($value);
        }
        else
        {
            $array[$key] = mb_convert_encoding($value, 'UTF-8', 'auto');
        }
    }

    return $array;
}