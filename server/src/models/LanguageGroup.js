const Model = require("./Model")

class LanguageGroup extends Model {
    static get tableName() {
        return "language-groups"
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["topic", "location", "englishLevel", "minMembers", "maxMembers"],
            properties: {
                topic: { type: "string" },
                location: { type: "string" },
                englishLevel: { type: "string" },
                minMembers: { type: ["integer", "string"], minimum: 2, maximum: 6 },
                maxMembers: { type: ["integer", "string"], minimum: 2, maximum: 6 }
            }
        }
    }
}

module.exports = LanguageGroup