import { useCallback, useState } from "react";
import RealmContext, { Spell, MagicItem } from "../realm/RealmConfig";

const { useRealm, useQuery, useObject } = RealmContext;

const useLocalDataSource = () => {
    const realm = useRealm();
    const [error, setError] = useState("");

    const addItem = useCallback(
        ({ itemData, schema }) => {
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

    const getItem = () => {};
};
