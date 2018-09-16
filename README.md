# Philippine Standard Geographic Code (PSGC)

[![Build Status](https://travis-ci.org/pcofilada/psgc.svg?branch=master)](https://travis-ci.org/pcofilada/psgc)

Provides PSGC (Philippine Standard Geographic Code) data for your application.

## Installation

PSGC is available via npm.

    $ npm install --save psgc

Or you can use yarn.

    $ yarn add psgc

## Usage

Import psgc into your app.

~~~ js
import { regions, provinces, municipalities, barangays } from 'psgc';
~~~

Use the methods `all`, `find`, or `filter` to get the data you need.

~~~ js
regions.all()                         // To get all regions
regions.find('Ilocos Region')         // To get a specific region, pass the exact region name
regions.filter('loco')                // To get a list of all regions with names that contain the argument; case-insensitive

provinces.all()
provinces.find('La Union')
regions.filter('la u')

municipalities.all()
municipalities.find('Agoo')
municipalities.filter('agoo')


barangays.all()
barangays.find('San Nicolas East')
barangays.find('san nico')


~~~

## TODO

* Add additional information about regions, provinces, municipalities and barangays
* Add test

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Credits

* [PSA Website](http://psa.gov.ph/)
* [darklight721/philippines](https://github.com/darklight721/philippines)

## License

The package is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
