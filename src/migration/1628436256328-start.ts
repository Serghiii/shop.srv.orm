import { MigrationInterface, QueryRunner } from "typeorm";

export class start1628436256328 implements MigrationInterface {
    name = 'start1628436256328'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`shop\`.\`bans\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`reason\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`userId\` bigint NULL, UNIQUE INDEX \`REL_9632281c7b064fabedd8b7ae88\` (\`userId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`shop\`.\`brands\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_96db6bbbaa6f23cad26871339b\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`shop\`.\`categories\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_8b0be371d28245da6e4f4b6187\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`shop\`.\`props\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`value\` varchar(255) NOT NULL, \`typeId\` bigint NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`shop\`.\`types\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_fa170fda66d232af69b7f880c9\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`shop\`.\`products\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`code\` int NOT NULL, \`name\` varchar(255) NOT NULL, \`amount\` int NOT NULL, \`price\` int NOT NULL DEFAULT '0', \`priceold\` int NOT NULL DEFAULT '0', \`pic\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`categoryId\` bigint NOT NULL, \`typeId\` bigint NOT NULL, \`brandId\` bigint NOT NULL, INDEX \`updatedAt-idx\` (\`updatedAt\`), UNIQUE INDEX \`IDX_7cfc24d6c24f0ec91294003d6b\` (\`code\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`shop\`.\`cartcontents\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`count\` int NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`productId\` bigint NOT NULL, \`cartId\` bigint NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`shop\`.\`carts\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`userId\` bigint NULL, UNIQUE INDEX \`REL_f969c8e32db5999a8f45ed33ab\` (\`userId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`shop\`.\`profiles\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`name\` varchar(50) NOT NULL, \`gender\` varchar(1) NULL, \`avatar\` varchar(255) NULL, \`userId\` bigint NULL, UNIQUE INDEX \`REL_315ecd98bd1a42dcf2ec4e2e98\` (\`userId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`shop\`.\`roles\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`name\` varchar(20) NOT NULL, \`description\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_648e3f5447f725579d7d4ffdfb\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`shop\`.\`users\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`phone\` varchar(13) NOT NULL, \`email\` varchar(50) NOT NULL, \`password\` varchar(255) NOT NULL, \`active\` tinyint NOT NULL DEFAULT 0, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_a000cca60bcf04454e72769949\` (\`phone\`), UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`shop\`.\`activations\` (\`uuid\` char(36) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`userId\` bigint NULL, UNIQUE INDEX \`REL_42b2b1a552b1b19403cad7a870\` (\`userId\`), PRIMARY KEY (\`uuid\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`shop\`.\`users_roles_roles\` (\`usersId\` bigint NOT NULL, \`rolesId\` bigint NOT NULL, INDEX \`IDX_df951a64f09865171d2d7a502b\` (\`usersId\`), INDEX \`IDX_b2f0366aa9349789527e0c36d9\` (\`rolesId\`), PRIMARY KEY (\`usersId\`, \`rolesId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`shop\`.\`bans\` ADD CONSTRAINT \`FK_9632281c7b064fabedd8b7ae885\` FOREIGN KEY (\`userId\`) REFERENCES \`shop\`.\`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`shop\`.\`props\` ADD CONSTRAINT \`FK_1a6e0c904afa369f1c8251a6078\` FOREIGN KEY (\`typeId\`) REFERENCES \`shop\`.\`types\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`shop\`.\`products\` ADD CONSTRAINT \`FK_ff56834e735fa78a15d0cf21926\` FOREIGN KEY (\`categoryId\`) REFERENCES \`shop\`.\`categories\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`shop\`.\`products\` ADD CONSTRAINT \`FK_6129aa5c0f65c073ea2f7452195\` FOREIGN KEY (\`typeId\`) REFERENCES \`shop\`.\`types\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`shop\`.\`products\` ADD CONSTRAINT \`FK_ea86d0c514c4ecbb5694cbf57df\` FOREIGN KEY (\`brandId\`) REFERENCES \`shop\`.\`brands\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`shop\`.\`cartcontents\` ADD CONSTRAINT \`FK_7ef04c8d35ccc7862c22aede192\` FOREIGN KEY (\`productId\`) REFERENCES \`shop\`.\`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`shop\`.\`cartcontents\` ADD CONSTRAINT \`FK_a7e1f9b75c7cbe883602d18f940\` FOREIGN KEY (\`cartId\`) REFERENCES \`shop\`.\`carts\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`shop\`.\`carts\` ADD CONSTRAINT \`FK_f969c8e32db5999a8f45ed33aba\` FOREIGN KEY (\`userId\`) REFERENCES \`shop\`.\`users\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`shop\`.\`profiles\` ADD CONSTRAINT \`FK_315ecd98bd1a42dcf2ec4e2e985\` FOREIGN KEY (\`userId\`) REFERENCES \`shop\`.\`users\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`shop\`.\`activations\` ADD CONSTRAINT \`FK_42b2b1a552b1b19403cad7a870a\` FOREIGN KEY (\`userId\`) REFERENCES \`shop\`.\`users\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`shop\`.\`users_roles_roles\` ADD CONSTRAINT \`FK_df951a64f09865171d2d7a502b1\` FOREIGN KEY (\`usersId\`) REFERENCES \`shop\`.\`users\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`shop\`.\`users_roles_roles\` ADD CONSTRAINT \`FK_b2f0366aa9349789527e0c36d97\` FOREIGN KEY (\`rolesId\`) REFERENCES \`shop\`.\`roles\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`shop\`.\`users_roles_roles\` DROP FOREIGN KEY \`FK_b2f0366aa9349789527e0c36d97\``);
        await queryRunner.query(`ALTER TABLE \`shop\`.\`users_roles_roles\` DROP FOREIGN KEY \`FK_df951a64f09865171d2d7a502b1\``);
        await queryRunner.query(`ALTER TABLE \`shop\`.\`activations\` DROP FOREIGN KEY \`FK_42b2b1a552b1b19403cad7a870a\``);
        await queryRunner.query(`ALTER TABLE \`shop\`.\`profiles\` DROP FOREIGN KEY \`FK_315ecd98bd1a42dcf2ec4e2e985\``);
        await queryRunner.query(`ALTER TABLE \`shop\`.\`carts\` DROP FOREIGN KEY \`FK_f969c8e32db5999a8f45ed33aba\``);
        await queryRunner.query(`ALTER TABLE \`shop\`.\`cartcontents\` DROP FOREIGN KEY \`FK_a7e1f9b75c7cbe883602d18f940\``);
        await queryRunner.query(`ALTER TABLE \`shop\`.\`cartcontents\` DROP FOREIGN KEY \`FK_7ef04c8d35ccc7862c22aede192\``);
        await queryRunner.query(`ALTER TABLE \`shop\`.\`products\` DROP FOREIGN KEY \`FK_ea86d0c514c4ecbb5694cbf57df\``);
        await queryRunner.query(`ALTER TABLE \`shop\`.\`products\` DROP FOREIGN KEY \`FK_6129aa5c0f65c073ea2f7452195\``);
        await queryRunner.query(`ALTER TABLE \`shop\`.\`products\` DROP FOREIGN KEY \`FK_ff56834e735fa78a15d0cf21926\``);
        await queryRunner.query(`ALTER TABLE \`shop\`.\`props\` DROP FOREIGN KEY \`FK_1a6e0c904afa369f1c8251a6078\``);
        await queryRunner.query(`ALTER TABLE \`shop\`.\`bans\` DROP FOREIGN KEY \`FK_9632281c7b064fabedd8b7ae885\``);
        await queryRunner.query(`DROP INDEX \`IDX_b2f0366aa9349789527e0c36d9\` ON \`shop\`.\`users_roles_roles\``);
        await queryRunner.query(`DROP INDEX \`IDX_df951a64f09865171d2d7a502b\` ON \`shop\`.\`users_roles_roles\``);
        await queryRunner.query(`DROP TABLE \`shop\`.\`users_roles_roles\``);
        await queryRunner.query(`DROP INDEX \`REL_42b2b1a552b1b19403cad7a870\` ON \`shop\`.\`activations\``);
        await queryRunner.query(`DROP TABLE \`shop\`.\`activations\``);
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`shop\`.\`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_a000cca60bcf04454e72769949\` ON \`shop\`.\`users\``);
        await queryRunner.query(`DROP TABLE \`shop\`.\`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_648e3f5447f725579d7d4ffdfb\` ON \`shop\`.\`roles\``);
        await queryRunner.query(`DROP TABLE \`shop\`.\`roles\``);
        await queryRunner.query(`DROP INDEX \`REL_315ecd98bd1a42dcf2ec4e2e98\` ON \`shop\`.\`profiles\``);
        await queryRunner.query(`DROP TABLE \`shop\`.\`profiles\``);
        await queryRunner.query(`DROP INDEX \`REL_f969c8e32db5999a8f45ed33ab\` ON \`shop\`.\`carts\``);
        await queryRunner.query(`DROP TABLE \`shop\`.\`carts\``);
        await queryRunner.query(`DROP TABLE \`shop\`.\`cartcontents\``);
        await queryRunner.query(`DROP INDEX \`IDX_7cfc24d6c24f0ec91294003d6b\` ON \`shop\`.\`products\``);
        await queryRunner.query(`DROP INDEX \`updatedAt-idx\` ON \`shop\`.\`products\``);
        await queryRunner.query(`DROP TABLE \`shop\`.\`products\``);
        await queryRunner.query(`DROP INDEX \`IDX_fa170fda66d232af69b7f880c9\` ON \`shop\`.\`types\``);
        await queryRunner.query(`DROP TABLE \`shop\`.\`types\``);
        await queryRunner.query(`DROP TABLE \`shop\`.\`props\``);
        await queryRunner.query(`DROP INDEX \`IDX_8b0be371d28245da6e4f4b6187\` ON \`shop\`.\`categories\``);
        await queryRunner.query(`DROP TABLE \`shop\`.\`categories\``);
        await queryRunner.query(`DROP INDEX \`IDX_96db6bbbaa6f23cad26871339b\` ON \`shop\`.\`brands\``);
        await queryRunner.query(`DROP TABLE \`shop\`.\`brands\``);
        await queryRunner.query(`DROP INDEX \`REL_9632281c7b064fabedd8b7ae88\` ON \`shop\`.\`bans\``);
        await queryRunner.query(`DROP TABLE \`shop\`.\`bans\``);
    }

}
