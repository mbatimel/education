import { MigrationInterface, QueryRunner } from 'typeorm';

export class Initial1685393836172 implements MigrationInterface {
  name = 'Initial1685393836172';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "doctor_clinic" RENAME COLUMN "doctor_id" TO "docotor_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "doctor_clinic" RENAME CONSTRAINT "PK_9d26cc5ab300147e085bc0a2969" TO "PK_1a5e20e1ab06c69aa46c8dd2245"`,
    );
    await queryRunner.query(
      `ALTER TABLE "doctor_clinic" RENAME COLUMN "docotor_id" TO "doctor_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "doctor_clinic" RENAME CONSTRAINT "PK_1a5e20e1ab06c69aa46c8dd2245" TO "PK_9d26cc5ab300147e085bc0a2969"`,
    );
    await queryRunner.query(`ALTER TABLE "clinic" DROP COLUMN "doctorid"`);
    await queryRunner.query(`ALTER TABLE "doctors" DROP COLUMN "clinicid"`);
    await queryRunner.query(`ALTER TABLE "doctors" DROP COLUMN "recordingis"`);
    await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "recordingid"`);
    await queryRunner.query(
      `ALTER TABLE "doctor_clinic" DROP CONSTRAINT "PK_9d26cc5ab300147e085bc0a2969"`,
    );
    await queryRunner.query(
      `ALTER TABLE "doctor_clinic" ADD CONSTRAINT "PK_561e8d63b3d4d582b6f693c393f" PRIMARY KEY ("clinic_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "doctor_clinic" DROP COLUMN "doctor_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "doctor_clinic" ADD "docotor_id" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "doctor_clinic" DROP CONSTRAINT "PK_561e8d63b3d4d582b6f693c393f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "doctor_clinic" ADD CONSTRAINT "PK_1a5e20e1ab06c69aa46c8dd2245" PRIMARY KEY ("clinic_id", "docotor_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "doctor_clinic" ADD "doctor_id" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "doctor_clinic" DROP CONSTRAINT "PK_1a5e20e1ab06c69aa46c8dd2245"`,
    );
    await queryRunner.query(
      `ALTER TABLE "doctor_clinic" ADD CONSTRAINT "PK_21bbb4649e4f1213409c13f3da3" PRIMARY KEY ("clinic_id", "docotor_id", "doctor_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "doctor_clinic" DROP CONSTRAINT "PK_21bbb4649e4f1213409c13f3da3"`,
    );
    await queryRunner.query(
      `ALTER TABLE "doctor_clinic" ADD CONSTRAINT "PK_1a5e20e1ab06c69aa46c8dd2245" PRIMARY KEY ("clinic_id", "docotor_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "doctor_clinic" DROP CONSTRAINT "PK_21bbb4649e4f1213409c13f3da3"`,
    );
    await queryRunner.query(
      `ALTER TABLE "doctor_clinic" ADD CONSTRAINT "PK_9d26cc5ab300147e085bc0a2969" PRIMARY KEY ("doctor_id", "clinic_id")`,
    );
    await queryRunner.query(
      `CREATE SEQUENCE IF NOT EXISTS "user_id_seq" OWNED BY "user"."id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "id" SET DEFAULT nextval('"user_id_seq"')`,
    );
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "username"`);
    await queryRunner.query(
      `ALTER TABLE "user" ADD "username" character varying NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
    await queryRunner.query(
      `ALTER TABLE "user" ADD "password" character varying NOT NULL`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_561e8d63b3d4d582b6f693c393" ON "doctor_clinic" ("clinic_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_578c0aafe4412586412f1ec51e" ON "doctor_clinic" ("docotor_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_dafce97554543e5aa87eac8d25" ON "doctor_clinic" ("doctor_id") `,
    );
    await queryRunner.query(
      `ALTER TABLE "doctor_clinic" ADD CONSTRAINT "FK_561e8d63b3d4d582b6f693c393f" FOREIGN KEY ("clinic_id") REFERENCES "clinic"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "doctor_clinic" ADD CONSTRAINT "FK_578c0aafe4412586412f1ec51ee" FOREIGN KEY ("docotor_id") REFERENCES "doctors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "doctor_clinic" ADD CONSTRAINT "FK_dafce97554543e5aa87eac8d250" FOREIGN KEY ("doctor_id") REFERENCES "doctors"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "doctor_clinic" DROP CONSTRAINT "FK_dafce97554543e5aa87eac8d250"`,
    );
    await queryRunner.query(
      `ALTER TABLE "doctor_clinic" DROP CONSTRAINT "FK_578c0aafe4412586412f1ec51ee"`,
    );
    await queryRunner.query(
      `ALTER TABLE "doctor_clinic" DROP CONSTRAINT "FK_561e8d63b3d4d582b6f693c393f"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_dafce97554543e5aa87eac8d25"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_578c0aafe4412586412f1ec51e"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_561e8d63b3d4d582b6f693c393"`,
    );
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
    await queryRunner.query(`ALTER TABLE "user" ADD "password" text`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "username"`);
    await queryRunner.query(`ALTER TABLE "user" ADD "username" text`);
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "id" DROP DEFAULT`,
    );
    await queryRunner.query(`DROP SEQUENCE "user_id_seq"`);
    await queryRunner.query(
      `ALTER TABLE "doctor_clinic" DROP CONSTRAINT "PK_9d26cc5ab300147e085bc0a2969"`,
    );
    await queryRunner.query(
      `ALTER TABLE "doctor_clinic" ADD CONSTRAINT "PK_21bbb4649e4f1213409c13f3da3" PRIMARY KEY ("clinic_id", "docotor_id", "doctor_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "doctor_clinic" DROP CONSTRAINT "PK_1a5e20e1ab06c69aa46c8dd2245"`,
    );
    await queryRunner.query(
      `ALTER TABLE "doctor_clinic" ADD CONSTRAINT "PK_21bbb4649e4f1213409c13f3da3" PRIMARY KEY ("clinic_id", "docotor_id", "doctor_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "doctor_clinic" DROP CONSTRAINT "PK_21bbb4649e4f1213409c13f3da3"`,
    );
    await queryRunner.query(
      `ALTER TABLE "doctor_clinic" ADD CONSTRAINT "PK_1a5e20e1ab06c69aa46c8dd2245" PRIMARY KEY ("clinic_id", "docotor_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "doctor_clinic" DROP COLUMN "doctor_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "doctor_clinic" DROP CONSTRAINT "PK_1a5e20e1ab06c69aa46c8dd2245"`,
    );
    await queryRunner.query(
      `ALTER TABLE "doctor_clinic" ADD CONSTRAINT "PK_561e8d63b3d4d582b6f693c393f" PRIMARY KEY ("clinic_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "doctor_clinic" DROP COLUMN "docotor_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "doctor_clinic" ADD "doctor_id" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "doctor_clinic" DROP CONSTRAINT "PK_561e8d63b3d4d582b6f693c393f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "doctor_clinic" ADD CONSTRAINT "PK_9d26cc5ab300147e085bc0a2969" PRIMARY KEY ("doctor_id", "clinic_id")`,
    );
    await queryRunner.query(`ALTER TABLE "client" ADD "recordingid" integer`);
    await queryRunner.query(`ALTER TABLE "doctors" ADD "recordingis" integer`);
    await queryRunner.query(`ALTER TABLE "doctors" ADD "clinicid" integer`);
    await queryRunner.query(`ALTER TABLE "clinic" ADD "doctorid" integer`);
    await queryRunner.query(
      `ALTER TABLE "doctor_clinic" RENAME CONSTRAINT "PK_9d26cc5ab300147e085bc0a2969" TO "PK_1a5e20e1ab06c69aa46c8dd2245"`,
    );
    await queryRunner.query(
      `ALTER TABLE "doctor_clinic" RENAME COLUMN "doctor_id" TO "docotor_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "doctor_clinic" RENAME CONSTRAINT "PK_1a5e20e1ab06c69aa46c8dd2245" TO "PK_9d26cc5ab300147e085bc0a2969"`,
    );
    await queryRunner.query(
      `ALTER TABLE "doctor_clinic" RENAME COLUMN "docotor_id" TO "doctor_id"`,
    );
  }
}
