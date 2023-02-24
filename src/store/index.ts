// // store.ts
import { InjectionKey } from 'vue';

import {
  createStore,
  Store,
  useStore as baseUseStore,
} from 'vuex';

import layout from './modules/layout';

export interface State {
  count: number;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  modules: { layout },
});
export function useStore() {
  return baseUseStore(key);
}
