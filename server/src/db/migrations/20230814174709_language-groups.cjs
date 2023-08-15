/* eslint-disable no-console */
const tableName = "language-groups"

/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    const tableExists = await knex.schema.hasTable(tableName);

    if (!tableExists) {
        console.log(`Creating ${tableName}`)
        return knex.schema.createTable(tableName, (table) => {
            table.bigIncrements("id")
            table.string("topic").notNullable()
            table.string("location").notNullable()
            table.string("englishLevel").notNullable()
            table.integer("minMembers").notNullable()
            table.integer("maxMembers").notNullable()
            table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
            table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
        })
    }
    console.log(`${tableName} already exists; skipping`);
    return 1;
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    console.log(`Rolling back ${tableName}`);
    return knex.schema.dropTableIfExists(tableName)
}
