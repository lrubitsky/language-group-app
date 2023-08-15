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

languageGroupsRouter.get("/:id", async (req, res) => {
  console.log("HELLO")
  try {
    const { id } = req.params;
    console.log("The id is ", `${id}`)
    const languageGroupData = await LanguageGroup.query().findById(id);
    console.log("Language Group Data from Router ", languageGroupData)
    if (languageGroupData) {
      res.status(200).json({ languageGroup: languageGroupData });
    } else {
      console.log(error)
      return res.status(404).json({ errors: error });
    }
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
});

export default languageGroupsRouter;
