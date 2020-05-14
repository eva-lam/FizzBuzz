const {run} = require('../modular.js');
const assert = require('chai').assert;
// import * as madness from "../modular-madness.js";

describe('modular-madness-unit-test', () => {

    function testRun(input, expectedOutput) {
        it(`${input} should produce "${expectedOutput}"`, () => {
            assert.equal(run(input), expectedOutput);
        });
    }

    testRun(
        `module alpha reverse
    module beta delay
    connect alpha beta 
    process hello world`, 
    'hello dlrow olleh');

    testRun(
        `module beta echo
    module alpha reverse
    connect beta alpha 
    process Hello world 
    process foo bar`, 
    'olleHolleH dlrowdlrow oofoof rabrab');
    

    testRun(
        `module alpha noop
    module delta echo
    connect alpha delta
    process eva hello`, 
    'evaeva hellohello');
  
});
