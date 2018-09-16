// @flow

import barangays from './data/barangays.json';

export default {
  all: (): Array<Object> => barangays,
  find: (name: string): Object | void =>
    barangays.find(barangay => barangay.name === name),
  filter: (name: string): Array<Object> => {
    const searchPattern = new RegExp(`[a-zA-Z\\s]*${name}[a-zA-Z]*`, 'i');
    return barangays.filter(
      barangay => !!searchPattern.exec(barangay.name)
    );
  }
};
