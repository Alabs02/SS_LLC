import { SetState, GetState } from 'zustand';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';

const authModule = (set: SetState<any>, get: GetState<any>) => ({
  ...state,
  ...actions(set),
  ...getters(get),
  ...mutations(set),
});

export default authModule;
