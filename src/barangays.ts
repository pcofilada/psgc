import barangays from "./data/barangays.json";
import { Barangay } from "./PsgcInterface";

export default {
  all: (): Array<Barangay> => barangays,

  find: (name: string): Barangay | void => {
    return barangays.find((barangay: Barangay) => barangay.name === name);
  },

  filter: (name: string): Array<Barangay> => {
    const searchPattern = new RegExp(`[a-zA-Z\\s]*${name}[a-zA-Z]*`, "i");

    return barangays.filter(
      (barangay: Barangay) => !!searchPattern.exec(barangay.name)
    );
  },
};
