import { SetState } from "zustand";

export type IState  = {
  userPayload: () => {};
}

const mutations = (set: SetState<object>) => ({
  // setUserPayload: (payload: any) => set(state => { userPayload: [...state.userPayload, payload] }),
});

export default mutations;