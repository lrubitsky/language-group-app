const Model = require("./Model");

class LanguageGroup extends Model {
  static get tableName() {
    return "languageGroups";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: [
        "title",
        "topic",
        "location",
        "englishLevel",
        "minMembers",
        "maxMembers",
        "creatorId",
      ],
      properties: {
        title: { type: "string" },
        topic: { type: "string" },
        location: { type: "string" },
        englishLevel: { type: "string" },
        minMembers: { type: ["integer", "string"], minimum: 2, maximum: 6 },
        maxMembers: { type: ["integer", "string"], minimum: 2, maximum: 6 },
        placeCategory: { type: "string" },
        creatorId: { type: ["integer", "string"] },
      },
    };
  }
  static get relationMappings() {
    const { User } = require("./index.js");
    return {
      creator: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "languageGroups.creatorId",
          to: "users.id",
        },
      },
      participants: {
        relation: Model.ManyToManyRelation,
        modelClass: User,
        join: {
          from: "languageGroups.id",
          through: {
            from: "participations.languageGroupId",
            to: "participations.participantId",
          },
          to: "users.id",
        },
      },
    };
  }
}

module.exports = LanguageGroup;
