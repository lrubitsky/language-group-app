import express from "express";
import passport from "passport";
import { User } from "../../../models/index.js";

const usersRouter = new express.Router();

usersRouter.post("/", async (req, res) => {
  const {
    email,
    password,
    passwordConfirmation,
    username,
    firstName,
    lastName,
    nativeLanguage,
    englishLevel,
    ageRange,
    location,
    introduction,
  } = req.body;
  try {
    const persistedUser = await User.query().insertAndFetch({
      email,
      password,
      username,
      firstName,
      lastName,
      nativeLanguage,
      englishLevel,
      ageRange,
      location,
      introduction,
    });
    return req.login(persistedUser, () => {
      return res.status(201).json({ user: persistedUser });
    });
  } catch (error) {
    console.log(error);
    return res.status(422).json({ errors: error });
  }
});

usersRouter.get("/", async (req, res) => {});

export default usersRouter;
