import express from "express";
import { Participation } from "../../../models/index.js";

const participationRouter = new express.Router();

participationRouter.post("/", async (req, res) => {
  try {
    const userId = req.user.id;
    const languageGroupId = req.body.languageGroup.id;
    const newJoin = await Participation.query().insertAndFetch({
      userId: userId,
      languageGroupId: languageGroupId,
    });
    return res.status(201).json({ status: "success", participation: newJoin });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ errors: err });
  }
});

export default participationRouter;
