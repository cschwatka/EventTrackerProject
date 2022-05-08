-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema rundb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `rundb` ;

-- -----------------------------------------------------
-- Schema rundb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `rundb` DEFAULT CHARACTER SET utf8 ;
USE `rundb` ;

-- -----------------------------------------------------
-- Table `run`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `run` ;

CREATE TABLE IF NOT EXISTS `run` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS run@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'run'@'localhost' IDENTIFIED BY 'run';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'run'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `run`
-- -----------------------------------------------------
START TRANSACTION;
USE `rundb`;
INSERT INTO `run` (`id`, `name`) VALUES (1, 'Open Space');

COMMIT;

