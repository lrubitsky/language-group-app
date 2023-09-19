const Model = require("./Model");

class Topic extends Model {
  static get tableName() {
    return "topics";
  }

  static get jsonSchema() {
    return {
      type: "object",
      properties: {
        travel: { type: ["string", "boolean"] },
        music: { type: ["string", "boolean"] },
        careers: { type: ["string", "boolean"] },
        sports: { type: ["string", "boolean"] },
        relationships: { type: ["string", "boolean"] },
        community: { type: ["string", "boolean"] },
        technology: { type: ["string", "boolean"] },
        fashion: { type: ["string", "boolean"] },
        politics: { type: ["string", "boolean"] },
        pets: { type: ["string", "boolean"] },
        food: { type: ["string", "boolean"] },
        movies: { type: ["string", "boolean"] },
      },
    };
  }
}

module.exports = Topic;
