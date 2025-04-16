import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const scheduleTable = pgTable("schedule", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
});
