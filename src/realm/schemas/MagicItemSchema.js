import { Realm } from "@realm/react";

export default class MagicItem extends Realm.Object {
    static generate(magicItemData) {
        return {
            slug: magicItemData.slug,
            name: magicItemData.name,
            description: magicItemData.desc,
            rarity: magicItemData.rarity,
            requiresAttunement: magicItemData.requires_attunement !== "",
            sourceSlug: magicItemData.document__slug,
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
            rarity: "string",
            requiresAttunement: { type: "bool", default: false },
            sourceSlug: "string",
        },
    };
}
