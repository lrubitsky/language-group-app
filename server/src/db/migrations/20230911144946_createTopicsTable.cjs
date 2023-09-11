/* eslint-disable no-console */
const tableName = "topics";

/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  const tableExists = await knex.schema.hasTable(tableName);

  if (!tableExists) {
    console.log(`Creating ${tableName}`);
    return knex.schema.createTable(tableName, (table) => {
      table.bigIncrements("id");
      table.boolean("travel").notNullable();
      table.boolean("music").notNullable();
      table.boolean("careers").notNullable();
      table.boolean("sports").notNullable();
      table.boolean("relationships").notNullable();
      table.boolean("community").notNullable();
      table.boolean("technology").notNullable();
      table.boolean("fashion").notNullable();
      table.boolean("politics").notNullable();
      table.boolean("pets").notNullable();
      table.boolean("food").notNullable();
      table.boolean("movies").notNullable();
      table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
      table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
    });
  }
  console.log(`${tableName} already exists; skipping`);
  return 1;
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  console.log(`Rolling back ${tableName}`);
  return knex.schema.dropTableIfExists(tableName);
};
