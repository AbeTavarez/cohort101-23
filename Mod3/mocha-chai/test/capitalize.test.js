const capitalize = require('../functions/capitalize');

const chai = require('chai');
const expect = chai.expect;



describe("Tests for Capitalize function", () => {


    it('capitalize should be a function', () => {
        expect(capitalize).to.be.a('function');
    });


    it('capitalize should return a string if no arg is pass', () => {
        expect(capitalize()).to.be.a('string');
    });

    it('capitalize should return a string if arg is an empty string', () => {
        expect(capitalize('')).to.equal('');
    });

    it('hello should be Hello', () => {
        expect(capitalize('hello')).to.equal('Hello');
    });

    it('should throw an error if arg is not a string', () => {
        expect(() => capitalize(123)).to.throw();
    });

    it('should throw an TypeError if arg is not a string', () => {
        expect(() => capitalize(123)).to.throw(TypeError);
    });





});