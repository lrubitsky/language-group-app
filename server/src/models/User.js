/* eslint-disable import/no-extraneous-dependencies */
const Bcrypt = require("bcrypt");
const unique = require("objection-unique");
const Model = require("./Model");

const saltRounds = 10;

const uniqueFunc = unique({
  fields: ["email", "username"],
  identifiers: ["id"],
});

class User extends uniqueFunc(Model) {
  static get tableName() {
    return "users";
  }

  set password(newPassword) {
    this.cryptedPassword = Bcrypt.hashSync(newPassword, saltRounds);
  }

  authenticate(password) {
    return Bcrypt.compareSync(password, this.cryptedPassword);
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["email", "username", "firstName", "lastName"],
      properties: {
        email: { type: "string", pattern: "^\\S+@\\S+\\.\\S+$" },
        cryptedPassword: { type: "string", minLength: 8 },
        username: { type: "string", maxLength: 36 },
        firstName: { type: "string" },
        lastName: { type: "string" },
        nativeLanguage: { type: "string" },
        englishLevel: { type: "string" },
        ageRange: { type: "string" },
        location: { type: "string" },
        introduction: { type: "string" },
      },
    };
  }

  static get relationMappings() {
    const { LanguageGroup } = require("./index.js");
    return {
      languageGroupsCreated: {
        relation: Model.HasManyRelation,
        modelClass: LanguageGroup,
        join: {
          from: "users.id",
          to: "languageGroups.creatorId",
        },
      },
      languageGroupsJoined: {
        relation: Model.ManyToManyRelation,
        modelClass: LanguageGroup,
        join: {
          from: "users.id",
          through: {
            from: "participations.usersId",
            to: "participations.languageGroupId",
          },
          to: "languageGroups.id",
        },
      },
    };
  }

  $formatJson(json) {
    const serializedJson = super.$formatJson(json);

    if (serializedJson.cryptedPassword) {
      delete serializedJson.cryptedPassword;
    }

    return serializedJson;
  }
}

module.exports = User;
