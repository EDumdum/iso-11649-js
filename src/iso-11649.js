'use strict';

var iso7064 = require('iso-7064');

const FORMAT_RF = /^RF[0-9]{2}[A-Z0-9]{1,21}$/;
const FORMAT_RF_BODY = /^[A-Z0-9]{1,21}$/;
const FORMAT_RF_HEAD = 'RF';

var iso11649 = {
    /**
     * Check requirements.
     * Returns value as a valid Creditor Reference using rawValue.
     * 
     * Requirements:
     * - rawValue must be not `Null`
     * - rawValue must be of type `String`
     * - rawValue must respect format `^[A-Z0-9]{1,21}$`
     * 
     * @param {*} rawValue 
     */
    generate(rawValue) {
        const value = stringifyInput(rawValue);

        if (!value.match(FORMAT_RF_BODY)) {
            throw new Error('Invalid Creditor Reference format; expecting: \'' + FORMAT_RF_BODY + '\', found: \'' + value + '\'');
        }

        return FORMAT_RF_HEAD + ('0' + (98 - iso7064.computeWithoutCheck(value + FORMAT_RF_HEAD + '00'))).slice(-2) + value;
    },

    /**
     * Check requirements.
     * Returns if the Creditor Reference format against ISO 11649 specifications is valid.
     * 
     * Requirements:
     * - rawValue must be not `Null`
     * - rawValue must be of type `String`
     * - rawValue must respect format `^RF[0-9]{2}[A-Z0-9]{1,21}$`
     * 
     * @param {*} rawValue 
     */
    validate(rawValue) {
        const value = stringifyInput(rawValue);

        if (!value.match(FORMAT_RF)) {
            throw new Error('Invalid Creditor Reference format; expecting: \'' + FORMAT_RF + '\', found: \'' + value + '\'');
        }

        return iso7064.computeWithoutCheck(value.substring(4, value.length) + value.substring(0, 4)) === 1;
    }
};

function stringifyInput(rawValue, valueName = 'rawValue') {
    if (rawValue !== null && rawValue !== undefined) {
        switch(typeof rawValue) {
        case 'string':
            return rawValue.toUpperCase().replace(/[^0-9A-Z]/g, '');
        default:
            throw new Error('Expecting ' + valueName + ' of type \'string\', found: \'' + (typeof rawValue) + '\'');
        }
    }

    throw new Error('Expecting ' + valueName + ' of type \'string\', found: \'' + rawValue + '\'');
}

module.exports = iso11649;