import { useCallback, useState, useMemo } from "react";
import RealmContext, { Spell, MagicItem } from "../realm/RealmConfig";

const { useRealm, useQuery, useObject } = RealmContext;

const useLocalDataSource = ({ schema }) => {
    const realm = useRealm();
    const [error, setError] = useState("");
    const [data, setData] = useState({});

    const addItem = useCallback(
        ({ itemData }) => {
            if (!itemData || !schema) {
                setError("Could not save item due to missing data or schema.");
                return;
            }
            try {
                realm.write(() => {
                    realm.create(typeof schema, schema.generate(itemData));
                });
            } catch (error) {
                setError(error);
            }
        },
        [realm]
    );

    const getItemById = ({ _id }) => useObject({ schema, _id });

    const getAllMatchingItems = useQuery();
};
