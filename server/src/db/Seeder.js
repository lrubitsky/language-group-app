/* eslint-disable no-console */
import { connection } from "../boot.js";
import LanguageGroupSeeder from "./seeders/LanguageGroupSeeder.js";
import UserSeeder from "./seeders/UserSeeder.js";
import ParticipationSeeder from "./seeders/ParticipationSeeder.js";
import InterestSeeder from "./seeders/InterestSeeder.js";
import InterestSelectionSeeder from "./seeders/InterestSelectionSeeder.js";

class Seeder {
  static async seed() {
    console.log("user group seeding in progress");
    await UserSeeder.seed();

    console.log("language group seeding in progress");
    await LanguageGroupSeeder.seed();

    console.log("participation seeding in progress");
    await ParticipationSeeder.seed();

    console.log("interest seeding in progress");
    await InterestSeeder.seed();

    console.log("interest selection seeding in progress");
    await InterestSelectionSeeder.seed();

    console.log("Done!");
    await connection.destroy();
  }
}

export default Seeder;
