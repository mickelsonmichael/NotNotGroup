
export default ({ skills, activities }) => {
  const overall = skills.slice(0, 1)[0];
  const mappedSkills = skills.slice(1).reduce((result, skill) => ({ ...result, [skill.name]: skill }), {});

  return {
    Overall: overall,
    skills: mappedSkills,
    activities: activities
  };
};
