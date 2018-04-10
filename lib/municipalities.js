// @flow

import municipalities from './data/municipalities.json';
import barangays from './data/barangays.json';

export default {
  all: (Function = () => {
    return municipalities.map(municipality => {
      
      const municipalityBarangays = barangays.filter(
        barangay => barangay.citymun === municipality.name
      );

      return {
        ...municipality,
        barangays: municipalityBarangays.map(
          barangay => barangay.name
        )
      }
    })
  }),
  find: (Function = (name: String) => {
    const municipality = municipalities.find(municipality => municipality.name === name);

    if (!municipality) return null;

    const municipalityBarangays = barangays.filter(
      barangay => barangay.citymun === municipality.name
    );

    return {
      ...municipality,
      barangays: municipalityBarangays.map(
        barangay => barangay.name
      )
    };
  })
};
