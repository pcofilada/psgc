// @flow

import provinces from './data/provinces.json';

export default {
  all: (Function = () => provinces),
  find: (Function = (name: String) =>
    provinces.find(province => province.name === name))
};
