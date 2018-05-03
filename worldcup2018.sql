-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 09, 2018 at 12:27 PM
-- Server version: 10.1.25-MariaDB
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `worldcup2018`
--

DROP DATABASE IF EXISTS `worldcup2018`;

CREATE DATABASE `worldcup2018`;

USE `worldcup2018`;

-- --------------------------------------------------------

--
-- Table structure for table `latestOdds`
--

CREATE TABLE `latestOdds` (
  `id` varchar(10) NOT NULL,
  `value` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `matches`
--

CREATE TABLE `matches` (
  `MatchID` int(11) NOT NULL,
  `Date` date NOT NULL,
  `Time` time NOT NULL,
  `Stage` varchar(10) NOT NULL,
  `Team1` varchar(50) NOT NULL,
  `Team2` varchar(50) NOT NULL,
  `Team1Win` decimal(10,2) NOT NULL,
  `Draw` decimal(10,2) NOT NULL,
  `Team2Win` decimal(10,2) NOT NULL,
  `Prediction` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `matches`
--

INSERT INTO `matches` (`MatchID`, `Date`, `Time`, `Stage`, `Team1`, `Team2`, `Team1Win`, `Draw`, `Team2Win`, `Prediction`) VALUES
(1, '2018-06-14', '15:00:00', 'A', 'Russia', 'Saudi Arabia', '1.33', '4.83', '11.58', '1'),
(2, '2018-06-15', '12:00:00', 'A', 'Egypt', 'Uruguay', '5.00', '3.81', '1.72', '2'),
(3, '2018-06-15', '15:00:00', 'B', 'Morocco', 'Iran', '2.30', '3.08', '3.52', '1'),
(4, '2018-06-15', '18:00:00', 'B', 'Portugal', 'Spain', '4.31', '3.47', '1.91', '2'),
(5, '2018-06-16', '10:00:00', 'C', 'France', 'Australia', '1.21', '6.20', '17.71', '1'),
(6, '2018-06-16', '13:00:00', 'D', 'Argentina', 'Iceland', '1.37', '4.58', '10.51', '1'),
(7, '2018-06-16', '16:00:00', 'C', 'Peru', 'Denmark', '3.62', '3.37', '2.13', 'X'),
(8, '2018-06-16', '19:00:00', 'D', 'Croatia', 'Nigeria', '1.90', '3.44', '4.43', '1'),
(9, '2018-06-17', '12:00:00', 'E', 'Costa Rica', 'Serbia', '4.04', '3.38', '2.00', '2'),
(10, '2018-06-17', '15:00:00', 'F', 'Germany', 'Mexico', '1.50', '4.32', '7.04', '1'),
(11, '2018-06-17', '18:00:00', 'E', 'Brazil', 'Switzerland', '1.36', '4.93', '9.58', '1'),
(12, '2018-06-18', '12:00:00', 'F', 'Sweden', 'South Korea', '2.18', '3.27', '3.59', '1'),
(13, '2018-06-18', '15:00:00', 'G', 'Belgium', 'Panama', '1.19', '6.97', '19.06', '1'),
(14, '2018-06-18', '18:00:00', 'G', 'Tunisia', 'England', '9.48', '5.02', '1.35', '2'),
(15, '2018-06-19', '12:00:00', 'H', 'Colombia', 'Japan', '1.82', '3.43', '4.95', '1'),
(16, '2018-06-19', '15:00:00', 'H', 'Poland', 'Senegal', '2.29', '3.17', '3.45', '1'),
(17, '2018-06-19', '18:00:00', 'A', 'Russia', 'Egypt', '1.88', '3.43', '4.49', '1'),
(18, '2018-06-20', '12:00:00', 'B', 'Portugal', 'Morocco', '1.54', '3.91', '6.99', '1'),
(19, '2018-06-20', '15:00:00', 'A', 'Uruguay', 'Saudi Arabia', '1.26', '5.57', '13.52', '1'),
(20, '2018-06-20', '18:00:00', 'B', 'Iran', 'Spain', '18.52', '6.52', '1.19', '2'),
(21, '2018-06-21', '12:00:00', 'C', 'Denmark', 'Australia', '1.80', '3.55', '4.81', '1'),
(22, '2018-06-21', '15:00:00', 'C', 'France', 'Peru', '1.35', '4.89', '9.69', '1'),
(23, '2018-06-21', '18:00:00', 'D', 'Argentina', 'Croatia', '1.82', '3.55', '4.63', '1'),
(24, '2018-06-22', '12:00:00', 'E', 'Brazil', 'Costa Rica', '1.23', '6.23', '13.59', '1'),
(25, '2018-06-22', '15:00:00', 'D', 'Nigeria', 'Iceland', '2.88', '3.15', '2.62', '1'),
(26, '2018-06-22', '18:00:00', 'E', 'Serbia', 'Switzerland', '2.89', '3.16', '2.61', '1'),
(27, '2018-06-23', '12:00:00', 'G', 'Belgium', 'Tunisia', '1.27', '5.58', '12.40', '1'),
(28, '2018-06-23', '15:00:00', 'F', 'South Korea', 'Mexico', '4.05', '3.33', '2.01', '1'),
(29, '2018-06-23', '18:00:00', 'F', 'Germany', 'Sweden', '1.53', '4.11', '6.69', '1'),
(30, '2018-06-24', '12:00:00', 'G', 'England', 'Panama', '1.24', '5.93', '14.89', '1'),
(31, '2018-06-24', '15:00:00', 'H', 'Japan', 'Senegal', '2.96', '3.16', '2.55', '1'),
(32, '2018-06-24', '18:00:00', 'H', 'Poland', 'Colombia', '2.86', '3.18', '2.62', 'X'),
(33, '2018-06-25', '14:00:00', 'A', 'Saudi Arabia', 'Egypt', '5.18', '3.51', '1.74', '2'),
(34, '2018-06-25', '14:00:00', 'A', 'Uruguay', 'Russia', '2.45', '3.19', '3.03', '1'),
(35, '2018-06-25', '18:00:00', 'B', 'Iran', 'Portugal', '9.13', '4.67', '1.37', '2'),
(36, '2018-06-25', '18:00:00', 'B', 'Spain', 'Morocco', '1.37', '4.72', '9.19', '1'),
(37, '2018-06-26', '14:00:00', 'C', 'Australia', 'Peru', '3.32', '3.32', '2.24', '1'),
(38, '2018-06-26', '14:00:00', 'C', 'Denmark', 'France', '5.63', '3.76', '1.65', '2'),
(39, '2018-06-26', '18:00:00', 'D', 'Iceland', 'Croatia', '4.30', '3.49', '1.88', '2'),
(40, '2018-06-26', '18:00:00', 'D', 'Nigeria', 'Argentina', '6.95', '4.16', '1.50', '2'),
(41, '2018-06-27', '14:00:00', 'F', 'Mexico', 'Sweden', '2.50', '3.21', '2.96', '1'),
(42, '2018-06-27', '14:00:00', 'F', 'South Korea', 'Germany', '11.77', '5.38', '1.28', '2'),
(43, '2018-06-27', '18:00:00', 'E', 'Serbia', 'Brazil', '8.57', '4.70', '1.39', '2'),
(44, '2018-06-27', '18:00:00', 'E', 'Switzerland', 'Costa Rica', '1.83', '3.47', '4.60', '1'),
(45, '2018-06-28', '14:00:00', 'H', 'Japan', 'Poland', '4.21', '3.43', '1.91', '2'),
(46, '2018-06-28', '14:00:00', 'H', 'Senegal', 'Colombia', '4.01', '3.39', '1.97', '1'),
(47, '2018-06-28', '18:00:00', 'G', 'England', 'Belgium', '2.91', '3.24', '2.51', 'X'),
(48, '2018-06-28', '18:00:00', 'G', 'Panama', 'Tunisia', '3.37', '3.20', '2.27', '1'),
(49, '2018-06-30', '15:00:00', '16', 'France', 'Croatia', '7.25', '0.00', '34.00', '1'),
(50, '2018-06-30', '19:00:00', '16', 'Uruguay', 'Portugal', '34.00', '0.00', '27.50', '2'),
(51, '2018-07-01', '15:00:00', '16', 'Spain', 'Russia', '7.00', '0.00', '41.00', '1'),
(52, '2018-07-01', '19:00:00', '16', 'Argentina', 'Denmark', '10.50', '0.00', '101.00', '1'),
(53, '2018-07-02', '15:00:00', '16', 'Brazil', 'Mexico', '5.25', '0.00', '113.50', '1'),
(54, '2018-07-02', '19:00:00', '16', 'Belgium', 'Colombia', '12.00', '0.00', '41.00', '1'),
(55, '2018-07-03', '15:00:00', '16', 'Germany', 'Serbia', '5.50', '0.00', '201.00', '1'),
(56, '2018-07-03', '19:00:00', '16', 'Poland', 'England', '59.00', '0.00', '19.00', '2'),
(57, '2018-07-06', '15:00:00', '8', 'France', 'Portugal', '7.25', '0.00', '27.50', '1'),
(58, '2018-07-06', '19:00:00', '8', 'Brazil', 'Belgium', '5.25', '0.00', '12.00', '1'),
(59, '2018-07-07', '15:00:00', '8', 'Spain', 'Argentina', '7.00', '0.00', '10.50', '1'),
(60, '2018-07-07', '19:00:00', '8', 'Germany', 'England', '5.50', '0.00', '19.00', '1'),
(61, '2018-07-10', '19:00:00', '4', 'France', 'Brazil', '7.25', '0.00', '5.25', '2'),
(62, '2018-07-11', '19:00:00', '4', 'Spain', 'Germany', '7.00', '0.00', '5.50', '2'),
(63, '2018-07-14', '19:00:00', '2', 'France', 'Spain', '7.25', '0.00', '7.00', '2'),
(64, '2018-07-15', '19:00:00', '1', 'Brazil', 'Germany', '5.25', '0.00', '5.50', '1');

-- --------------------------------------------------------

--
-- Table structure for table `stages`
--

CREATE TABLE `stages` (
  `stage` varchar(10) NOT NULL,
  `description` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stages`
--

INSERT INTO `stages` (`stage`, `description`) VALUES
('A', 'Group A'),
('B', 'Group B'),
('C', 'Group C'),
('D', 'Group D'),
('E', 'Group E'),
('F', 'Group F'),
('G', 'Group G'),
('H', 'Group H'),
('16', 'Round of 16'),
('8', 'Quarter Final'),
('4', 'Semi Final'),
('2', '3rd Place'),
('1', 'Final');

-- --------------------------------------------------------

--
-- Table structure for table `tables`
--

CREATE TABLE `tables` (
  `Stage` varchar(3) NOT NULL,
  `Team` varchar(50) NOT NULL,
  `Played` int(11) NOT NULL,
  `W` int(11) NOT NULL,
  `D` int(11) NOT NULL,
  `L` int(11) NOT NULL,
  `Pts` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tables`
--

INSERT INTO `tables` (`Stage`, `Team`, `Played`, `W`, `D`, `L`, `Pts`) VALUES
('A', 'Uruguay', 3, 3, 0, 0, 9),
('A', 'Russia', 3, 2, 0, 1, 6),
('A', 'Egypt', 3, 1, 0, 2, 3),
('A', 'Saudi Arabia', 3, 0, 0, 3, 0),
('B', 'Spain', 3, 3, 0, 0, 9),
('B', 'Portugal', 3, 2, 0, 1, 6),
('B', 'Morocco', 3, 1, 0, 2, 3),
('B', 'Iran', 3, 0, 0, 3, 0),
('C', 'France', 3, 3, 0, 0, 9),
('C', 'Denmark', 3, 1, 1, 1, 4),
('C', 'Australia', 3, 1, 0, 2, 3),
('C', 'Peru', 3, 0, 1, 2, 1),
('D', 'Argentina', 3, 3, 0, 0, 9),
('D', 'Croatia', 3, 2, 0, 1, 6),
('D', 'Nigeria', 3, 1, 0, 2, 3),
('D', 'Iceland', 3, 0, 0, 3, 0),
('E', 'Brazil', 3, 3, 0, 0, 9),
('E', 'Serbia', 3, 2, 0, 1, 6),
('E', 'Switzerland', 3, 1, 0, 2, 3),
('E', 'Costa Rica', 3, 0, 0, 3, 0),
('F', 'Germany', 3, 3, 0, 0, 9),
('F', 'Mexico', 3, 1, 0, 2, 3),
('F', 'South Korea', 3, 1, 0, 2, 3),
('F', 'Sweden', 3, 1, 0, 2, 3),
('G', 'Belgium', 3, 2, 1, 0, 7),
('G', 'England', 3, 2, 1, 0, 7),
('G', 'Panama', 3, 1, 0, 2, 3),
('G', 'Tunisia', 3, 0, 0, 3, 0),
('H', 'Poland', 3, 2, 1, 0, 7),
('H', 'Colombia', 3, 1, 1, 1, 4),
('H', 'Japan', 3, 1, 0, 2, 3),
('H', 'Senegal', 3, 1, 0, 2, 3);

-- --------------------------------------------------------

--
-- Table structure for table `teams`
--

CREATE TABLE `teams` (
  `ID` int(11) NOT NULL,
  `Code` varchar(3) NOT NULL,
  `Stage` varchar(3) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `FIFARanking` int(11) NOT NULL,
  `OverallOdds` decimal(10,1) NOT NULL,
  `OverallOddsRank` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `teams`
--

INSERT INTO `teams` (`ID`, `Code`, `Stage`, `Name`, `FIFARanking`, `OverallOdds`, `OverallOddsRank`) VALUES
(1, 'URU', 'A', 'Uruguay', 22, '34.0', 9),
(2, 'RUS', 'A', 'Russia', 63, '41.0', 11),
(3, 'EGY', 'A', 'Egypt', 44, '176.0', 18),
(4, 'SAU', 'A', 'Saudi Arabia', 69, '1001.0', 31),
(5, 'SPA', 'B', 'Spain', 6, '7.0', 3),
(6, 'POR', 'B', 'Portugal', 3, '27.5', 8),
(7, 'MOR', 'B', 'Morocco', 42, '451.0', 26),
(8, 'IRA', 'B', 'Iran', 33, '501.0', 28),
(9, 'FRA', 'C', 'France', 9, '7.3', 4),
(10, 'DEN', 'C', 'Denmark', 12, '101.0', 14),
(11, 'AUS', 'C', 'Australia', 37, '301.0', 24),
(12, 'PER', 'C', 'Peru', 11, '176.0', 18),
(13, 'ARG', 'D', 'Argentina', 4, '10.5', 5),
(14, 'CRO', 'D', 'Croatia', 15, '34.0', 9),
(15, 'NIG', 'D', 'Nigeria', 52, '201.0', 21),
(16, 'ICE', 'D', 'Iceland', 18, '201.0', 21),
(17, 'BRA', 'E', 'Brazil', 2, '5.3', 1),
(18, 'SER', 'E', 'Serbia', 34, '201.0', 21),
(19, 'SWI', 'E', 'Switzerland', 8, '101.0', 14),
(20, 'COS', 'E', 'Costa Rica', 26, '451.0', 26),
(21, 'GER', 'F', 'Germany', 1, '5.5', 2),
(22, 'MEX', 'F', 'Mexico', 17, '113.5', 16),
(23, 'SOU', 'F', 'South Korea', 59, '626.0', 29),
(24, 'SWE', 'F', 'Sweden', 19, '151.0', 17),
(25, 'BEL', 'G', 'Belgium', 5, '12.0', 6),
(26, 'ENG', 'G', 'England', 16, '19.0', 7),
(27, 'PAN', 'G', 'Panama', 53, '1001.0', 31),
(28, 'TUN', 'G', 'Tunisia', 23, '751.0', 30),
(29, 'POL', 'H', 'Poland', 6, '59.0', 13),
(30, 'COL', 'H', 'Colombia', 13, '41.0', 11),
(31, 'JAP', 'H', 'Japan', 55, '301.0', 24),
(32, 'SEN', 'H', 'Senegal', 27, '176.0', 18);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
