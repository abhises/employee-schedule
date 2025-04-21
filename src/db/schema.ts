import {
  integer,
  pgTable,
  varchar,
  timestamp,
  text,
  uuid,
  date,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
});

export const schedules = pgTable("schedules", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .references(() => users.id)
    .notNull(),
  shiftId: uuid("shift_id")
    .references(() => shifts.id)
    .notNull(),
  date: date("date").notNull(),
});

export const shifts = pgTable("shifts", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text("name").notNull(), // Optional label: "Morning", "Evening", etc.
  shift: varchar({ length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
