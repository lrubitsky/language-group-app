/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.table("language-groups", (table) => {
        table.string("placeCategory")
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.table("language-groups", (table) => {
        table.dropColumn("placeCategory")
    })
}
