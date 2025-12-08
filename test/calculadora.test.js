import { expect } from 'chai';
import { Calculadora } from '../../src/calculadora.js';
import { describe, beforeEach, it } from 'mocha';

describe('Calculadora',() => {
    let cal;
    beforeEach(() => {
        cal = new Calculadora();
    });

    it('Funcion sumar 2 + 2 ', () => {
        expect(cal.suma(2, 2)).to.equal(4);
    });

    it('Funcion restar 4 - 2 ', () => {
        expect(cal.res(4, 2)).to.equal(2);
    });

})