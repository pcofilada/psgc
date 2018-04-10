// @flow

import barangays from './data/barangays.json';

export default {
  all: (Function = () => barangays),
  find: (Function = (name: String) =>
  barangays.find(barangay => barangay.name === name))
};
