import regions from "./data/regions.json";
import provinces from "./data/provinces.json";
import { Region, Province, MappedRegion } from "./PsgcInterface";

const findRegionProvinces = (regionDesignation: string): Array<Province> => {
  return provinces.filter((province: Province) => {
    return province.region === regionDesignation;
  });
};

export default {
  all: (): Array<MappedRegion> => {
    return regions.map((region: Region) => {
      const regionProvinces: Array<Province> = findRegionProvinces(
        region.designation
      );

      return { ...region, provinces: regionProvinces };
    });
  },

  find: (name: string): MappedRegion | void => {
    const region: Region | void = regions.find(
      (region: Region) => region.name === name
    );

    if (!region) return undefined;

    const regionProvinces: Array<Province> = findRegionProvinces(
      region.designation
    );

    return { ...region, provinces: regionProvinces };
  },

  filter: (name: string): Array<MappedRegion> => {
    const searchPattern = new RegExp(`[a-zA-Z\\s]*${name}[a-zA-Z]*`, "i");
    const filteredRegions: Array<Region> = regions.filter(
      (region: Region) => !!searchPattern.exec(region.name)
    );

    return filteredRegions.map((region: Region) => {
      const regionProvinces: Array<Province> = findRegionProvinces(
        region.designation
      );

      return {
        ...region,
        provinces: regionProvinces,
      };
    });
  },
};
