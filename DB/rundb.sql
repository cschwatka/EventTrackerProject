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
  `date` DATE NULL,
  `distance` DECIMAL(5,2) NULL,
  `start_time` DATETIME NULL,
  `end_time` DATETIME NULL,
  `calories_burned` INT NULL,
  `comments` VARCHAR(500) NULL,
  `heart_rate` INT NULL,
  `media_url` VARCHAR(45) NULL,
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
INSERT INTO `run` (`id`, `name`, `date`, `distance`, `start_time`, `end_time`, `calories_burned`, `comments`, `heart_rate`, `media_url`) VALUES (1, 'Willow Spring Open Space', '2022-05-01', 2.1, '2022-05-01 12:00:00', '2022-05-01 12:30:00', NULL, NULL, NULL, NULL);
INSERT INTO `run` (`id`, `name`, `date`, `distance`, `start_time`, `end_time`, `calories_burned`, `comments`, `heart_rate`, `media_url`) VALUES (2, 'Heritage Hills Trail', '2022-03-01', 2.2, '2022-03-01 12:00:00', '2022-03-01 12:30:00', NULL, NULL, NULL, NULL);
INSERT INTO `run` (`id`, `name`, `date`, `distance`, `start_time`, `end_time`, `calories_burned`, `comments`, `heart_rate`, `media_url`) VALUES (3, 'Ridgegate Trail', '2022-03-03', 3.1, '2022-03-03 12:00:00', '2022-03-03 12:30:00', NULL, NULL, NULL, NULL);
INSERT INTO `run` (`id`, `name`, `date`, `distance`, `start_time`, `end_time`, `calories_burned`, `comments`, `heart_rate`, `media_url`) VALUES (4, 'Highline Canal Trail', '2022-03-04', 1.8, '2022-03-04 12:00:00', '2022-03-04 12:30:00', NULL, NULL, NULL, NULL);
INSERT INTO `run` (`id`, `name`, `date`, `distance`, `start_time`, `end_time`, `calories_burned`, `comments`, `heart_rate`, `media_url`) VALUES (5, 'Maximus Trail Park', '2022-04-01', 2.7, '2022-04-01 12:00:00', '2022-04-01 12:30:00', NULL, NULL, NULL, NULL);
INSERT INTO `run` (`id`, `name`, `date`, `distance`, `start_time`, `end_time`, `calories_burned`, `comments`, `heart_rate`, `media_url`) VALUES (6, 'Entertainment District Trail', '2022-03-09', 2.5, '2022-03-09 12:00:00', '2022-03-09 12:30:00', NULL, 'highlight of our trip!', NULL, NULL);

COMMIT;

