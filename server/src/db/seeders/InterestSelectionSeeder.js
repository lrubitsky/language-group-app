import InterestSelection from "../../models/InterestSelection.js";
import { Interest, User } from "../../models/index.js";

class InterestSelectionSeeder {
  static async seed() {
    try {
      const travelInterest = await Interest.query().findOne("interest", "travel");
      const musicInterest = await Interest.query().findOne("interest", "music");
      const careersInterest = await Interest.query().findOne("interest", "careers");

      const lowUser1 = await User.query().findOne("englishLevel", "low");
      const lowUser2 = await User.query().findOne("englishLevel", "low").offset(1);

      const intermediateUser1 = await User.query().findOne("englishLevel", "intermediate");
      const intermediateUser2 = await User.query()
        .findOne("englishLevel", "intermediate")
        .offset(1);
      const highUser1 = await User.query().findOne("englishLevel", "high");
      const highUser2 = await User.query().findOne("englishLevel", "high").offset(1);
      const highUser3 = await User.query().findOne("englishLevel", "high").offset(2);

      const joinData = [
        {
          interestId: travelInterest.id,
          userId: lowUser1.id,
        },
        {
          interestId: musicInterest.id,
          userId: lowUser1.id,
        },
        {
          interestId: careersInterest.id,
          userId: lowUser1.id,
        },
        {
          interestId: travelInterest.id,
          userId: lowUser2.id,
        },
        {
          interestId: travelInterest.id,
          userId: intermediateUser1.id,
        },
        {
          interestId: musicInterest.id,
          userId: intermediateUser1.id,
        },
        {
          interestId: musicInterest.id,
          userId: intermediateUser2.id,
        },
        {
          interestId: musicInterest.id,
          userId: highUser1.id,
        },
        {
          interestId: careersInterest.id,
          userId: highUser1.id,
        },
        {
          interestId: careersInterest.id,
          userId: highUser1.id,
        },
        {
          interestId: careersInterest.id,
          userId: highUser1.id,
        },
      ];

      for (const singleJoin of joinData) {
        const currentJoin = await InterestSelection.query().findOne({
          interestId: singleJoin.interestId,
          userId: singleJoin.userId,
        });

        if (!currentJoin) {
          await InterestSelection.query().insert(singleJoin);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default InterestSelectionSeeder;
