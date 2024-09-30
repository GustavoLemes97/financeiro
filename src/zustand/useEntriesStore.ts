import { create } from "zustand";
import { fetchEntries } from "@/services/fakeAPI";
import { Entry } from "@/mocks/entriesMock";

interface EntriesState {
  entries: Entry[];
  fetchEntriesFromAPI: () => Promise<void>;
}

const useEntriesStore = create<EntriesState>((set) => ({
  entries: [],

  fetchEntriesFromAPI: async () => {
    const entries = await fetchEntries();
    set({ entries });
  },
}));

export default useEntriesStore;
