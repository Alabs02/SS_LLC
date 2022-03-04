import createStore, { SetState, GetState } from "zustand";
import { devtools, persist } from "zustand/middleware";

// MODULES
import {
  authModule,
} from "./modules";


const store = devtools(
  (set: SetState<object>, get: GetState<object>) => ({
    ...authModule(set, get),
  }),
);

const storePersist = persist(store, {
  name: "ssaf-llc-storage",
  getStorage: () => sessionStorage,
});

const useStore = createStore(storePersist);

export default useStore;