-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema todolist_database
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema todolist_database
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `todolist_database` DEFAULT CHARACTER SET utf8 ;
USE `todolist_database` ;

-- -----------------------------------------------------
-- Table `todolist_database`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `todolist_database`.`User` (
  `id` INT NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `lastname` VARCHAR(255) NULL,
  `username` (16) NOT NULL,
  `email` (255) NULL,
  `password` (32) NOT NULL,
  `create_time`  NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `todolist_database`.`Tak`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `todolist_database`.`Tak` (
  `id` INT NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NULL,
  `state` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
