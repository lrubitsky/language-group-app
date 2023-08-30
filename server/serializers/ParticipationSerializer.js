import { Participation } from "../src/models/index.js";
import UserSerializer from "./UserSerializer.js";
import LanguageGroupSerializer from "./LanguageGroupSerializer.js";
import participationsRouter from "../src/routes/api/v1/participationsRouter.js";

class ParticipationSerializer {
  static async getParticipationInfo(participation) {
    const requiredAttributes = ["participationId", "languageGroupId", "id"];

    const serializedParticipation = {};
    for (const attribute of requiredAttributes) {
      serializedParticipation[attribute] = participation[attribute];
    }
    try {
      const participant = await participation.$relatedQuery("participant");
      const serializedParticipant = UserSerializer.getProfileOfOne(participant);

      serializedParticipation.participant = serializedParticipant;

      const group = await participation.$relatedQuery("languageGroupJoined");
      const serializedGroup = await LanguageGroupSerializer.getInfo(group);

      serializedParticipation.languageGroupJoined = serializedGroup;
    } catch (error) {
      // Handle the error and return an appropriate response
      console.error("Error in ParticipationSerializer:", error);
      throw new Error("Error while serializing participation data.");
    }

    return serializedParticipation;
  }
}

export default ParticipationSerializer;
