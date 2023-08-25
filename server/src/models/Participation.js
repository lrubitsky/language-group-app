const Model = require("./Model");

class Participation extends Model {
  static get tableName() {
    return "participations";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["participantId", "languageGroupId"],
      properties: {
        participantId: { type: ["integer", "string"] },
        languageGroupId: { type: ["integer", "string"] },
      },
    };
  }

  static get relationMapping() {
    const { User, LanguageGroup } = require("./index.js");
    return {
      participant: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "participations.participantId",
          to: "users.id",
        },
      },
      languageGroupJoined: {
        relation: Model.BelongsToOneRelation,
        modelClass: LanguageGroup,
        join: {
          from: "participations.languageGroupId",
          to: "languageGroups.id",
        },
      },
    };
  }
}

module.exports = Participation;
