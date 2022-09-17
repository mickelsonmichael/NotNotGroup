import diaries from "./diaries";
import { quests } from "./questData.json";

const expectedSkills = [
    "Attack",
    "Defence",
    "Strength",
    "Hitpoints",
    "Ranged",
    "Prayer",
    "Magic",
    "Cooking",
    "Woodcutting",
    "Fletching",
    "Fishing",
    "Firemaking",
    "Crafting",
    "Smithing",
    "Mining",
    "Herblore",
    "Agility",
    "Thieving",
    "Slayer",
    "Farming",
    "Runecraft",
    "Hunter",
    "Construction"
];

describe("Diaries list", () => {
    test("all skills are valid", () => {
        Object.keys(diaries)
            .flatMap(region => Object.keys(diaries[region]).flatMap(difficulty => diaries[region][difficulty]))
            .map(task => task.skills)
            .forEach(skillMap => {
                Object.keys(skillMap)
                    .forEach(skillName => {
                        const level = skillMap[skillName];
                        expect(expectedSkills).toContain(skillName);
                        expect(level).toBeLessThanOrEqual(99);
                        expect(level).toBeGreaterThanOrEqual(1);
                    })
            });
    });

    test("all quest requirements are valid", () => {
        const questNames = quests.map(q => q.name);

        Object.keys(diaries)
            .flatMap(region => Object.keys(diaries[region]).flatMap(difficulty => diaries[region][difficulty]))
            .flatMap(task => task.quests)
            .forEach(quest => {
                expect(questNames).toContain(quest);
            });
    });

    test("all tests have required properties and handle nulls", () => {
        const examplePlayer = {}

        Object.keys(diaries)
          .flatMap((region) =>
            Object.keys(diaries[region]).flatMap(
              (difficulty) => diaries[region][difficulty]
            )
          )
          .flatMap((task) => task.test)
          .filter(test => test != null)
          .forEach((test) => {
            const result = test(examplePlayer);

            expect(result).toHaveProperty("isMet");
            expect(result).toHaveProperty("description");
          });
    })
});