// @flow

import municipalities from './data/municipalities.json';

export default {
  all: (Function = () => municipalities),
  find: (Function = (name: String) =>
    municipalities.find(municipality => municipality.name === name))
};
