import * as Colors from "./Colors";
import { paths } from "./ApiConfig";

export const spellSearchOptions = {
    path: paths.spells,
    placeholder: "Search Grimoire",
    cardColors: {
        highlighting: Colors.schoolTextColors,
        key: "school",
    },
    keys: [
        {
            target: "name",
            key: "name",
            alias: "n",
        },
        {
            target: "school",
            key: "school",
            alias: "sch",
        },
        {
            target: "level_int",
            key: "level",
            alias: "l",
        },
        {
            target: "dnd_class",
            key: "class",
            alias: "c",
        },
        {
            target: "ritual",
            key: "ritual",
            alias: "r",
        },
        {
            target: "desc",
            key: "desc",
            alias: "d",
        },
        {
            target: "components",
            key: "comp",
        },
        {
            target: "concentration",
            key: "conc",
        },
    ],
};

export const magicItemSearchOptions = {
    path: paths.magicItems,
    placeholder: "Search Treasure Chest",
    cardColors: {
        highlighting: Colors.rarityTextColors,
        key: "rarity",
    },
    keys: [
        {
            target: "name",
            key: "name",
            alias: "n",
        },
        {
            target: "rarity",
            key: "rarity",
            alias: "r",
        },
        {
            target: "type",
            key: "type",
            alias: "t",
        },
        {
            target: "desc",
            key: "desc",
            alias: "d",
        },
        {
            target: "requires_attunement",
            key: "attune",
            alias: "a",
        },
    ],
};
