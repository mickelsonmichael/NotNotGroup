import questData from "./questData.json";

const { quests } = questData;

const maximums = quests.flatMap(q => q.skills).reduce((maxes, skill) => ({
    ...maxes,
    [skill.name]: (maxes[skill.name] ?? 0) > skill.level ? maxes[skill.name] : skill.level
}), {});

export default maximums;
