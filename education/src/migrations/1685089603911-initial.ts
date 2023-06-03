import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1685089603911 implements MigrationInterface {
    name = 'Initial1685089603911'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "paintings" ADD "artistsArtistId" integer`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "UQ_189b1a3a3a476075e94977e295a" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "title" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ALTER COLUMN "date_of_visit" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "image" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "post"`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "post" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "forms" DROP COLUMN "first_name"`);
        await queryRunner.query(`ALTER TABLE "forms" ADD "first_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "forms" DROP COLUMN "last_name"`);
        await queryRunner.query(`ALTER TABLE "forms" ADD "last_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "forms" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "forms" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "forms" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "forms" ADD "phone" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "forms" DROP COLUMN "ticket_type"`);
        await queryRunner.query(`ALTER TABLE "forms" ADD "ticket_type" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "forms" ALTER COLUMN "date" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "events" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "events" ADD "type" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "events" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "events" ADD "title" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "events" DROP COLUMN "organisator"`);
        await queryRunner.query(`ALTER TABLE "events" ADD "organisator" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "date" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "events" DROP COLUMN "time"`);
        await queryRunner.query(`ALTER TABLE "events" ADD "time" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "paintings" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "paintings" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "paintings" ALTER COLUMN "date" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "paintings" DROP COLUMN "dim"`);
        await queryRunner.query(`ALTER TABLE "paintings" ADD "dim" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "paintings" DROP COLUMN "desc"`);
        await queryRunner.query(`ALTER TABLE "paintings" ADD "desc" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "paintings" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "paintings" ADD "image" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "artists" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "artists" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "artists" ALTER COLUMN "birth" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "artists" ALTER COLUMN "death" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "artists" DROP COLUMN "country"`);
        await queryRunner.query(`ALTER TABLE "artists" ADD "country" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "artists" DROP COLUMN "style"`);
        await queryRunner.query(`ALTER TABLE "artists" ADD "style" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "artists" DROP COLUMN "bio"`);
        await queryRunner.query(`ALTER TABLE "artists" ADD "bio" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "paintings" ADD CONSTRAINT "FK_7b1122bf5776d79a1596d39b5c2" FOREIGN KEY ("artistsArtistId") REFERENCES "artists"("artist_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "paintings" DROP CONSTRAINT "FK_7b1122bf5776d79a1596d39b5c2"`);
        await queryRunner.query(`ALTER TABLE "artists" DROP COLUMN "bio"`);
        await queryRunner.query(`ALTER TABLE "artists" ADD "bio" text`);
        await queryRunner.query(`ALTER TABLE "artists" DROP COLUMN "style"`);
        await queryRunner.query(`ALTER TABLE "artists" ADD "style" text`);
        await queryRunner.query(`ALTER TABLE "artists" DROP COLUMN "country"`);
        await queryRunner.query(`ALTER TABLE "artists" ADD "country" text`);
        await queryRunner.query(`ALTER TABLE "artists" ALTER COLUMN "death" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "artists" ALTER COLUMN "birth" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "artists" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "artists" ADD "name" text`);
        await queryRunner.query(`ALTER TABLE "paintings" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "paintings" ADD "image" text`);
        await queryRunner.query(`ALTER TABLE "paintings" DROP COLUMN "desc"`);
        await queryRunner.query(`ALTER TABLE "paintings" ADD "desc" text`);
        await queryRunner.query(`ALTER TABLE "paintings" DROP COLUMN "dim"`);
        await queryRunner.query(`ALTER TABLE "paintings" ADD "dim" text`);
        await queryRunner.query(`ALTER TABLE "paintings" ALTER COLUMN "date" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "paintings" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "paintings" ADD "name" text`);
        await queryRunner.query(`ALTER TABLE "events" DROP COLUMN "time"`);
        await queryRunner.query(`ALTER TABLE "events" ADD "time" date`);
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "date" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "events" DROP COLUMN "organisator"`);
        await queryRunner.query(`ALTER TABLE "events" ADD "organisator" text`);
        await queryRunner.query(`ALTER TABLE "events" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "events" ADD "title" text`);
        await queryRunner.query(`ALTER TABLE "events" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "events" ADD "type" text`);
        await queryRunner.query(`ALTER TABLE "forms" ALTER COLUMN "date" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "forms" DROP COLUMN "ticket_type"`);
        await queryRunner.query(`ALTER TABLE "forms" ADD "ticket_type" text`);
        await queryRunner.query(`ALTER TABLE "forms" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "forms" ADD "phone" bigint`);
        await queryRunner.query(`ALTER TABLE "forms" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "forms" ADD "email" text`);
        await queryRunner.query(`ALTER TABLE "forms" DROP COLUMN "last_name"`);
        await queryRunner.query(`ALTER TABLE "forms" ADD "last_name" text`);
        await queryRunner.query(`ALTER TABLE "forms" DROP COLUMN "first_name"`);
        await queryRunner.query(`ALTER TABLE "forms" ADD "first_name" text`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "post"`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "post" text`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "image" text`);
        await queryRunner.query(`ALTER TABLE "reviews" ALTER COLUMN "date_of_visit" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "title" text`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "UQ_189b1a3a3a476075e94977e295a"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "email" text`);
        await queryRunner.query(`ALTER TABLE "paintings" DROP COLUMN "artistsArtistId"`);
    }

}
