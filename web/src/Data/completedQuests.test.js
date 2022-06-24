import completedQuests from "./completedQuests.json";
import {quests} from "./questData.json";

const questNames = quests.map(q => q.name);


describe("completed quests", () => {
    test("all valid quests", () => {
        Object.keys(completedQuests)
            .flatMap(key => completedQuests[key])
            .forEach(quest => expect(questNames).toContain(quest));
    })
})