import { LanguageGroup, User } from "../../models/index.js";

class LanguageGroupSeeder {
  static async seed() {
    const estela = await User.query().findOne("email", "user1@email.com");
    const ahmed = await User.query().findOne("email", "user2@email.com");
    const marie = await User.query().findOne("email", "user3@email.com");
    const artem = await User.query().findOne("email", "user6@email.com");

    const languageGroupData = [
      {
        topic: "Music",
        location: "North End, Boston, MA",
        englishLevel: "low",
        minMembers: 3,
        maxMembers: 5,
        placeCategory: "cafe",
        creatorId: estela.id,
      },
      {
        topic: "Careers",
        location: "The Esplanade, Cambridge, MA",
        englishLevel: "low-intermediate",
        minMembers: 2,
        maxMembers: 6,
        placeCategory: "library",
        creatorId: estela.id,
      },
      {
        topic: "Travel",
        location: "Revere Beach, Revere, MA",
        englishLevel: "low-intermediate",
        minMembers: 4,
        maxMembers: 5,
        placeCategory: "park",
        creatorId: ahmed.id,
      },
      {
        topic: "Relationships",
        location: "Central Square, Cambridge, MA",
        englishLevel: "intermediate",
        minMembers: 2,
        maxMembers: 5,
        placeCategory: "mall",
        creatorId: ahmed.id,
      },
      {
        topic: "Community",
        location: "Winter Hill, Somerville, MA",
        englishLevel: "intermediate.high",
        minMembers: 4,
        maxMembers: 6,
        creatorId: ahmed.id,
      },
      {
        topic: "Sports",
        location: "East Boston, Boston, MA",
        englishLevel: "all",
        minMembers: 3,
        maxMembers: 4,
        creatorId: marie.id,
      },
      {
        topic: "Technology",
        location: "Kendall Square, Cambridge, MA",
        englishLevel: "intermediate-high",
        minMembers: 2,
        maxMembers: 5,
        creatorId: marie.id,
      },
      {
        topic: "Fashion",
        location: "Newton Center, Newton, MA",
        englishLevel: "high",
        minMembers: 2,
        maxMembers: 5,
        creatorId: marie.id,
      },
      {
        topic: "Politics",
        location: "Framingham, MA",
        englishLevel: "all",
        minMembers: 3,
        maxMembers: 5,
        creatorId: artem.id,
      },
      {
        topic: "Pets",
        location: "Lynn, MA",
        englishLevel: "intermediate-high",
        minMembers: 4,
        maxMembers: 6,
        creatorId: artem.id,
      },
      {
        topic: "Politics",
        location: "South Boston, Boston, MA",
        englishLevel: "high",
        minMembers: 2,
        maxMembers: 4,
        creatorId: artem.id,
      },
      {
        topic: "Food",
        location: "Belmont, MA",
        englishLevel: "high",
        minMembers: 2,
        maxMembers: 5,
        creatorId: artem.id,
      },
      {
        topic: "Movies",
        location: "Saugus, MA",
        englishLevel: "high",
        minMembers: 3,
        maxMembers: 6,
        creatorId: artem.id,
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
