/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.table("users", (table) => {
    table.string("nativeLanguage");
    table.string("englishLevel");
    table.string("ageRange");
    table.string("location");
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
