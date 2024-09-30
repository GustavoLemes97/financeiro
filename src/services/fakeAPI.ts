import { entriesMock, Entry } from "@/mocks/entriesMock";

export const fetchEntries = async () => {
  return new Promise<Entry[]>((resolve) => {
    setTimeout(() => {
      resolve(entriesMock);
    }, 400);
  });
};
