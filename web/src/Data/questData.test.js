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

const questNames = quests.map(q => q.name);

describe("Quest list", () => {
    test("all skills are valid", () => {
        quests.filter(q => q.skills.length > 0)
            .flatMap(q => q.skills)
            .forEach(skill => {
                expect(expectedSkills).toContain(skill.name);
                expect(skill.level).toBeLessThanOrEqual(99);
                expect(skill.level).toBeGreaterThanOrEqual(1);
            });
    });

    test("all quest requirements are valid", () => {
        quests.filter(q => q.quests.length > 0)
            .flatMap(q => q.quests)
            .forEach(quest => {
                expect(questNames).toContain(quest);
            });
    })
});