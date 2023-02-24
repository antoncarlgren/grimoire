import { MMKVLoader, create } from "react-native-mmkv-storage";

const mmkv = new MMKVLoader().initialize();
export const useStorage = create(mmkv);
