import { Interest } from "../../models/index.js";

class InterestSeeder {
  static async seed() {
    const interestsData = await Interest.query().insert([
      {
        interest: "travel",
      },
      {
        interest: "music",
      },
      {
        interest: "careers",
      },
    ]);
    for (const singleInterest of interestsData) {
      const currentInterest = await Interest.query().findOne({ interest: singleInterest.interest });
      if (!currentInterest) {
        await Interest.query().insert(singleInterest);
      }
    }
  }
}

export default InterestSeeder;
