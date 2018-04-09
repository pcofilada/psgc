import regions from './data/regions.json';

export default {
  all() {
    return regions;
  },
  find(name) {
    return regions.find(region => region.name === name);
  }
};
