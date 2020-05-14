const assert = require('chai').assert;
const fireProcess = require('../modular-madness.ts').fireProcess;

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

describe('modular-madness-typescript-unit-test', () => {
    it('process multiple line',()=>{
        //return = 8 when input is 5 
        assert.equal(fireProcess(input1),'olleholleh dlrowdlrow oofoof rabrab'); 
    })

    it(`process single line`, () => {
        assert.equal(fireProcess(input2), 'hello dlrow olleh');
    });

    it('single line with long string', () => {
        assert.equal(fireProcess(input3), 'Hello Today is Friday and everyday is a good day as long as you are happy');
    });

    it('When combining two same functions', () => {
        assert.equal(fireProcess(input4), 'Hello Thursday fun Thursday fun Friday bee');
    });

    it('When connect order not in accordance to module order', () => {
        assert.equal(fireProcess(input5), 'raef dnoyeb epoh');
    });

});

