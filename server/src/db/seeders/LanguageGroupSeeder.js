import { LanguageGroup, User, Participation } from "../../models/index.js";
import { faker } from "@faker-js/faker";

class LanguageGroupSeeder {
  static async seed() {
    const lowUser1 = await User.query().findOne("englishLevel", "low");
    const intermediateUser1 = await User.query().findOne("englishLevel", "intermediate");
    const intermediateUser2 = await User.query().findOne("englishLevel", "intermediate").offset(1);
    const highUser1 = await User.query().findOne("englishLevel", "high");
    const highUser2 = await User.query().findOne("englishLevel", "high").offset(1);
    const highUser3 = await User.query().findOne("englishLevel", "high").offset(2);

    const languageGroupData = [];
    for (let i = 0; i < 100; i++) {
      let title = "";
      let creatorId = "";

      const englishLevels = [
        "low",
        "low & intermediate",
        "intermediate",
        "intermediate & high",
        "high",
        "all levels",
      ];

      const randomLevelIndex = Math.floor(Math.random() * englishLevels.length);
      const englishLevel = englishLevels[randomLevelIndex];

      switch (englishLevel) {
        case "low":
          creatorId = lowUser1.id;
          break;
        case "low & intermediate":
          creatorId = intermediateUser1.id;
          break;
        case "intermediate":
          creatorId = intermediateUser2.id;
          break;
        case "intermediate & high":
          creatorId = highUser1.id;
          break;
        case "high":
          creatorId = highUser2.id;
          break;
        case "all levels":
          creatorId = highUser3.id;
          break;
        default:
          break;
      }
      const topics = [
        "travel",
        "music",
        "career",
        "sports",
        "relationships",
        "community",
        "technology",
        "fashion",
        "politics",
        "pets",
        "food",
        "movies",
      ];
      const randomTopicIndex = Math.floor(Math.random() * topics.length);
      const topic = topics[randomTopicIndex];

      switch (topic) {
        case "travel":
          title = "Share Your Travel Stories! ✈️";
          break;
        case "music":
          title = "Talk About Music, Anyone? 🎶";
          break;
        case "career":
          title = "Let's Chat Jobs and Careers! 💼";
          break;
        case "sports":
          title = "Sports Time – Let's Chat! ⚽";
          break;
        case "relationships":
          title = "What About Love and Relationships? ❤️";
          break;
        case "community":
          title = "Join Our Community Corner! 🌍";
          break;
        case "technology":
          title = "Tech Stuff to Talk About! 📱";
          break;
        case "fashion":
          title = "Fashion Trends and More! 👗";
          break;
        case "politics":
          title = "Discuss Politics with Us! 🗳️";
          break;
        case "pets":
          title = "Calling All Pet Lovers! 🐾";
          break;
        case "food":
          title = "Foodie Talks, Yum! 🍔";
          break;
        case "movies":
          title = "Movies and More Movies! 🎬";
          break;
        default:
          break;
      }
      const locations = [
        "North End, Boston, MA",
        "The Esplanade, Cambridge, MA",
        "Belmont, MA",
        "Revere Beach, Revere, MA",
        "Central Square, Cambridge, MA",
        "Kendall Square, Cambridge, MA",
        "South Boston, Boston, MA",
        "Somerville, MA",
        "Belmont, MA",
        "East Boston, Boston, MA",
        "Lynn, MA",
        "Newton Center, Newton, MA",
        "Saugus, MA",
      ];

      const randomLocationIndex = Math.floor(Math.random() * locations.length);
      const location = locations[randomLocationIndex];

      const minMembers = faker.number.int({ min: 2, max: 6 });
      const maxMembers = faker.number.int({ min: minMembers, max: 6 });
      const placeCategories = ["cafe", "library", "park", "mall", "bar", "unsure"];
      const randomCategoryIndex = Math.floor(Math.random() * placeCategories.length);
      const placeCategory = placeCategories[randomCategoryIndex];

      const languageGroup = {
        title: title,
        topic: topic,
        location: location,
        englishLevel: englishLevel,
        minMembers: minMembers,
        maxMembers: maxMembers,
        placeCategory: placeCategory,
        creatorId: creatorId,
      };
      languageGroupData.push(languageGroup);
    }

    for (const singleLanguageGroup of languageGroupData) {
      const currentLanguageGroup = await LanguageGroup.query().findOne({
        topic: singleLanguageGroup.topic,
        location: singleLanguageGroup.location,
        englishLevel: singleLanguageGroup.englishLevel,
        minMembers: singleLanguageGroup.minMembers,
        maxMembers: singleLanguageGroup.maxMembers,
      });
      if (!currentLanguageGroup) {
        const group = await LanguageGroup.query().insert(singleLanguageGroup);
        await Participation.query().insert({
          languageGroupId: group.id,
          participantId: singleLanguageGroup.creatorId,
        });
      }
    }
  }
}

export default LanguageGroupSeeder;
