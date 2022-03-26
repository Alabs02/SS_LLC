import { GetState } from 'zustand';

export type IAuthGet = {
  userPayload: {
    email: string;
    password: string;
  };
};

const getters = (get: GetState<IAuthGet>) => ({
  userPayload: {},
  getUserpayload: () => get().userPayload,
});

export default getters;
