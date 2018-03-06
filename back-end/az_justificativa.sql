-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: 31-Jan-2018 às 17:52
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
-- Database: `az_justificativa`
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
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `az_usuario`
--

INSERT INTO `az_usuario` (`us_id`, `us_data_cad`, `us_nome`, `us_pis`) VALUES
(6, '2017-06-14 17:34:14', 'Victor H. R. Pereira', '20461835449'),
(7, '2017-06-14 13:17:13', 'Jeferson Urbieta da Silva Neto', '20012309278'),
(8, '2017-06-23 15:42:17', 'Lucas Bueno', '20153191907'),
(14, '2017-06-28 14:29:59', 'Jean Rodrigo Duarte Barbosa', '20963254868'),
(15, '2017-07-14 11:26:07', 'Eli Aparecido Gabilon Fernandes', '20033359835'),
(16, '2017-07-14 12:06:18', 'Ulisses Witter da Silva', '20008078496'),
(18, '2017-08-01 15:28:33', 'Silvania Sirlei de Carvalho', '20304687094'),
(19, '2017-08-01 15:36:05', 'William Lourenço de Almeida', '19020872799'),
(20, '2017-08-03 09:06:57', 'Rafael Ramos de Oliveira', '12760303383'),
(21, '2017-08-07 12:21:08', 'Helio Makoto Kanno', '20758348430'),
(22, '2017-08-09 12:25:22', 'Wagner dos Santos Rodrigues', '20964831982'),
(23, '2017-08-10 13:49:51', 'Evandro Oliveira da Silva', '20744877452'),
(24, '2017-08-15 15:25:45', 'Ricardo Marcos Gonçalves Filho', '11998204280');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nome` varchar(30) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `cpf` varchar(15) DEFAULT NULL,
  `pis` varchar(15) DEFAULT NULL,
  `senha` varchar(100) NOT NULL,
  `picture` varchar(50) DEFAULT NULL,
  `dt_cadastro` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`id`, `nome`, `email`, `cpf`, `pis`, `senha`, `picture`, `dt_cadastro`) VALUES
(1, 'Jeferson', 'jeferson.urbieta@gmail.com', '05645319109', '123456789', '', 'assets/images/user-default.jpg', '2018-01-30 21:15:28'),
(3, 'Jeferson', 'jeferson.urbieta@gmail.com', '05645319109', '123456789', '', 'assets/images/user-default.jpg', '2018-01-30 21:56:40'),
(4, 'Jeferson', 'jeferson.urbieta2@gmail.com', '05645319108', '123456489', '', 'assets/images/user-default.jpg', '2018-01-30 23:40:01'),
(5, 'JEFERSON URBIETA DA SILVA NETO', 'jeferson.urbieta3@gmail.com', '90909090', '90909090', '1234', 'assets/images/user-default.jpg', '2018-01-30 23:56:58'),
(6, 'JEFERSON URBIETA DA SILVA NETO', 'jeferson.urbieta5@gmail.com', 'adsdasd', 'adsdasd', 'adsdasd', 'assets/images/user-default.jpg', '2018-01-31 00:03:38'),
(7, 'JEFERSON URBIETA DA SILVA NETO', 'jeferson.urbieta6@gmail.com', '056453191909', '44445345', '1234', 'assets/images/user-default.jpg', '2018-01-31 08:41:46'),
(8, 'JEFERSON URBIETA DA SILVA NETO', 'jeferson.urbieta342@gmail.com', '3423423423', '4234234234', '4234234234', 'assets/images/user-default.jpg', '2018-01-31 09:11:36'),
(9, 'JEFERSON URBIETA DA SILVA NETO', 'jeferson.urbieta3423@gmail.com', '34233423', '34233423', '34233423', 'assets/images/user-default.jpg', '2018-01-31 09:12:03'),
(10, 'JEFERSON URBIETA DA SILVA NETO', 'jeferson.urbietadasdadas@gmail.com', 'dasdadas', 'dasdadas', 'dasdadas', 'assets/images/user-default.jpg', '2018-01-31 09:12:37'),
(11, 'JEFERSON URBIETA DA SILVA NETO', 'jeferson.urbietawdadasdads@gmail.com', 'wdadasdads', 'wdadasdads', 'wdadasdads', 'assets/images/user-default.jpg', '2018-01-31 09:13:30'),
(12, 'JEFERSON URBIETA DA SILVA NETO', 'jeferson.urbietawdadasdadswdadasdads@gmail.com', 'wdadasdadsw', 'wdadasdadsw', 'wdadasdadsw', 'assets/images/user-default.jpg', '2018-01-31 09:14:41'),
(13, 'JEFERSON URBIETA DA SILVA NETO', 'jeferson.urbietareads@gmail.com', 'reads', 'reads', 'reads', 'assets/images/user-default.jpg', '2018-01-31 09:14:58'),
(14, 'JEFERSON URBIETA DA SILVA NETO', 'jeferson.urbietadasaasd@gmail.com', 'dasaasd', 'dasaasd', 'dasaasd', 'assets/images/user-default.jpg', '2018-01-31 09:58:00'),
(15, 'JEFERSON URBIETA DA SILVA NETO', 'jeferson.urbieta234234@gmail.com', '234234', '234234', '234234', 'assets/images/user-default.jpg', '2018-01-31 10:00:08'),
(16, 'JEFERSON URBIETA DA SILVA NETO', 'jeferson.urbieta2wer@gmail.com', '2wer', '2wer', '2wer', 'assets/images/user-default.jpg', '2018-01-31 10:01:31'),
(17, 'JEFERSON URBIETA DA SILVA NETO', 'jeferson.urbietadasdas@gmail.com', 'dasdas', 'dasdas', 'dasdas', 'assets/images/user-default.jpg', '2018-01-31 10:03:40'),
(18, 'JEFERSON URBIETA DA SILVA NETO', 'jeferson.urbietaadsdsa@gmail.com', 'adsdsa', 'adsdsa', 'adsdsa', 'assets/images/user-default.jpg', '2018-01-31 10:06:50'),
(19, 'JEFERSON URBIETA DA SILVA NETO', 'jeferson.urbietadasaas@gmail.com', 'dasaas', 'dasaas', 'dasaas', 'assets/images/user-default.jpg', '2018-01-31 10:09:26'),
(20, 'JEFERSON URBIETA DA', 'jeferson.urbietaasdasdasd@gmail.com', 'asdasdasd', 'asdasdasd', 'asdasdasd', 'assets/images/user-default.jpg', '2018-01-31 10:11:05'),
(21, 'JEFERSON URBIETA DA SIL', 'jeferson.urbietadasdasd@gmail.com', 'dasdasd', 'dasdasd', 'dasdasd', 'assets/images/user-default.jpg', '2018-01-31 10:12:25'),
(22, 'JEFERSON URBIETA DA SILVA NETO', 'jeferson.urbietaasdasd@gmail.com', 'asdasd', 'asdasd', 'asdasd', 'assets/images/user-default.jpg', '2018-01-31 10:16:54'),
(23, 'JEFERSON URBIETA DA SILVA NETO', 'jeferson.urbiedastaasdasd@gmail.com', 'as42dasd', 'a42dasd', 'asdasd', 'assets/images/user-default.jpg', '2018-01-31 10:19:45'),
(24, 'JEFERSON URBIETA DA SILVA NETO', 'jeferson.urbiedastaasadasd@gmail.com', 'as42ddasd', 'a42ddasd', 'asdasd', 'assets/images/user-default.jpg', '2018-01-31 10:20:08'),
(25, 'JEFERSON URBIETA DA SILVA NETO', 'jeferson.urbiedaasadasd@gmail.com', 'ddasd', 'dasd', 'asdasd', 'assets/images/user-default.jpg', '2018-01-31 10:23:44');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
