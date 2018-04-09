// @flow

import regions from './data/regions.json';

export default {
  all: (Function = () => regions),
  find: (Function = (name: String) =>
    regions.find(region => region.name === name))
};
