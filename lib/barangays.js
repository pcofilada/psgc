// @flow

import barangays from './data/barangays.json';

export default {
  all: (): Array<Object> => barangays,
  find: (name: string): Object | void =>
    barangays.find(barangay => barangay.name === name)
};
