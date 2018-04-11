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
  }
};
