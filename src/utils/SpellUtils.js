import { convertToOrdinal } from "./TextUtils";

export const formatSpellSchoolStrings = (spells) => {
    const result = spells.map((spell) => ({
        ...spell,
        school: spell.school.toLowerCase(),
    }));
    return result;
};

export const formatSchoolAndLevel = (level, school) => {
    return `${convertToOrdinal(level)}-level ${school.ToLower()}`;
};
