const expect = require('chai').expect;
const myapp = require(".");

describe('Testing calcImmoInvestment function, should return the correct values in the object "details" ', () => {
	it('Should Return correct values', () => {    
          let expectedObject = {
            zinsen: 3200,
            

          }
         	expect(myapp.calcImmoInvestment(100000, 50000, 7, 1000)).to.equal(expectedObject);
	});
});