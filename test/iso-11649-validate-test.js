'use strict';

const chai = require('chai');
const expect = chai.expect;

/** @namespace describe */
/** @namespace it */

const iso11649 = require('../src/iso-11649');

describe('iso-11649-validate', function() {
    it('Check inelligible input (null, undefined, not a string)', function() {
        expect(function() { 
            iso11649.validate(null); 
        }).to.throw('Expecting rawValue of type \'string\', found: \'null\'');
        expect(function() { 
            iso11649.validate(undefined); 
        }).to.throw('Expecting rawValue of type \'string\', found: \'undefined\'');
        expect(function() { 
            iso11649.validate([]); 
        }).to.throw('Expecting rawValue of type \'string\', found: \'object\'');
    });
    
    it('Check input value format, excepted /^RF[0-9]{2}[A-Z0-9]{1,21}$/', function() {
        expect(function() {
            iso11649.validate('');
        }).to.throw('Invalid Creditor Reference format; expecting: \'/^RF[0-9]{2}[A-Z0-9]{1,21}$/\', found: \'\'');
        expect(function() {
            iso11649.validate('123a');
        }).to.throw('Invalid Creditor Reference format; expecting: \'/^RF[0-9]{2}[A-Z0-9]{1,21}$/\', found: \'123A\'');
        expect(function() {
            iso11649.validate('AA1234567897898461286321456256253212');
        }).to.throw('Invalid Creditor Reference format; expecting: \'/^RF[0-9]{2}[A-Z0-9]{1,21}$/\', found: \'AA1234567897898461286321456256253212\'');
    });

    it('Check return with elligible value', function() {
        // True
        expect(iso11649.validate('RF71MNBSAR')).eq(true);
        expect(iso11649.validate('RF42HIH7VLQK')).eq(true);
        expect(iso11649.validate('RF73N8YHPAE0WKQ6769ECVXD6')).eq(true);
        expect(iso11649.validate('RF494WP0T08')).eq(true);
        expect(iso11649.validate('RF720HYA6')).eq(true);

        // False
        expect(iso11649.validate('RF19GAX8WS5JYOOUJ87')).eq(false);
        expect(iso11649.validate('RF025TUR59R9DZS90U5IUK0')).eq(false);
        expect(iso11649.validate('RF73E611E8A65QKYLG7YC')).eq(false);
        expect(iso11649.validate('RF15S2IN0K4NS')).eq(false);
        expect(iso11649.validate('RF83YUA1K1')).eq(false);
    });
});
