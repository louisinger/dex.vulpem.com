import type { Utxo } from 'marina-provider';
import { writable } from 'svelte/store';

export interface MarinaStore {
  installed: boolean;
  enabled: boolean;
  utxos: Utxo[];
}

const initialState = { installed: false, enabled: false, network: "liquid", utxos: [] };

export const marinaStore = writable<MarinaStore>(initialState);


/* 
const storeName = "dexStore";
interface State {
  swap: any;
}

export const store = writable<State>(JSON.parse(localStorage.getItem(storeName)) || {});
// Anytime the store changes, update the local storage value
store.subscribe((store: State) => {
  localStorage[storeName] = store;
});
 */


