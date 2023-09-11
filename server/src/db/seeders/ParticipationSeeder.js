import { Participation, LanguageGroup, User } from "../../models/index.js";

class ParticipationSeeder {
  static async seed() {
    try {
      const lowUser1 = await User.query().findOne("englishLevel", "low");
      const lowUser2 = await User.query().findOne("englishLevel", "low").offset(1);

      const intermediateUser1 = await User.query().findOne("englishLevel", "intermediate");
      const intermediateUser2 = await User.query()
        .findOne("englishLevel", "intermediate")
        .offset(1);
      const highUser1 = await User.query().findOne("englishLevel", "high");
      const highUser2 = await User.query().findOne("englishLevel", "high").offset(1);
      const highUser3 = await User.query().findOne("englishLevel", "high").offset(2);

      const lowGroup1 = await LanguageGroup.query().findOne("englishLevel", "low");
      const lowGroup2 = await LanguageGroup.query().findOne("englishLevel", "low").offset(1);
      const lowIntermediateGroup1 = await LanguageGroup.query().findOne(
        "englishLevel",
        "low & intermediate"
      );
      const intermediateGroup1 = await LanguageGroup.query().findOne(
        "englishLevel",
        "intermediate"
      );
      const highIntermediateGroup1 = await LanguageGroup.query().findOne(
        "englishLevel",
        "intermediate & high"
      );
      const highGroup1 = await LanguageGroup.query().findOne("englishLevel", "high");
      const allLevelGroup = await LanguageGroup.query().findOne("englishLevel", "all levels");

      const lowGroupLast = await LanguageGroup.query()
        .findOne("englishLevel", "low")
        .orderBy("id", "desc");

      const joinData = [
        {
          participantId: lowUser1.id,
          languageGroupId: lowGroup1.id,
        },
        {
          participantId: lowUser2.id,
          languageGroupId: lowGroup1.id,
        },
        {
          participantId: lowUser1.id,
          languageGroupId: lowGroup2.id,
        },
        {
          participantId: intermediateUser1.id,
          languageGroupId: lowIntermediateGroup1.id,
        },
        {
          participantId: lowUser1.id,
          languageGroupId: lowIntermediateGroup1.id,
        },
        {
          participantId: intermediateUser2.id,
          languageGroupId: intermediateGroup1.id,
        },
        {
          participantId: intermediateUser1.id,
          languageGroupId: intermediateGroup1.id,
        },
        {
          participantId: highGroup1.id,
          languageGroupId: highIntermediateGroup1.id,
        },
        {
          participantId: intermediateUser1.id,
          languageGroupId: highIntermediateGroup1.id,
        },
        {
          participantId: highUser1.id,
          languageGroupId: highGroup1.id,
        },
        {
          participantId: highUser2.id,
          languageGroupId: highGroup1.id,
        },
        {
          participantId: highUser1.id,
          languageGroupId: highGroup1.id,
        },
        {
          participantId: highUser3.id,
          languageGroupId: allLevelGroup.id,
        },
        {
          participantId: lowUser2.id,
          languageGroupId: lowGroupLast.id,
        },
      ];

      for (const singleJoin of joinData) {
        const currentJoin = await Participation.query().findOne({
          participantId: singleJoin.participantId,
          languageGroupId: singleJoin.languageGroupId,
        });

        if (!currentJoin) {
          await Participation.query().insert(singleJoin);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default ParticipationSeeder;
