import { MigrationInterface, QueryRunner } from "typeorm";

export class seeds1628436312700 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("INSERT INTO `shop`.`roles` (`name`, `description`) VALUES ('USER', 'Користувач')");
        await queryRunner.query("INSERT INTO `shop`.`roles` (`name`, `description`) VALUES ('ADMIN', 'Адміністратор')");
        await queryRunner.query("INSERT INTO `shop`.`categories` (`name`) VALUES ('Смартфони')");
        await queryRunner.query("INSERT INTO `shop`.`categories` (`name`) VALUES ('Ноутбуки, компьютери та мфу')");
        await queryRunner.query("INSERT INTO `shop`.`categories` (`name`) VALUES ('ТВ та електроніка')");
        await queryRunner.query("INSERT INTO `shop`.`categories` (`name`) VALUES ('Аудіо техніка')");
        await queryRunner.query("INSERT INTO `shop`.`categories` (`name`) VALUES ('Побутова техніка')");
        await queryRunner.query("INSERT INTO `shop`.`categories` (`name`) VALUES ('Сантехніка')");
        await queryRunner.query("INSERT INTO `shop`.`categories` (`name`) VALUES ('Автотовари')");
        await queryRunner.query("INSERT INTO `shop`.`categories` (`name`) VALUES ('Велотовари')");
        await queryRunner.query("INSERT INTO `shop`.`categories` (`name`) VALUES ('Канцтовари')");
        await queryRunner.query("INSERT INTO `shop`.`categories` (`name`) VALUES ('Сад і город')");
        await queryRunner.query("INSERT INTO `shop`.`types` (`name`) VALUES ('Смартфони')");
        await queryRunner.query("INSERT INTO `shop`.`types` (`name`) VALUES ('Телевізори')");
        await queryRunner.query("INSERT INTO `shop`.`brands` (`name`) VALUES ('Samsung')");
        await queryRunner.query("INSERT INTO `shop`.`brands` (`name`) VALUES ('Apple')");
        await queryRunner.query("INSERT INTO `shop`.`brands` (`name`) VALUES ('Xiaomi')");
        await queryRunner.query("INSERT INTO `shop`.`products` (`code`, `name`, `amount`, `price`, `priceold`, `pic`, `categoryId`, `typeId`, `brandId`) VALUES (1,'Смарт-часы Amazfit GTS 2e (Black) A20',2,120000,0,'1.webp',3,1,2)");
        await queryRunner.query("INSERT INTO `shop`.`products` (`code`, `name`, `amount`, `price`, `priceold`, `pic`, `categoryId`, `typeId`, `brandId`) VALUES (2,'Беспроводные наушники Realme Buds Air Pro (White)',3,150055,229900,'2.webp',3,2,3)");
        await queryRunner.query("INSERT INTO `shop`.`products` (`code`, `name`, `amount`, `price`, `priceold`, `pic`, `categoryId`, `typeId`, `brandId`) VALUES (3,'Смарт-часы Amazfit GTS 2 mini (Black)',3,289900,0,'3.webp',3,2,2)");
        await queryRunner.query("INSERT INTO `shop`.`products` (`code`, `name`, `amount`, `price`, `priceold`, `pic`, `categoryId`, `typeId`, `brandId`) VALUES (4,'Samsung Galaxy A12 2021 A125F 3/32GB Blue',1,449900,0,'4.webp',3,1,1)");
        await queryRunner.query("INSERT INTO `shop`.`products` (`code`, `name`, `amount`, `price`, `priceold`, `pic`, `categoryId`, `typeId`, `brandId`) VALUES (5,'Телевизор Haier 32\" HD Smart TV BX',5,479900,549900,'5.webp',3,2,2)");
        await queryRunner.query("INSERT INTO `shop`.`products` (`code`, `name`, `amount`, `price`, `priceold`, `pic`, `categoryId`, `typeId`, `brandId`) VALUES (6,'realme 7 Pro 8/128Gb (Blue)',3,849900,0,'6.webp',3,1,2)");
        await queryRunner.query("INSERT INTO `shop`.`products` (`code`, `name`, `amount`, `price`, `priceold`, `pic`, `categoryId`, `typeId`, `brandId`) VALUES (7,'Смарт-часы Amazfit GTR 2e (Green)',10,399900,0,'7.webp',3,2,2)");
        await queryRunner.query("INSERT INTO `shop`.`products` (`code`, `name`, `amount`, `price`, `priceold`, `pic`, `categoryId`, `typeId`, `brandId`) VALUES (8,'Телевизор Xiaomi Mi TV 4S 43\" UHD 4K',7,899900,0,'8.webp',3,2,1)");
        await queryRunner.query("INSERT INTO `shop`.`products` (`code`, `name`, `amount`, `price`, `priceold`, `pic`, `categoryId`, `typeId`, `brandId`) VALUES (9,'Apple AirPods 2019 (2 поколения) with Charging Case',4,529900,0,'9.webp',3,1,2)");
        await queryRunner.query("INSERT INTO `shop`.`products` (`code`, `name`, `amount`, `price`, `priceold`, `pic`, `categoryId`, `typeId`, `brandId`) VALUES (10,'Фитнес-трекер Xiaomi Mi Smart Band 5 Black Global',15,99900,129900,'10.webp',3,2,2)");
        await queryRunner.query("INSERT INTO `shop`.`products` (`code`, `name`, `amount`, `price`, `priceold`, `pic`, `categoryId`, `typeId`, `brandId`) VALUES (11,'realme C3 3/64Gb (Red)',3,349900,389900,'11.webp',3,1,3)");
        await queryRunner.query("INSERT INTO `shop`.`products` (`code`, `name`, `amount`, `price`, `priceold`, `pic`, `categoryId`, `typeId`, `brandId`) VALUES (12,'Диск Hitman 3 Standard Edition Russian',2,199900,0,'12.webp',3,2,2)");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DELETE FROM `shop`.`roles` WHERE (`name`='USER')");
        await queryRunner.query("DELETE FROM `shop`.`roles` WHERE (`name`='ADMIN')");
        await queryRunner.query("DELETE FROM `shop`.`categories` WHERE (`name`='Смартфони')");
        await queryRunner.query("DELETE FROM `shop`.`categories` WHERE (`name`='Ноутбуки, компьютери та мфу')");
        await queryRunner.query("DELETE FROM `shop`.`categories` WHERE (`name`='ТВ та електроніка')");
        await queryRunner.query("DELETE FROM `shop`.`categories` WHERE (`name`='Аудіо техніка')");
        await queryRunner.query("DELETE FROM `shop`.`categories` WHERE (`name`='Побутова техніка')");
        await queryRunner.query("DELETE FROM `shop`.`categories` WHERE (`name`='Сантехніка')");
        await queryRunner.query("DELETE FROM `shop`.`categories` WHERE (`name`='Автотовари')");
        await queryRunner.query("DELETE FROM `shop`.`categories` WHERE (`name`='Велотовари')");
        await queryRunner.query("DELETE FROM `shop`.`categories` WHERE (`name`='Канцтовари')");
        await queryRunner.query("DELETE FROM `shop`.`categories` WHERE (`name`='Сад і город')");
        await queryRunner.query("DELETE FROM `shop`.`types` WHERE (`name`='Смартфони')");
        await queryRunner.query("DELETE FROM `shop`.`types` WHERE (`name`='Телевізори')");
        await queryRunner.query("DELETE FROM `shop`.`brands` WHERE (`name`='Samsung')");
        await queryRunner.query("DELETE FROM `shop`.`brands` WHERE (`name`='Apple')");
        await queryRunner.query("DELETE FROM `shop`.`brands` WHERE (`name`='Xiaomi')");
        await queryRunner.query("DELETE FROM `shop`.`products` WHERE (`name`='Смарт-часы Amazfit GTS 2e (Black) A20')");
        await queryRunner.query("DELETE FROM `shop`.`products` WHERE (`name`='Беспроводные наушники Realme Buds Air Pro (White)')");
        await queryRunner.query("DELETE FROM `shop`.`products` WHERE (`name`='Смарт-часы Amazfit GTS 2 mini (Black)')");
        await queryRunner.query("DELETE FROM `shop`.`products` WHERE (`name`='Samsung Galaxy A12 2021 A125F 3/32GB Blue')");
        await queryRunner.query("DELETE FROM `shop`.`products` WHERE (`name`='Телевизор Haier 32\" HD Smart TV BX')");
        await queryRunner.query("DELETE FROM `shop`.`products` WHERE (`name`='realme 7 Pro 8/128Gb (Blue)')");
        await queryRunner.query("DELETE FROM `shop`.`products` WHERE (`name`='Смарт-часы Amazfit GTR 2e (Green)')");
        await queryRunner.query("DELETE FROM `shop`.`products` WHERE (`name`='Телевизор Xiaomi Mi TV 4S 43\" UHD 4K')");
        await queryRunner.query("DELETE FROM `shop`.`products` WHERE (`name`='Apple AirPods 2019 (2 поколения) with Charging Case')");
        await queryRunner.query("DELETE FROM `shop`.`products` WHERE (`name`='Фитнес-трекер Xiaomi Mi Smart Band 5 Black Global')");
        await queryRunner.query("DELETE FROM `shop`.`products` WHERE (`name`='realme C3 3/64Gb (Red)')");
        await queryRunner.query("DELETE FROM `shop`.`products` WHERE (`name`='Диск Hitman 3 Standard Edition Russian')");
    }

}
