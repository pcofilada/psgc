export interface Region {
  name: string;
  designation: string;
}

export interface Province {
  name: string;
  region: string;
}

export interface Municipality {
  name: string;
  province: string;
}

export interface Barangay {
  name: string;
  citymun: string;
  code: number;
}

export interface MappedRegion extends Region {
  provinces: Array<Province>;
}

export interface MappedProvince extends Province {
  municipalities: Array<Municipality>;
}

export interface MappedMunicipality extends Municipality {
  barangays: Array<Barangay>;
}
