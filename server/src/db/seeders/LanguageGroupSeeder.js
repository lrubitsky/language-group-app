import { LanguageGroup } from "../../models/index.js"

class LanguageGroupSeeder {
    static async seed() {
        const languageGroupData = await LanguageGroup.query().insert([
            {
                topic: "Music",
                location: "North End, Boston, MA",
                englishLevel: "low",
                minMembers: 3,
                maxMembers: 5
            },
            {
                topic: "Careers",
                location: "The Esplanade, Cambridge, MA",
                englishLevel: "intermediate",
                minMembers: 2,
                maxMembers: 6
            },
            {
                topic: "Travel",
                location: "Revere Beach, Revere, MA",
                englishLevel: "high",
                minMembers: 4,
                maxMembers: 5
            },
            {
                topic: "Relationships",
                location: "Central Square, Cambridge, MA",
                englishLevel: "low",
                minMembers: 2,
                maxMembers: 5
            },
            {
                topic: "Community",
                location: "Winter Hill, Somerville, MA",
                englishLevel: "high",
                minMembers: 4,
                maxMembers: 6
            },
            {
                topic: "Sports",
                location: "East Boston, Boston, MA",
                englishLevel: "all",
                minMembers: 3,
                maxMembers: 4
            },
            {
                topic: "Technology",
                location: "Kendall Square, Cambridge, MA",
                englishLevel: "high",
                minMembers: 2,
                maxMembers: 5
            },
            {
                topic: "Fashion",
                location: "Newton Center, Newton, MA",
                englishLevel: "intermediate",
                minMembers: 2,
                maxMembers: 5
            },
            {
                topic: "Politics",
                location: "Framingham, MA",
                englishLevel: "low",
                minMembers: 3,
                maxMembers: 5
            },
            {
                topic: "Pets",
                location: "Lynn, MA",
                englishLevel: "intermediate-high",
                minMembers: 4,
                maxMembers: 6
            },
            {
                topic: "Politics",
                location: "South Boston, Boston, MA",
                englishLevel: "low-intermediate",
                minMembers: 2,
                maxMembers: 4
            },
            {
                topic: "Food",
                location: "Belmont, MA",
                englishLevel: "high",
                minMembers: 2,
                maxMembers: 5
            },
            {
                topic: "Movies",
                location: "Saugus, MA",
                englishLevel: "all",
                minMembers: 3,
                maxMembers: 6
            },
        ])

        for (const singleLanguageGroup of languageGroupData) {
            const currentLanguageGroup = await LanguageGroup.query().findOne({ 
                topic: singleLanguageGroup.topic,
                location: singleLanguageGroup.location,
                englishLevel: singleLanguageGroup.englishLevel,
                minMembers: singleLanguageGroup.minMembers,
                maxMembers: singleLanguageGroup.maxMembers,
            })
            if (!currentLanguageGroup) {
                await LanguageGroup.query().insert(singleLanguageGroup);
            }
        }
    }
}

export default LanguageGroupSeeder