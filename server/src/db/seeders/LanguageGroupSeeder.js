import { LanguageGroup, User } from "../../models/index.js";

class LanguageGroupSeeder {
  static async seed() {
    const lowUser = await User.query().findOne("englishLevel", "low");
    const intermediateUser = await User.query().findOne("englishLevel", "intermediate");
    const highUser1 = await User.query().findOne("englishLevel", "high");
    const highUser2 = await User.query().findOne("englishLevel", "high").offset(1);

    const languageGroupData = [
      {
        topic: "Music",
        location: "North End, Boston, MA",
        englishLevel: "low",
        minMembers: 3,
        maxMembers: 5,
        placeCategory: "cafe",
        creatorId: lowUser.id,
      },
      {
        topic: "Careers",
        location: "The Esplanade, Cambridge, MA",
        englishLevel: "low-intermediate",
        minMembers: 2,
        maxMembers: 6,
        placeCategory: "library",
        creatorId: lowUser.id,
      },
      {
        topic: "Travel",
        location: "Revere Beach, Revere, MA",
        englishLevel: "low-intermediate",
        minMembers: 4,
        maxMembers: 5,
        placeCategory: "park",
        creatorId: intermediateUser.id,
      },
      {
        topic: "Relationships",
        location: "Central Square, Cambridge, MA",
        englishLevel: "intermediate",
        minMembers: 2,
        maxMembers: 5,
        placeCategory: "mall",
        creatorId: intermediateUser.id,
      },
      {
        topic: "Community",
        location: "Winter Hill, Somerville, MA",
        englishLevel: "intermediate-high",
        minMembers: 4,
        maxMembers: 6,
        creatorId: intermediateUser.id,
      },
      {
        topic: "Sports",
        location: "East Boston, Boston, MA",
        englishLevel: "all",
        minMembers: 3,
        maxMembers: 4,
        creatorId: highUser1.id,
      },
      {
        topic: "Technology",
        location: "Kendall Square, Cambridge, MA",
        englishLevel: "intermediate-high",
        minMembers: 2,
        maxMembers: 5,
        creatorId: highUser1.id,
      },
      {
        topic: "Fashion",
        location: "Newton Center, Newton, MA",
        englishLevel: "high",
        minMembers: 2,
        maxMembers: 5,
        creatorId: highUser1.id,
      },
      {
        topic: "Politics",
        location: "Framingham, MA",
        englishLevel: "all",
        minMembers: 3,
        maxMembers: 5,
        creatorId: highUser2.id,
      },
      {
        topic: "Pets",
        location: "Lynn, MA",
        englishLevel: "intermediate-high",
        minMembers: 4,
        maxMembers: 6,
        creatorId: highUser2.id,
      },
      {
        topic: "Politics",
        location: "South Boston, Boston, MA",
        englishLevel: "high",
        minMembers: 2,
        maxMembers: 4,
        creatorId: highUser2.id,
      },
      {
        topic: "Food",
        location: "Belmont, MA",
        englishLevel: "high",
        minMembers: 2,
        maxMembers: 5,
        creatorId: highUser2.id,
      },
      {
        topic: "Movies",
        location: "Saugus, MA",
        englishLevel: "high",
        minMembers: 3,
        maxMembers: 6,
        creatorId: highUser2.id,
      },
    ];

    for (const singleLanguageGroup of languageGroupData) {
      const currentLanguageGroup = await LanguageGroup.query().findOne({
        topic: singleLanguageGroup.topic,
        location: singleLanguageGroup.location,
        englishLevel: singleLanguageGroup.englishLevel,
        minMembers: singleLanguageGroup.minMembers,
        maxMembers: singleLanguageGroup.maxMembers,
      });
      if (!currentLanguageGroup) {
        await LanguageGroup.query().insert(singleLanguageGroup);
      }
    }
  }
}

export default LanguageGroupSeeder;
