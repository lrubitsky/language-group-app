/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.table("languageGroups", (table) => {
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
  });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.table("languageGroups", (table) => {
    table.dropColumn("travel");
    table.dropColumn("music");
    table.dropColumn("careers");
    table.dropColumn("sports");
    table.dropColumn("relationships");
    table.dropColumn("community");
    table.dropColumn("technology");
    table.dropColumn("fashion");
    table.dropColumn("politics");
    table.dropColumn("pets");
    table.dropColumn("food");
    table.dropColumn("movies");
  });
};
