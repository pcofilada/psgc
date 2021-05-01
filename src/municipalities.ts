import municipalities from "./data/municipalities.json";
import barangays from "./data/barangays.json";
import { Municipality, Barangay, MappedMunicipality } from "./PsgcInterface";

const findMunicipalityBarangays = (
  municipalityName: string
): Array<Barangay> => {
  return barangays.filter((barangay: Barangay) => {
    return barangay.citymun === municipalityName;
  });
};

export default {
  all: (): Array<MappedMunicipality> => {
    return municipalities.map((municipality: Municipality) => {
      const municipalityBarangays: Array<Barangay> = findMunicipalityBarangays(
        municipality.name
      );

      return { ...municipality, barangays: municipalityBarangays };
    });
  },

  find: (name: string): MappedMunicipality | void => {
    const municipality: Municipality | void = municipalities.find(
      (municipality: Municipality) => municipality.name === name
    );

    if (!municipality) return undefined;

    const municipalityBarangays: Array<Barangay> = findMunicipalityBarangays(
      municipality.name
    );

    return { ...municipality, barangays: municipalityBarangays };
  },

  filter: (name: string): Array<MappedMunicipality> => {
    const searchPattern = new RegExp(`[a-zA-Z\\s]*${name}[a-zA-Z]*`, "i");
    const filteredMunicipalities: Array<Municipality> = municipalities.filter(
      (municipality: Municipality) => !!searchPattern.exec(municipality.name)
    );

    return filteredMunicipalities.map((municipality: Municipality) => {
      const municipalityBarangays: Array<Barangay> = findMunicipalityBarangays(
        municipality.name
      );

      return { ...municipality, barangays: municipalityBarangays };
    });
  },
};
