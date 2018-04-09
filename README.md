# Philippine Standard Geographic Code (PSGC)

Provides PSGC (Philippine Standard Geographic Code) data for your application.

## Installation

PSGC is available via npm.

    $ npm install --save pgsc

Or you can use yarn.

    $ yarn add pgsc

## Usage

Import psgc into your app.

~~~ js
import { regions, provinces, municipalities } from 'pgsc';
~~~

Use `all` or `find` function to get the data you need.

~~~ js
regions.all()                         // To get all regions
regions.find('Ilocos Region')         // Just past region name to get specific region

provinces.all()
provinces.find('La Union')

municipalities.all()
municipalities.find('Agoo')
~~~

## TODO

* Add barangays
* Add additional information about regions, provinces and municipalities
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
