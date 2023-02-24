import { createRealmContext } from "@realm/react";
import MagicItem from "./schemas/MagicItemSchema";
import Spell from "./schemas/SpellSchema";

const config = {
    schema: [MagicItem, Spell],
};
const RealmContext = createRealmContext(config);

export const schemaClasses = {
    magicitem : MagicItem,
    spell: Spell
}
export default RealmContext;
