import { config } from "../realm/RealmConfig";
import { createRealmContext } from "@realm/react";

const RealmContext = createRealmContext(config);

export default RealmContext;
