import MagicItem from "./schemas/MagicItemSchema";
import Spell from "./schemas/SpellSchema";

export const config = {
    schema: [MagicItem, Spell],
};

export const schemaClasses = {
    magicitem: MagicItem,
    spell: Spell,
};
