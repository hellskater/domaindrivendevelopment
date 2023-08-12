import { Generated, Kysely } from "kysely";
import { PlanetScaleDialect } from "kysely-planetscale";

interface DDDTable {
  id: Generated<number>;
  image: string;
  email: string;
  body: string;
  created_by: string;
  updated_at?: string;
}

interface Database {
  dddEntries: DDDTable;
}

export const queryBuilder = new Kysely<Database>({
  dialect: new PlanetScaleDialect({
    url: process.env.DATABASE_URL,
  }),
});
