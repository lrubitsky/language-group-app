/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.table("users", (table) => {
    table.string("nativeLanguage").defaultTo("-");
    table.string("englishLevel").defaultTo("-");
    table.string("ageRange").defaultTo("-");
    table.string("location").defaultTo("-");
    table.string("introduction");
  });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.table("users", (table) => {
    table.dropColumn("nativeLanguage");
    table.dropColumn("englishLevel");
    table.dropColumn("ageRange");
    table.dropColumn("location");
    table.dropColumn("introduction");
  });
};
