/* eslint-disable no-console */
import { connection } from "../boot.js";
import LanguageGroupSeeder from "./seeders/LanguageGroupSeeder.js";
import UserSeeder from "./seeders/UserSeeder.js";

class Seeder {
  static async seed() {
    console.log("user group seeding in progress");
    await UserSeeder.seed();

    console.log("language group seeding in progress");
    await LanguageGroupSeeder.seed();

    console.log("Done!");
    await connection.destroy();
  }
}

export default Seeder;
