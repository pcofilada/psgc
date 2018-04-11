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
  }
};
