const Model = require("./Model");

class Participation {
  static get tableName() {
    return "userGroups";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["userId", "languageGroupId"],
      properties: {
        userId: { type: ["integer", "string"] },
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
          from: "userGroupJoin.participantId",
          to: "users.id",
        },
      },
      languageGroupJoined: {
        relation: Model.BelongsToOneRelation,
        modelClass: LanguageGroup,
        join: {
          from: "userGroupJoin.languageGroupId",
          to: "languageGroups.id",
        },
      },
    };
  }
}

module.exports = Participation;
