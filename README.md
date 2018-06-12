[![npm version](https://badge.fury.io/js/iso-11649.svg)](https://badge.fury.io/js/iso-11649)
[![Build Status](https://travis-ci.org/EDumdum/iso-11649-js.svg?branch=master)](https://travis-ci.org/EDumdum/iso-11649-js)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/Edumdum/iban-js/master/LICENSE)

# iso-11649

[European Structured Communication](https://en.wikipedia.org/wiki/Creditor_Reference) validation and conversion following [ISO 11649](https://wiki.xmldation.com/General_Information/ISO11649_-_Creditor_Reference).

## Installation

Install using [npm](http://npmjs.org/):

```bash
$ npm install iso-11649
```

## Usage

### In node.js

```js
var ISO11649 = require('iso-11649');

ISO11649.generate('TU06FX'); // RF96TU06FX
ISO11649.generate('X2HU4TC28XTYLHASYWT91'); // RF14X2HU4TC28XTYLHASYWT91

ISO11649.validate('RF720HYA6'); // true
ISO11649.validate('RF19GAX8WS5JYOOUJ87'); // false
```

## API 

### `generate(rawValue: String)` -> `String`

Check requirements.  
Returns value as a valid Creditor Reference using rawValue.

*Required*
- rawValue must be not `Null`
- rawValue must be of type `String`
- rawValue must respect format `^[A-Z0-9]{1,21}$`

### `validate(rawValue: String)` -> `Boolean`

Check requirements.  
Returns if the Creditor Reference format against ISO 11649 specifications is valid.

*Required*
- rawValue must be not `Null`
- rawValue must be of type `String`
- rawValue must respect format `^RF[0-9]{2}[A-Z0-9]{1,21}$`
