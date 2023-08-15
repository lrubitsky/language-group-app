import express from "express";
import { LanguageGroup } from "../../../models/index.js";

const languageGroupsRouter = new express.Router();

languageGroupsRouter.get("/", async (req, res) => {
  try {
    const languageGroupsData = await LanguageGroup.query();
    return res.status(200).json({ languageGroups: languageGroupsData });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ errors: error });
  }
});

export default languageGroupsRouter;
