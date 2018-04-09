// @flow

import regions from './data/regions.json';
import provinces from './data/provinces.json';

export default {
  all: (Function = () => {
    return regions.map(region => {
      const regionProvinces = provinces.filter(
        province => province.region === region.designation
      );

      return {
        ...region,
        provinces: regionProvinces.map(province => province.name)
      };
    });
  }),
  find: (Function = (name: String) => {
    const region = regions.find(region => region.name === name);

    if (!region) return undefined;

    const regionProvinces = provinces.filter(
      province => province.region === region.designation
    );

    return {
      ...region,
      provinces: regionProvinces.map(province => province.name)
    };
  })
};
