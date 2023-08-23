import { Participation, LanguageGroup, User } from "../../models/index.js";

class ParticipationSeeder {
  static async seed() {
    const lowUser1 = await User.query().findOne("englishLevel", "low");
    const lowUser2 = await User.query().findOne("englishLevel", "low").offset(1);
    const intermediateUser = await User.query().findOne("englishLevel", "intermediate");

    const careers = await LanguageGroup.query().findOne("topic", "Careers"); // low-intermediate
    const music = await LanguageGroup.query().findOne("topic", "Music"); // low
    const travel = await LanguageGroup.query().findOne("topic", "Travel"); // low-intermediate

    const joinData = [
      {
        participantId: lowUser1.id,
        languageGroupId: careers.id,
      },
      {
        participantId: lowUser2.id,
        languageGroupId: music.id,
      },
      {
        participantId: lowUser2.id,
        languageGroupId: careers.id,
      },
      {
        participantId: intermediateUser.id,
        languageGroupId: careers.id,
      },
      {
        participantId: intermediateUser.id,
        languageGroupId: travel.id,
      },
    ];

    for (const singleJoin of joinData) {
      const currentJoin = await Participation.query().findOne({
        participantId: currentJoin.participantId,
        languageGroupId: currentJoin.languageGroupId,
      });
      if (!currentJoin) {
        await Participation.query().insert(singleJoin);
      }
    }
  }
}

export default ParticipationSeeder;
