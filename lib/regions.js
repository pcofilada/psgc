// @flow

import regions from './data/regions.json';
import provinces from './data/provinces.json';

export default {
  all: (): Array<Object> =>
    regions.map(region => {
      const regionProvinces: Array<Object> = provinces.filter(
        province => province.region === region.designation
      );

      return {
        ...region,
        provinces: regionProvinces.map(province => province.name)
      };
    }),
  find: (name: string): Object | void => {
    const region: Object | void = regions.find(region => region.name === name);

    if (!region) return undefined;

    const regionProvinces: Array<Object> = provinces.filter(
      province => province.region === region.designation
    );

    return {
      ...region,
      provinces: regionProvinces.map(province => province.name)
    };
  },
  filter: (name: string): Array<Object> => {
    const searchPattern = new RegExp(`[a-zA-Z\s]*${name}[a-zA-Z\s]*`, 'i');
    const filteredRegionsArray: Array<Object> = regions.filter(
      region => !!searchPattern.exec(region.name)
    );

    return filteredRegionsArray.map(region => ({
      ...region,
      provinces: provinces
        .filter(province => province.region === region.designation)
        .map(province => province.name)
    }));
  }
};
