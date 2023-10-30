const splitSkill = (skillStr) => {
  const [rank, level, experience] = skillStr.split(",");

  return {
    rank,
    level,
    experience,
  };
};


export default (skillStr) => {
  const { skills, activities } = JSON.parse(skillStr);

  const mappedSkills = skills.except(s => s.name === "Overall").reduce(result, skill => ({ ...result, [skill.name]: skill }), {});

  const mappedActivities = activities.reduce(result, skill => ({ ...result, [skill.name]: skill }), {});

  return {
    Overall: mappedSkills.Overall,
    skills: mappedSkills,
    activities: mappedActivities
  };
};
