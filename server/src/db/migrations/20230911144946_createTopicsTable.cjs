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
      table.boolean("travel");
      table.boolean("music");
      table.boolean("careers");
      table.boolean("sports");
      table.boolean("relationships");
      table.boolean("community");
      table.boolean("technology");
      table.boolean("fashion");
      table.boolean("politics");
      table.boolean("pets");
      table.boolean("food");
      table.boolean("movies");
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
