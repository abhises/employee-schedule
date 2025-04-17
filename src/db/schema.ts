import { integer, pgTable, varchar, timestamp } from "drizzle-orm/pg-core";

export const scheduleTable = pgTable("schedule", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
});

export const shiftTable = pgTable("shift", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  shift: varchar({ length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
