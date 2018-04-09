// @flow

import provinces from './data/provinces.json';
import municipalities from './data/municipalities.json';

export default {
  all: (Function = () => {
    return provinces.map(province => {
      const provinceMunicipalities = municipalities.filter(
        municipality => municipality.province === province.name
      );

      return {
        ...province,
        municipalities: provinceMunicipalities.map(
          municipality => municipality.name
        )
      };
    });
  }),
  find: (Function = (name: String) => {
    const province = provinces.find(province => province.name === name);

    if (!province) return null;

    const provinceMunicipalities = municipalities.filter(
      municipality => municipality.province === province.name
    );

    return {
      ...province,
      municipalities: provinceMunicipalities.map(
        municipality => municipality.name
      )
    };
  })
};
