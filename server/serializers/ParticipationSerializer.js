import { Participation } from "../src/models/index.js";
import UserSerializer from "./UserSerializer.js";
import LanguageGroupSerializer from "./LanguageGroupSerializer.js";
import participationsRouter from "../src/routes/api/v1/participationsRouter.js";

class ParticipationSerializer {
  static async getParticipationInfo(languageGroups) {
    const requiredAttributes = ["participationId", "languageGroupId", "id"];

    const serializedParticipation = {};
    for (const attribute of requiredAttributes) {
      serializedParticipation[attribute] = participation[attribute];
    }
    const user = await participation.$relatedQuery("participant");
    const serializedUser = UserSerializer.getProfileOfOne(user);

    serializedParticipation.participant = await participation.$relatedQuery("participant");

    const group = await participation.$relatedQuery("languageGroupJoined");
    serializedGroup = await participation.$relatedQuery("participant");
    serializedLanguageGroup.creator = serializedUser;
    return serializedLanguageGroup;
  }
}

export default ParticipationSerializer;
