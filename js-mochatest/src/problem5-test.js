let problem5 = require('./problem5.js');
let assert = require('chai').assert;

describe('problem5', () => {

    it('should return 8 for n=5',()=>{
        assert.equal(problem5(5),8); 
    })

    it('should return 0 for n=2', () => {
        assert.equal(problem5(2), 0);
    });

    it('should return 3 for n=3', () => {
        assert.equal(problem5(3), 3);
    });

});
