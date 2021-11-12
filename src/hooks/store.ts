import create from 'zustand';

import { SiteState, defaultFilterPayload } from '../utils';

export const useStore = create<SiteState>((set) => ({
  address: '',
  assets: [],
  filterPayload: defaultFilterPayload,
  setAddress: (to) => set({ address: to }),
  setAssets: (to) => set({ assets: to }),
  setFilterPayload: (to) => set({ filterPayload: to }),
}));
