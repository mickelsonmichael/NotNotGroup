import questData from "./questData.json";
import diaries from "./diaries";

const { quests } = questData;

const diaryMaximums = Object.keys(diaries).flatMap(regionKey => Object.keys(diaries[regionKey]).flatMap(difficultyKey => {
    return (diaries[regionKey][difficultyKey])
        .flatMap(task => Object.keys(task.skills)
            .map(skillKey => ({ name: skillKey, level: task.skills[skillKey] }))
        )
})).reduce((maxes, skill) => ({
    ...maxes,
    [skill.name]: (maxes[skill.name] ?? 0) > skill.level ? maxes[skill.name] : skill.level }), {}
);

const questMaximums = quests.flatMap(q => q.skills).reduce((maxes, skill) => ({
    ...maxes,
    [skill.name]: (maxes[skill.name] ?? 0) > skill.level ? maxes[skill.name] : skill.level
}), {});

const maximums = Object.keys(diaryMaximums).reduce((maxes, skillName) => ({
    ...maxes,
    [skillName]: (maxes[skillName] ?? 0) > diaryMaximums[skillName] ? maxes[skillName] : diaryMaximums[skillName]
}), questMaximums);

export { diaryMaximums, questMaximums };
export default maximums;
