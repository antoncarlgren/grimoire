export const formatSpellSchoolStrings = (spells) => {
  const result = spells
    .map(spell => ({...spell, school: spell.school.toLowerCase()}));
  return result;
}