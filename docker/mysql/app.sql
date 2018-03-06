-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: 15-Fev-2018 às 17:16
-- Versão do servidor: 5.7.19
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `app`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `az_ponto`
--

DROP TABLE IF EXISTS `az_ponto`;
CREATE TABLE IF NOT EXISTS `az_ponto` (
  `po_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `po_data` date DEFAULT NULL,
  `po_hr_entrada` datetime DEFAULT NULL,
  `po_hr_retorno_almoco` datetime DEFAULT NULL,
  `po_hr_saida` datetime DEFAULT NULL,
  `po_hr_saida_almoco` datetime DEFAULT NULL,
  `po_justificativa` varchar(50) DEFAULT NULL,
  `us_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`po_id`),
  KEY `FK3A850984EA129784` (`us_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `az_usuario`
--

DROP TABLE IF EXISTS `az_usuario`;
CREATE TABLE IF NOT EXISTS `az_usuario` (
  `us_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `us_data_cad` datetime DEFAULT NULL,
  `us_nome` varchar(255) DEFAULT NULL,
  `us_pis` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`us_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `az_usuario`
--

INSERT INTO `az_usuario` (`us_id`, `us_data_cad`, `us_nome`, `us_pis`) VALUES
(6, '2017-06-14 17:34:14', 'Eli Gabilon', '123456'),


-- --------------------------------------------------------

--
-- Estrutura da tabela `impressoes`
--

DROP TABLE IF EXISTS `impressoes`;
CREATE TABLE IF NOT EXISTS `impressoes` (
  `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_usuario` varchar(30) NOT NULL,
  `data` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;


-- --------------------------------------------------------

--
-- Estrutura da tabela `mensagem`
--

DROP TABLE IF EXISTS `mensagem`;
CREATE TABLE IF NOT EXISTS `mensagem` (
  `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_usuario` varchar(30) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `mensagem` varchar(500) NOT NULL,
  `dt_cadastro` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `cpf` varchar(15) DEFAULT NULL,
  `pis` varchar(15) DEFAULT NULL,
  `senha` varchar(100) NOT NULL,
  `picture` varchar(50) DEFAULT NULL,
  `dt_cadastro` datetime DEFAULT CURRENT_TIMESTAMP,
  `funcao_contribuida` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=38 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`id`, `nome`, `email`, `cpf`, `pis`, `senha`, `picture`, `dt_cadastro`, `funcao_contribuida`) VALUES
(37, 'Eli Aparecido Gabilon Fernandes', NULL, NULL, '123456', '123456', 'assets/images/face-00.png', '2017-07-14 11:26:07', 'Desenvolvedor')
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
