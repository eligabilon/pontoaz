<?php
/**
 * Created by PhpStorm.
 * User: jefer
 * Date: 30/01/2018
 * Time: 20:18
 */

namespace App\Controllers;

use App\Models\Impressao;

class ImpressaoController
{
    public function imprimir($dados)
    {
        $usuario = isset($dados['usuario']) ? $dados['usuario'] : '';
        $justificativas = isset($dados['justificativas']) ? $dados['justificativas'] : '';
        $html = '
      <link href="mypdf.css" type="text/css" rel="stylesheet" media="mpdf"/>
      <style type="text/css">
      html {
        font-family: sans-serif;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
    
      body {
        margin: 0;
      }
    
      p, span, table {
        font-size: 1.1em;
      }
    
      .container-fluid {
        margin-right: auto;
        margin-left: auto;
      }
    
      .row, table {
        width: 100%;
        margin-bottom: 5px;
      }
    
      .title-page {
        margin-bottom: 25px;
        margin-top: 0px;
        padding-top: 0px;
      }
      .title-page h3{
        margin-top: 5px;
        padding-top: 0px;
      }
    
      .justificativa-item {
        margin-bottom: 25px;
      }
    
      .justificativa-identificacao {
        margin-bottom: 10px;
      }
    
      footer .row {
        padding-bottom: 15px;
      }
    
      .justificativa-informativo {
        font-size: 0.8em;
      }
    
      .text-center {
        text-align: center;
      }
      
      .texto-sublinado{
        text-decoration: underline;
        word-wrap: break-word;
      }
      .texto-sublinado-em-cima{
        border-top: 1px solid black;
        padding-top: 10px;
        width: 200px;
      }
      .assinaturas{
        margin-bottom: 30px;
      }
      .texto-pequeno{
         font-size: 0.75em;
      }
    </style>
    <div class="container-fluid">
      <article class="justificativa-identificacao">
        <p>
          Eu ' . $usuario['nome'] . ' do PIS nº ' . $usuario['pis'] . ',
          registrado na empresa AZ Informática Ltda, CNPJ 24.598.492/0001-27 sob regime CLT
          autorizo que seja feito em minha folha de ponto a(s) seguinte(s) correção(es):
        </p>
      </article>
';
        foreach ($justificativas AS $j) {
            $html .= '<article class="justificativa-item">
                  <div class="row">
                    <span><strong>Data:</strong> ' . dateConvert($j['data']) . '</span>
                  </div>
                  <div class="row">
                    <table class="items" width="100%">
                      <tbody>
                      <tr>
                        <td width="25%"><input type="checkbox" ' . (isset($j['entrada']) ? 'value="true" checked="checked"' : '') . '/> Hr Entrada</td>
                        <td width="25%">' . (isset($j['entrada']) ? '<span class="texto-sublinado">' . $j['entrada'] . '</span>' : '___:___') . '</td>
                        <td width="25%"><input type="checkbox" ' . (isset($j['saidaAlmoco']) ? 'value="true" checked="checked"' : '') . '/> Hr Saida almoço</td>
                        <td width="25%">' . (isset($j['saidaAlmoco']) ? '<span class="texto-sublinado">' . $j['saidaAlmoco'] . '</span>' : '___:___') . '</td>
                      </tr>
                      <tr>
                        <td width="25%"><input type="checkbox" ' . (isset($j['retornoAlmoco']) ? 'value="true" checked="checked"' : '') . '/> Hr Retorno almoço</td>
                        <td width="25%">' . (isset($j['retornoAlmoco']) ? '<span class="texto-sublinado">' . $j['retornoAlmoco'] . '</span>' : '___:___') . '</td>
                        <td width="25%"><input type="checkbox" ' . (isset($j['saida']) ? 'value="true" checked="checked"' : '') . '/> Hr Saída</td>
                        <td width="25%">' . (isset($j['saida']) ? '<span class="texto-sublinado">' . $j['saida'] . '</span>' : '___:___') . '</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                
                  <div class="row">
                    <strong>Justificativa: </strong><span class="texto-sublinado">' . $j['justificativa'] . '</span>
                  </div>
                </article>';
        }

        $html .= '</div >';

        $header = '
    <header>
      <div style="text-align: right"><span class="texto-pequeno">{PAGENO}</span></div>
      <div class="title-page text-center">
        <h3>AUTORIZAÇÃO PARA INCLUSÃO / ALTERAÇÃO REGISTRO DE PONTO </h3>
      </div>
    </header>
    <table class="items assinaturas" width="100%">
          <tbody>
          <tr>
            <td width="50%" class="text-center"></td>
            <td width="50%" class="text-center"></td>
          </tr>
          </tbody>
        </table>
  ';

        $footer = '
      <footer>
      <div class="row">
       <table class="items assinaturas" width="100%">
          <tbody>
          <tr>
            <td width="50%" class="text-center"><div class="texto-sublinado-em-cima">Assinatura Funcionário</div></td>
            <td width="50%" class="text-center"><div class="texto-sublinado-em-cima">Assinatura Responsável</div></td>
          </tr>
          </tbody>
        </table>
      </div>
      
      <div class="row justificativa-informativo">
        <div class="col-sm-12" >
          <span>* Não rasurar . Os campos não preenchidos devem ser inutilizados </span>
        </div>
      </div>
      <div class="row" style = "border-top: 1px solid #000000; padding-top: 5mm; ">
        <div class="col-sm-12">
          <span> A ser preenchido pelo Departamento administrativo </span>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <span> Recebido em:_____ / _____ / _____  Por: ____________________________ </span>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <span> Inserido no sistema em:_____ / _____ / _____ Por: _____________________ </span>
        </div>
      </div>
      <div class="row">
        <span class="texto-pequeno">Impresso ' . date('d/m/y') . '</span>
      </div>
    </footer>
  ';
        $mpdf = new \Mpdf\Mpdf([
            'margin_left' => 10,
            'margin_right' => 10,
            'margin_top' => 25,
            'margin_bottom' => 25,
            'margin_header' => 10,
            'margin_footer' => 10,
            'setAutoBottomMargin' => 'stretch',
            'setAutoTopMargin' => 'stretch',
            'autoMarginPadding' => 5
        ]);

        Impressao::salvarImpressao($usuario['id']);

        $mpdf->SetProtection(array('print'));
        $mpdf->SetTitle("Ponto AZ");
        $mpdf->SetWatermarkText("Ponto AZ");
        $mpdf->showWatermarkText = true;
        $mpdf->watermarkTextAlpha = 0.02;
        $mpdf->SetHTMLHeader($header);
        $mpdf->WriteHTML($html);
        $qtdAdicionarPagina = array(4, 5, 11, 12, 17, 18, 24);
        if (in_array(count($justificativas), $qtdAdicionarPagina)) {
            $mpdf->AddPage();
        }
        $mpdf->SetHTMLFooter($footer);

        return $mpdf;
    }

    public function getNumeroImpressoes()
    {
        $total = Impressao::countAll();
        return arrayResponse(false, $total, 200);
    }

    public function getInformacoesUsuariosImpressao()
    {
        $ultimasImpressoes = Impressao::getUltimasImpressoes();
        $impressoesPorUsuario = Impressao::getImpressoesPorUsuario();
        $response = array();
        $response['ultimasImpressoes'] = $ultimasImpressoes;
        $response['impressoesPorUsuario'] = $impressoesPorUsuario;
        return arrayResponse(false, $response, 200);
    }

}
