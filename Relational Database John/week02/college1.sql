-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 22, 2024 at 06:34 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `college1`
--

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`departmentID`, `departmentName`) VALUES
('COMP01', 'COMPUTING');

--
-- Dumping data for table `enrolment`
--

INSERT INTO `enrolment` (`enrolmentID`, `studentID`, `moduleID`, `enrolmentDate`) VALUES
('1', 'EC123', 'RD101', '0000-00-00');

--
-- Dumping data for table `lecturer`
--

INSERT INTO `lecturer` (`lecturerID`, `lecturerFullname`, `lecturerEmail`, `departmentID`) VALUES
('PIPERIAS001', 'JOHN', 'piperias@college.ac.uk', 'COMP01');

--
-- Dumping data for table `lecturer_module`
--

INSERT INTO `lecturer_module` (`lecturer_module_ID`, `moduleID`, `lecturerID`, `year_of_delivery`, `semester`) VALUES
('MIX101', 'RD101', 'PIPERIAS101', 2024, 1);

--
-- Dumping data for table `module`
--

INSERT INTO `module` (`moduleID`, `moduleName`, `moduleDescription`, `credit`) VALUES
('RD101', 'Relational Databases', NULL, 6);

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`studentID`, `fullname`, `email`) VALUES
('EC123', 'Fred Flintstone', 'mailto:fllintstone@college.ac.uk');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
