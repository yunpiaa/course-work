import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1683541762609 implements MigrationInterface {
    name = 'Initial1683541762609'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "paintings" ("painting_id" SERIAL NOT NULL, "name" character varying NOT NULL, "date" TIMESTAMP NOT NULL, "dim" character varying NOT NULL, "desc" character varying NOT NULL, "image" character varying NOT NULL, "artistsArtistId" integer, CONSTRAINT "PK_7dc54a8894441d15ccbc5e21688" PRIMARY KEY ("painting_id"))`);
        await queryRunner.query(`CREATE TABLE "artists" ("artist_id" SERIAL NOT NULL, "name" character varying NOT NULL, "birth" TIMESTAMP NOT NULL, "death" TIMESTAMP NOT NULL, "country" character varying NOT NULL, "style" character varying NOT NULL, "bio" character varying NOT NULL, CONSTRAINT "PK_51fb94826a5db1782cefcad31a1" PRIMARY KEY ("artist_id"))`);
        await queryRunner.query(`CREATE TABLE "reviews" ("review_id" SERIAL NOT NULL, "email" character varying NOT NULL, "title" character varying NOT NULL, "date_of_visit" TIMESTAMP NOT NULL, "image" character varying NOT NULL, "post" character varying NOT NULL, CONSTRAINT "UQ_189b1a3a3a476075e94977e295a" UNIQUE ("email"), CONSTRAINT "PK_bfe951d9dca4ba99674c5772905" PRIMARY KEY ("review_id"))`);
        await queryRunner.query(`CREATE TABLE "forms" ("form_id" SERIAL NOT NULL, "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "email" character varying NOT NULL, "phone" integer NOT NULL, "ticket_type" character varying NOT NULL, "date" TIMESTAMP NOT NULL, CONSTRAINT "PK_6cce0aa5db66c09b5118fc06cbc" PRIMARY KEY ("form_id"))`);
        await queryRunner.query(`CREATE TABLE "events" ("event_id" SERIAL NOT NULL, "type" character varying NOT NULL, "title" character varying NOT NULL, "organisator" character varying NOT NULL, "date" TIMESTAMP NOT NULL, "time" character varying NOT NULL, CONSTRAINT "PK_1b77463a4487f09e798dffcb43a" PRIMARY KEY ("event_id"))`);
        await queryRunner.query(`ALTER TABLE "paintings" ADD CONSTRAINT "FK_7b1122bf5776d79a1596d39b5c2" FOREIGN KEY ("artistsArtistId") REFERENCES "artists"("artist_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "paintings" DROP CONSTRAINT "FK_7b1122bf5776d79a1596d39b5c2"`);
        await queryRunner.query(`DROP TABLE "events"`);
        await queryRunner.query(`DROP TABLE "forms"`);
        await queryRunner.query(`DROP TABLE "reviews"`);
        await queryRunner.query(`DROP TABLE "artists"`);
        await queryRunner.query(`DROP TABLE "paintings"`);
    }

}
