import { User } from "../../models/index.js";
import { faker } from "@faker-js/faker";
import md5 from "blueimp-md5";
import bcrypt from "bcrypt";

class UserSeeder {
  static async seed() {
    const fakeUserData = [];
    const sampleEmail = "email@email.com";
    const hash = md5(sampleEmail);

    const sampleUser = {
      email: sampleEmail,
      password: "password",
      username: "hlopez8",
      firstName: "Hugo",
      lastName: "Lopez",
      nativeLanguage: "Spanish",
      englishLevel: "intermediate",
      ageRange: "25-30",
      location: "Boston, MA",
      introduction: "Let's become fluent in English together!",
      travel: true,
      music: true,
      careers: false,
      sports: false,
      relationships: false,
      community: false,
      technology: false,
      fashion: false,
      politics: false,
      pets: false,
      food: false,
      movies: false,
      imageUrl: `https://www.gravatar.com/avatar/${hash}?d=robohash`,
    };
    fakeUserData.push(sampleUser);

    for (let i = 0; i < 100; i++) {
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();
      const userName = firstName + lastName + faker.number.int(100);
      const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`;
      const hash = md5(email);
      const imageUrl = `https://www.gravatar.com/avatar/${hash}?d=robohash`;
      const languages = [
        "Spanish",
        "Portuguese",
        "Arabic",
        "Haitian Creole",
        "Chinese",
        "Vietnamese",
        "Ukrainian",
        "Amharic",
      ];
      const randomLanguageIndex = Math.floor(Math.random() * languages.length);
      const nativeLanguage = languages[randomLanguageIndex];

      const englishLevel = i % 3 === 0 ? "low" : i % 3 === 1 ? "intermediate" : "high";
      const cities = [
        "Quincy, MA",
        "Boston, MA",
        "Cambridge, MA",
        "Lynn, MA",
        "Saugus, MA",
        "Revere, MA",
        "Chelsea, MA",
        "Winthrop, MA",
        "Malden, MA",
        "Belmont, MA",
        "Newton, MA",
        "Brookline, MA",
        "Everett, MA",
        "Nashua, NH",
      ];
      const randomCityIndex = Math.floor(Math.random() * cities.length);
      const city = cities[randomCityIndex];

      const introductions = [
        "Hi there! I'm excited to connect and improve my English with you.",
        "Hello, I'm here to practice English conversations and meet new friends.",
        "Hey, I'm looking forward to chatting with you and getting better at English.",
        "Hi, I'm eager to enhance my English skills through meaningful conversations.",
        "Hello! Let's have interesting discussions and enhance our English together.",
        "Hey, I'm here to learn and grow by conversing in English with you.",
        "Hi, I'm open to chatting about various topics to improve my English fluency.",
        "Hello, I'm seeking friendly conversations to boost my English proficiency.",
        "Hey there! Let's exchange thoughts and language skills in English.",
        "Hi, I'm ready to engage in English conversations for mutual learning and fun.",
      ];
      const randomIntroductionIndex = Math.floor(Math.random() * introductions.length);
      const introduction = introductions[randomIntroductionIndex];

      const startingAge = faker.number.int({ min: 18, max: 90 });
      const ageRange = `${startingAge}-${startingAge + 5}`;

      const user = {
        email: email,
        password: faker.internet.password({ length: 8 }),
        username: userName,
        firstName: firstName,
        lastName: lastName,
        nativeLanguage: nativeLanguage,
        englishLevel: englishLevel,
        ageRange: ageRange,
        location: city,
        introduction: introduction,
        travel: faker.datatype.boolean(0.2),
        music: faker.datatype.boolean(0.2),
        careers: faker.datatype.boolean(0.2),
        sports: faker.datatype.boolean(0.2),
        relationships: faker.datatype.boolean(0.2),
        community: faker.datatype.boolean(0.2),
        technology: faker.datatype.boolean(0.2),
        fashion: faker.datatype.boolean(0.2),
        politics: faker.datatype.boolean(0.2),
        pets: faker.datatype.boolean(0.2),
        food: faker.datatype.boolean(0.2),
        movies: faker.datatype.boolean(0.2),
        imageUrl: imageUrl,
      };
      fakeUserData.push(user);
    }
    await User.query().insert(fakeUserData);
    for (const singleUser of fakeUserData) {
      const currentUser = await User.query().findOne({
        email: singleUser.email,
      });
      if (!currentUser) {
        await User.query().insert(singleUser);
      }
    }
  }
}

export default UserSeeder;
