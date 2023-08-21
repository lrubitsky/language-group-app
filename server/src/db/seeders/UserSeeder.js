import { User } from "../../models/index.js";

class UserSeeder {
  static async seed() {
    const userData = [
      {
        email: "user1@email.com",
        cryptedPassword: "q3tvgbtrstshdhsh",
        username: "username1",
        firstName: "Estela",
        lastName: "Sanchez",
        nativeLanguage: "Spanish",
        englishLevel: "low",
        ageRange: "30-35",
        location: "East Boston, Boston, MA",
        introduction: "Hello!",
      },
      {
        email: "user2@email.com",
        cryptedPassword: "rhehdndzgdgzsg",
        username: "username2",
        firstName: "Ahmed",
        lastName: "Halaby",
        nativeLanguage: "Arabic",
        englishLevel: "intermediate",
        ageRange: "18-24",
        location: "Revere, MA",
        introduction: "I am happy to chat with you!",
      },
      {
        email: "user3@email.com",
        cryptedPassword: "zgasevzbfzbdvdf",
        username: "username3",
        firstName: "Marie",
        lastName: "Santana",
        nativeLanguage: "Haitian Creole",
        englishLevel: "high",
        ageRange: "45-50",
        location: "Somerville, MA",
        introduction: "I love English!",
      },
      {
        email: "user4@email.com",
        cryptedPassword: "knvndfnkzsndkc",
        username: "username4",
        firstName: "Anh",
        lastName: "Nguyen",
        nativeLanguage: "Vietnamese",
        englishLevel: "low",
        ageRange: "25-30",
        location: "North Cambridge, Cambridge, MA",
        introduction: "I am very motivated!",
      },
      {
        email: "user5@email.com",
        cryptedPassword: "3wenjnvioznkz",
        username: "username5",
        firstName: "Lila",
        lastName: "Tamang",
        nativeLanguage: "Nepalese",
        englishLevel: "intermediate",
        ageRange: "45-50",
        location: "Belmont, MA",
        introduction: "Hi. I moved to Massachusetts 1 year ago",
      },
      {
        email: "user6@email.com",
        cryptedPassword: "ansandwsvsewdv",
        username: "username6",
        firstName: "Artem",
        lastName: "Melnyk",
        nativeLanguage: "Ukrainian",
        englishLevel: "high",
        ageRange: "50-55",
        location: "Winthrop, MA",
        introduction: "Nice to meet you!",
      },
    ];

    for (const singleUser of userData) {
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
