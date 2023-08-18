/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.table("languageGroups", (table) => {
    table.bigInteger("creatorId").unsigned().notNullable().index().references("users.id");
  });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.table("languageGroups", (table) => {
    table.dropColumn("creatorId");
  });
};
