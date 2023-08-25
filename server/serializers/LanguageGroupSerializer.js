import { LanguageGroup } from "../src/models/index.js";
import UserSerializer from "./UserSerializer.js";

class LanguageGroupSerializer {
  static async getSummary(languageGroups) {
    const requiredAttributes = [
      "title",
      "topic",
      "location",
      "englishLevel",
      "minMembers",
      "maxMembers",
      "creatorId",
      "id",
      "imageUrl",
    ];

    const serializedLanguageGroup = await Promise.all(
      languageGroups.map(async (group) => {
        const serializedGroup = {};
        for (const attribute of requiredAttributes) {
          serializedGroup[attribute] = group[attribute];
        }
        const user = await group.$relatedQuery("creator");
        const serializedUser = UserSerializer.getProfileOfOne(user);
        serializedGroup.creator = serializedUser;
        return serializedGroup;
      })
    );

    return serializedLanguageGroup;
  }

  static async getInfo(languageGroup) {
    const requiredAttributes = [
      "title",
      "topic",
      "location",
      "englishLevel",
      "minMembers",
      "maxMembers",
      "creatorId",
      "id",
      "placeCategory",
      "imageUrl",
    ];

    const serializedLanguageGroup = {};
    for (const attribute of requiredAttributes) {
      serializedLanguageGroup[attribute] = languageGroup[attribute];
    }
    const user = await languageGroup.$relatedQuery("creator");
    const serializedUser = UserSerializer.getProfileOfOne(user);

    serializedLanguageGroup.participants = await languageGroup.$relatedQuery("participants");

    serializedLanguageGroup.creator = serializedUser;
    return serializedLanguageGroup;
  }
}

export default LanguageGroupSerializer;
