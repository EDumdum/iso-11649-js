'use strict';

const chai = require('chai');
const expect = chai.expect;

/** @namespace describe */
/** @namespace it */

const iso11649 = require('../src/iso-11649');

describe('iso-11649-generate', function() {
    it('Check inelligible input (null, undefined, not a string)', function() {
        expect(function() { 
            iso11649.generate(null); 
        }).to.throw('Expecting rawValue of type \'string\', found: \'null\'');
        expect(function() { 
            iso11649.generate(undefined); 
        }).to.throw('Expecting rawValue of type \'string\', found: \'undefined\'');
        expect(function() { 
            iso11649.generate([]); 
        }).to.throw('Expecting rawValue of type \'string\', found: \'object\'');
    });
    
    it('Check input format, excepted /^[A-Z0-9]{1,21}$/', function() {
        expect(function() {
            iso11649.generate('');
        }).to.throw('Invalid Creditor Reference format; expecting: \'/^[A-Z0-9]{1,21}$/\', found: \'\'');
        expect(function() {
            iso11649.generate('123a7892154fsgsddgs531564');
        }).to.throw('Invalid Creditor Reference format; expecting: \'/^[A-Z0-9]{1,21}$/\', found: \'123A7892154FSGSDDGS531564\'');
        expect(function() {
            iso11649.generate('-');
        }).to.throw('Invalid Creditor Reference format; expecting: \'/^[A-Z0-9]{1,21}$/\', found: \'\'');
    });

    it('Check return with elligible value', function() {
        expect(iso11649.generate('QGRZUS198EJH0')).eq('RF31QGRZUS198EJH0');
        expect(iso11649.generate('5')).eq('RF635');
        expect(iso11649.generate('TSIU4R3IX152UY9N2NM0')).eq('RF11TSIU4R3IX152UY9N2NM0');
        expect(iso11649.generate('7VBU23X')).eq('RF407VBU23X');
        expect(iso11649.generate('TU06FX')).eq('RF96TU06FX');
        expect(iso11649.generate('X2HU4TC28XTYLHASYWT91')).eq('RF14X2HU4TC28XTYLHASYWT91');
        expect(iso11649.generate('8KW')).eq('RF388KW');
        expect(iso11649.generate('MLTKKRQRN0M73')).eq('RF88MLTKKRQRN0M73');
        expect(iso11649.generate('6CFB42')).eq('RF126CFB42');
        expect(iso11649.generate('J16EHQX865GBGQLZJ')).eq('RF73J16EHQX865GBGQLZJ');
    });
});
