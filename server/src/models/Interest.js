const Model = require("./Model");

class Interest extends Model {
  static get tableName() {
    return "interests";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["interest"],
      properties: {
        interest: { type: "string" },
      },
    };
  }

  static get relationMappings() {
    const { User } = require("./index.js");
    return {
      users: {
        relation: Model.ManyToManyRelation,
        modelClass: User,
        join: {
          from: "interests.id",
          through: {
            from: "interestSelections.interestId",
            to: "interestSelections.usersId",
          },
          to: "users.id",
        },
      },
    };
  }
}

module.exports = Interest;
