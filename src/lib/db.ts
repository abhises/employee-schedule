// lib/db.ts
import { drizzle } from "drizzle-orm/node-postgres"; // or neon-http if serverless
import { Pool } from "pg";
import * as schema from "@/db/schema"; // adjust if you have multiple tables

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // required for Neon
});

export const db = drizzle(pool, { schema });
