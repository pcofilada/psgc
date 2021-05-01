# Philippine Standard Geographic Code (PSGC)

Provides PSGC (Philippine Standard Geographic Code) data for your application.

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=pcofilada_psgc&metric=alert_status)](https://sonarcloud.io/dashboard?id=pcofilada_psgc)
![MIT License](https://img.shields.io/static/v1.svg?label=📜%20License&message=MIT&color=informational)
![npm](https://img.shields.io/npm/v/psgc?color=brightgreen)
![npm bundle size](https://img.shields.io/bundlephobia/min/psgc)

## Installation

PSGC is available via npm.

    $ npm install --save psgc

Or you can use yarn.

    $ yarn add psgc

## Usage

Import psgc into your app.

```js
import { regions, provinces, municipalities, barangays } from "psgc";
```

Use the methods `all`, `find`, or `filter` to get the data you need.

```js
regions.all(); // To get all regions
regions.find("Ilocos Region"); // To get a specific region, pass the exact region name
regions.filter("loco"); // To get a list of all regions with names that contain the argument; case-insensitive

provinces.all();
provinces.find("La Union");
regions.filter("la u");

municipalities.all();
municipalities.find("Agoo");
municipalities.filter("agoo");

barangays.all();
barangays.find("San Nicolas East");
barangays.filter("san nico");
```

## TODO

- Add and update additional information about regions, provinces, municipalities and barangays

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Credits

- [PSA Website](http://psa.gov.ph/)
- [darklight721/philippines](https://github.com/darklight721/philippines)
