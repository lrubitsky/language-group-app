const Model = require("./Model");

class InterestSelection extends Model {
  static get tableName() {
    return "interestSelections";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["interestId", "userId"],
      properties: {
        interestId: { type: ["integer", "string"] },
        userId: { type: ["integer", "string"] },
      },
    };
  }

  static get relationMappings() {
    const { Interest, User } = require("./index.js");
    return {
      interest: {
        relation: Model.BelongsToOneRelation,
        modelClass: Interest,
        join: {
          from: "interestSelections.interestId",
          to: "interests.id",
        },
      },
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "interestSelections.userId",
          to: "users.id",
        },
      },
    };
  }
}

module.exports = InterestSelection;
