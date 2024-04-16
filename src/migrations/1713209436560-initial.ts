import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1713209436560 implements MigrationInterface {
    name = 'Initial1713209436560'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "client" ("id" SERIAL NOT NULL, "Fullname" character varying NOT NULL, "Birthday" TIMESTAMP NOT NULL, "age" integer NOT NULL, "phone" character varying NOT NULL, "gender" character varying NOT NULL, "address" character varying NOT NULL, "workORstudy" character varying NOT NULL, CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "clinic" ("id" SERIAL NOT NULL, "FullAddress" character varying NOT NULL, "Rating" integer NOT NULL, "phone" character varying NOT NULL, "HeadOf" character varying NOT NULL, CONSTRAINT "PK_8e97c18debc9c7f7606e311d763" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "doctors" ("id" SERIAL NOT NULL, "fullname" character varying NOT NULL, "age" integer NOT NULL, "post" character varying NOT NULL, "experience" integer NOT NULL, "office" integer NOT NULL, "info" character varying NOT NULL, CONSTRAINT "PK_8207e7889b50ee3695c2b8154ff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "records" ("recordingid" SERIAL NOT NULL, "dateofrecording" TIMESTAMP NOT NULL, "timeofrecording" TIMESTAMP NOT NULL, "doctoridId" integer, "clientidId" integer, CONSTRAINT "PK_569239c7bc61861acd7ce2b25fa" PRIMARY KEY ("recordingid"))`);
        await queryRunner.query(`CREATE TABLE "doctor_clinic" ("clinic_id" integer NOT NULL, "docotor_id" integer NOT NULL, CONSTRAINT "PK_1a5e20e1ab06c69aa46c8dd2245" PRIMARY KEY ("clinic_id", "docotor_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_561e8d63b3d4d582b6f693c393" ON "doctor_clinic" ("clinic_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_578c0aafe4412586412f1ec51e" ON "doctor_clinic" ("docotor_id") `);
        await queryRunner.query(`ALTER TABLE "doctor_clinic" DROP CONSTRAINT "PK_1a5e20e1ab06c69aa46c8dd2245"`);
        await queryRunner.query(`ALTER TABLE "doctor_clinic" ADD CONSTRAINT "PK_561e8d63b3d4d582b6f693c393f" PRIMARY KEY ("clinic_id")`);
        await queryRunner.query(`DROP INDEX "public"."IDX_578c0aafe4412586412f1ec51e"`);
        await queryRunner.query(`ALTER TABLE "doctor_clinic" DROP COLUMN "docotor_id"`);
        await queryRunner.query(`ALTER TABLE "doctor_clinic" ADD "docotor_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctor_clinic" DROP CONSTRAINT "PK_561e8d63b3d4d582b6f693c393f"`);
        await queryRunner.query(`ALTER TABLE "doctor_clinic" ADD CONSTRAINT "PK_1a5e20e1ab06c69aa46c8dd2245" PRIMARY KEY ("clinic_id", "docotor_id")`);
        await queryRunner.query(`ALTER TABLE "doctor_clinic" ADD "doctor_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctor_clinic" DROP CONSTRAINT "PK_1a5e20e1ab06c69aa46c8dd2245"`);
        await queryRunner.query(`ALTER TABLE "doctor_clinic" ADD CONSTRAINT "PK_21bbb4649e4f1213409c13f3da3" PRIMARY KEY ("clinic_id", "docotor_id", "doctor_id")`);
        await queryRunner.query(`ALTER TABLE "doctor_clinic" DROP CONSTRAINT "PK_21bbb4649e4f1213409c13f3da3"`);
        await queryRunner.query(`ALTER TABLE "doctor_clinic" ADD CONSTRAINT "PK_1a5e20e1ab06c69aa46c8dd2245" PRIMARY KEY ("clinic_id", "docotor_id")`);
        await queryRunner.query(`ALTER TABLE "doctor_clinic" DROP CONSTRAINT "PK_21bbb4649e4f1213409c13f3da3"`);
        await queryRunner.query(`ALTER TABLE "doctor_clinic" ADD CONSTRAINT "PK_9d26cc5ab300147e085bc0a2969" PRIMARY KEY ("doctor_id", "clinic_id")`);
        await queryRunner.query(`CREATE INDEX "IDX_578c0aafe4412586412f1ec51e" ON "doctor_clinic" ("docotor_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_dafce97554543e5aa87eac8d25" ON "doctor_clinic" ("doctor_id") `);
        await queryRunner.query(`ALTER TABLE "records" ADD CONSTRAINT "FK_aa4bf85fd5d74cd84351213b755" FOREIGN KEY ("doctoridId") REFERENCES "doctors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "records" ADD CONSTRAINT "FK_feaf69191f90c15514d65175a8d" FOREIGN KEY ("clientidId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "doctor_clinic" ADD CONSTRAINT "FK_561e8d63b3d4d582b6f693c393f" FOREIGN KEY ("clinic_id") REFERENCES "clinic"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "doctor_clinic" ADD CONSTRAINT "FK_578c0aafe4412586412f1ec51ee" FOREIGN KEY ("docotor_id") REFERENCES "doctors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "doctor_clinic" ADD CONSTRAINT "FK_dafce97554543e5aa87eac8d250" FOREIGN KEY ("doctor_id") REFERENCES "doctors"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "doctor_clinic" DROP CONSTRAINT "FK_dafce97554543e5aa87eac8d250"`);
        await queryRunner.query(`ALTER TABLE "doctor_clinic" DROP CONSTRAINT "FK_578c0aafe4412586412f1ec51ee"`);
        await queryRunner.query(`ALTER TABLE "doctor_clinic" DROP CONSTRAINT "FK_561e8d63b3d4d582b6f693c393f"`);
        await queryRunner.query(`ALTER TABLE "records" DROP CONSTRAINT "FK_feaf69191f90c15514d65175a8d"`);
        await queryRunner.query(`ALTER TABLE "records" DROP CONSTRAINT "FK_aa4bf85fd5d74cd84351213b755"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_dafce97554543e5aa87eac8d25"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_578c0aafe4412586412f1ec51e"`);
        await queryRunner.query(`ALTER TABLE "doctor_clinic" DROP CONSTRAINT "PK_9d26cc5ab300147e085bc0a2969"`);
        await queryRunner.query(`ALTER TABLE "doctor_clinic" ADD CONSTRAINT "PK_21bbb4649e4f1213409c13f3da3" PRIMARY KEY ("clinic_id", "docotor_id", "doctor_id")`);
        await queryRunner.query(`ALTER TABLE "doctor_clinic" DROP CONSTRAINT "PK_1a5e20e1ab06c69aa46c8dd2245"`);
        await queryRunner.query(`ALTER TABLE "doctor_clinic" ADD CONSTRAINT "PK_21bbb4649e4f1213409c13f3da3" PRIMARY KEY ("clinic_id", "docotor_id", "doctor_id")`);
        await queryRunner.query(`ALTER TABLE "doctor_clinic" DROP CONSTRAINT "PK_21bbb4649e4f1213409c13f3da3"`);
        await queryRunner.query(`ALTER TABLE "doctor_clinic" ADD CONSTRAINT "PK_1a5e20e1ab06c69aa46c8dd2245" PRIMARY KEY ("clinic_id", "docotor_id")`);
        await queryRunner.query(`ALTER TABLE "doctor_clinic" DROP COLUMN "doctor_id"`);
        await queryRunner.query(`ALTER TABLE "doctor_clinic" DROP CONSTRAINT "PK_1a5e20e1ab06c69aa46c8dd2245"`);
        await queryRunner.query(`ALTER TABLE "doctor_clinic" ADD CONSTRAINT "PK_561e8d63b3d4d582b6f693c393f" PRIMARY KEY ("clinic_id")`);
        await queryRunner.query(`ALTER TABLE "doctor_clinic" DROP COLUMN "docotor_id"`);
        await queryRunner.query(`ALTER TABLE "doctor_clinic" ADD "docotor_id" integer NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_578c0aafe4412586412f1ec51e" ON "doctor_clinic" ("docotor_id") `);
        await queryRunner.query(`ALTER TABLE "doctor_clinic" DROP CONSTRAINT "PK_561e8d63b3d4d582b6f693c393f"`);
        await queryRunner.query(`ALTER TABLE "doctor_clinic" ADD CONSTRAINT "PK_1a5e20e1ab06c69aa46c8dd2245" PRIMARY KEY ("clinic_id", "docotor_id")`);
        await queryRunner.query(`DROP INDEX "public"."IDX_578c0aafe4412586412f1ec51e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_561e8d63b3d4d582b6f693c393"`);
        await queryRunner.query(`DROP TABLE "doctor_clinic"`);
        await queryRunner.query(`DROP TABLE "records"`);
        await queryRunner.query(`DROP TABLE "doctors"`);
        await queryRunner.query(`DROP TABLE "clinic"`);
        await queryRunner.query(`DROP TABLE "client"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
