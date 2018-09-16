// @flow

import municipalities from './data/municipalities.json';
import barangays from './data/barangays.json';

export default {
  all: (): Array<Object> =>
    municipalities.map(municipality => {
      const municipalityBarangays: Array<Object> = barangays.filter(
        barangay => barangay.citymun === municipality.name
      );

      return {
        ...municipality,
        barangays: municipalityBarangays.map(barangay => barangay.name)
      };
    }),
  find: (name: string): Object | void => {
    const municipality: Object | void = municipalities.find(
      municipality => municipality.name === name
    );

    if (!municipality) return undefined;

    const municipalityBarangays: Array<Object> = barangays.filter(
      barangay => barangay.citymun === municipality.name
    );

    return {
      ...municipality,
      barangays: municipalityBarangays.map(barangay => barangay.name)
    };
  },
  filter: (name: string): Array<Object> => {
    /* eslint no-useless-escape: "error" */
    const searchPattern = new RegExp(`[a-zA-Z\\s]*${name}[a-zA-Z]*`, 'i');
    const filteredMunicipalitiesArray: Array<Object> = municipalities.filter(
      municipality => !!searchPattern.exec(municipality.name)
    );

    return filteredMunicipalitiesArray.map(municipality => ({
      ...municipality,
      barangays: barangays
        .filter(barangay => barangay.citymun === municipality.name)
        .map(barangay => barangay.name)
    }));
  }
};
