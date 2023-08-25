import express from "express";
import { Participation } from "../../../models/index.js";
import ParticipationSerializer from "../../../../serializers/ParticipationSerializer.js";

const participationsRouter = new express.Router();

participationsRouter.get("/", async (req, res) => {
  try {
    const participations = await Participation.query();
    return res.status(200).json({ participations });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ errors: err });
  }
});
participationsRouter.get("/:languageGroupId", async (req, res) => {
  try {
    const { languageGroupId } = req.params;
    const participations = await Participation.query().where("languageGroupId", languageGroupId);
    if (participations) {
      return res.status(200).json({ participations: participations });
    } else {
      console.log("No participations found.");
      console.log(error);
      return res.status(404).json({ errors: error });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ errors: err });
  }
});

participationsRouter.post("/", async (req, res) => {
  try {
    const participantId = req.user.id;
    const languageGroupId = req.body.languageGroupId;
    const newJoin = await Participation.query().insertAndFetch({
      participantId: participantId,
      languageGroupId: languageGroupId,
    });
    return res.status(201).json({ status: "success", newJoin });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ errors: err });
  }
});

participationsRouter.delete("/", async (req, res) => {
  try {
    const languageGroupId = req.query.languageGroupId;
    const participantId = req.user.id;
    const participation = await Participation.query()
      .delete()
      .where({ languageGroupId, participantId });
    if (!participation) {
      return res.status(404).json({ message: "Participation record not found." });
    } else {
      return res.status(200).json({ message: "Participation record deleted successfully." });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ errors: err });
  }
});

export default participationsRouter;
