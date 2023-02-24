import { Realm } from "@realm/react";

export default class Spell extends Realm.Object {
    static generate(spellData) {
        return {
            slug: spellData.slug,
            name: spellData.name,
            description: spellData.desc,
            higherLevel: spellData.higher_level,
            range: spellData.range,
            components: spellData.components.split(","),
            material: spellData.material,
            ritual: spellData.ritual.toLowerCase() === "yes",
            duration: spellData.duration,
            concentration: spellData.concentration.toLowerCase() === "yes",
            castingTime: spellData.casting_time,
            level: spellData.level_int,
            school: spellData.school.toLowerCase(),
            class: spellData.class.split(","),
            archetype: spellData.archetype,
            circles: spellData.circles.split(","),
            sourceSlug: spellData.document__slug,
        };
    }

    static schema = {
        name: "MagicItem",
        primaryKey: "_id",
        properties: {
            _id: { type: "ObjectId", default: new Realm.BSON.ObjectId() },
            slug: "string",
            name: "string",
            description: "string",
            higherLevel: "string",
            range: "string",
            components: { type: "string[]", default: [] },
            material: "string",
            ritual: { type: "bool", default: false },
            duration: "string",
            concentration: { type: "bool", default: false },
            castingTime: "string",
            level: "int",
            school: "string",
            class: { type: "string[]", default: [] },
            archetype: "string?",
            circles: { type: "string[]", default: [] },
            sourceSlug: "string",
        },
    };
}
