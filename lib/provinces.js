// @flow

import provinces from './data/provinces.json';
import municipalities from './data/municipalities.json';

export default {
  all: (): Array<Object> =>
    provinces.map(province => {
      const provinceMunicipalities: Array<Object> = municipalities.filter(
        municipality => municipality.province === province.name
      );

      return {
        ...province,
        municipalities: provinceMunicipalities.map(
          municipality => municipality.name
        )
      };
    }),
  find: (name: string): Object | void => {
    const province: Object | void = provinces.find(
      province => province.name === name
    );

    if (!province) return undefined;

    const provinceMunicipalities: Array<Object> = municipalities.filter(
      municipality => municipality.province === province.name
    );

    return {
      ...province,
      municipalities: provinceMunicipalities.map(
        municipality => municipality.name
      )
    };
  }
};
