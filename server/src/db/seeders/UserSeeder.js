import { User } from "../../models/index.js";
import { faker } from "@faker-js/faker";

class UserSeeder {
  static async seed() {
    const fakeUserData = [];

    for (let i = 0; i < ; i++) {
      const firstName = i % 2 ? faker.person.firstName("male") : faker.person.firstName("female");
      const nativeLanguage = i % 3 === 0 ? "Spanish" : i % 3 === 1 ? "French" : "Arabic";
      const englishLevel = i % 3 === 0 ? "low" : i % 3 === 1 ? "intermediate" : "high";
      const city = faker.location.city();

      const startingAge = faker.date.birthdate({ min: 18, max: 100, mode: "age" });
      const ageRange = startingAge + "-" + (startingAge + 5);

      const lastName = faker.person.lastName();
      const userName = firstName + lastName + faker.string.alpha("number");

      const user = {
        email: faker.internet.email(),
        cryptedPassword: faker.internet.password({ length: 8 }),
        username: userName,
        firstName: lastName,
        lastName: lastName,
        nativeLanguage: nativeLanguage,
        englishLevel: englishLevel,
        ageRange: ageRange,
        location: city,
      };
      fakeUserData.push(user);
    }

    await User.query().insert(fakeUserData);

    // for (const singleUser of fakeUserData) {
    //   const currentUser = await User.query().findOne({
    //     email: singleUser.email,
    //   });
    //   if (!currentUser) {
    //     await User.query().insert(singleUser);
    //   }
    // }
  }
}

export default UserSeeder;
