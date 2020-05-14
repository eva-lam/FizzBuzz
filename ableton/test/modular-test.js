const {run,categorize, analyze} = require('../modular.js');
const assert = require('chai').assert;
// import * as madness from "../modular-madness.js";

describe('modular-madness-unit-test', () => {

    function testRun(input, expectedOutput) {
        it(`${input} should produce "${expectedOutput}"`, () => {
            assert.equal(run(input), expectedOutput);
        });
    }

    let input1 = `
    module beta echo
    module alpha reverse
    connect beta alpha 
    process hello world
    process foo bar`

    let input2 = `
    module alpha reverse
    module beta delay
    connect alpha beta 
    process Hello world`

    let input3 = `
    module deltaa noop
    module zulu delay
    connect delta zulu
    process today is Friday and everyday is a good day as long as you are happy`

    let input4 = `
    module alpha delay 
    module beta delay
    connect alpha beta
    process Thursday fun
    process Friday beer`

    let input5 = `
    module alpha reverse
    module delta noop
    connect delta alpha
    process hope beyond fear`


    testRun(input1, 'olleholleh dlrowdlrow oofoof rabrab');
    testRun(input2, 'hello dlrow olleh');
    testRun(input3, 'Hello Today is Friday and everyday is a good day as long as you are happy');
    testRun(input4, 'Hello Thursday fun Thursday fun Friday beer'); 
    testRun(input5, 'raef dnoyeb epoh')
    
});



// let category1 = [
//     { alpha: 'reverse', beta: 'delay' },
//     [ 'alpha', 'beta' ],
//     [ 'hello world' ]
// ]

// let category2 = [
//     { beta: 'echo', alpha: 'reverse' },
//     [ 'beta', 'alpha' ],
//     [ 'Hello world', 'foo bar' ]
// ]

// let category3 = [
//   { alpha: 'noop', delta: 'echo' },
//   [ 'alpha', 'delta' ],
//   [ 'eva hello' ]
// ]

// it("category1 should work correctly", () => {
//     assert.deepEqual(categorize(input1), category1)
// })

// it("analyze1 should work correctly", () => {
//     assert.equal(analyze(category1), 'hello dlrow olleh'); 
// })

// it("category2 should work correctly", () => {
//     assert.deepEqual(categorize(input2), category2)
// })

// it("analyze2 should work correctly", () => {
//     assert.equal(analyze(category2), 'olleHolleH dlrowdlrow oofoof rabrab'); 
// })

//it("category3 should work correctly", () => {
//     assert.deepEqual(categorize(input3), category3)
// })

// it("analyze3 should work correctly", () => {
//     assert.equal(analyze(category3), 'evaeva hellohello'); 
// })
