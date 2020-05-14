interface Operation {
    process(value: string): string
}

class DelayOperation implements Operation {

    private lastState: string = "hello";

    process(value: string): string {
        const result = this.lastState;
        this.lastState = value;
        return result;
    }
}

class EchoOperation implements Operation {

    process(value: string): string {
        if (value == null) {
            return null;
        }
        return value + value;
    }

}

class ReverseOperation implements Operation {

    process(value: string): string {
        if (value == null) {
            return null;
        }
        return value.split("").reverse().join("");
    }

}

class IdentityOperation implements Operation {

    process(value: string): string {
        return value;
    }

}

class Connection {

    value: string = null;

}

class Module {

    private operation: Operation;

    inputs: Connection[] = [];

    outputs: Connection[] = [];

    public constructor(operation: Operation) {
        this.operation = operation;
    }

    process() {
        let summedInput = null;
        // only some inputs if they are not null.
        if (!this.inputs.every((input) => input.value == null)) {
           summedInput = this.inputs.map((input) => {
               return input.value == null ? "" : input.value;
            }).join("");
        }

        // clear inputs
        this.inputs.forEach((input) => {
            input.value = null;
        });

        // apply operation
        const transformedInput = this.operation.process(summedInput);

        // fill outputs
        this.outputs.forEach((output) => {
            output.value = transformedInput;
        });
    }

}

class App {

    private orderedModules: Module[] = [];

    private modulesByName: {} = {};

    processCommandLine(command: string) {
        const commandParts = command.split(" ");

        switch (commandParts[0]){
            case 'module':
              this.addModule(commandParts[1], commandParts[2])
              break;
      
            case 'connect':
              this.addConnection(commandParts[1], commandParts[2])
              break;
      
            case 'process':
              this.process(commandParts.slice(1));
              break;
            }
        ;
    }
    addModule(name: string, operation: string) {
        if (this.modulesByName[name] != null) {
            // catch so we don't have inconsistent state
            throw `Module ${name} already exists`;
        }

        const module = new Module(this.createOperation(operation));

        this.orderedModules.push(module);
        this.modulesByName[name] = module;
    }

    addConnection(input: string, output: string) {
        const inputModule = this.modulesByName[input];
        if (inputModule == null) {
            throw `Input module ${input} does not exist`;
        }

        const outputModule = this.modulesByName[output];
        if (outputModule == null) {
            throw `Output module ${output} does not exist`;
        }

        const connection = new Connection();

        inputModule.outputs.push(connection);
        outputModule.inputs.push(connection);
    }

    process(values: string[]) {
        if (this.orderedModules.length === 0) {
            throw `no network defined`;
        }

        const tempInputConnection = new Connection();
        const tempOutputConnection = new Connection();

        const firstModuleInputs = this.orderedModules[0].inputs;
        const lastModuleOutputs =  this.orderedModules[this.orderedModules.length - 1].outputs;

        firstModuleInputs.push(tempInputConnection);
        lastModuleOutputs.push(tempOutputConnection);

        let result = [];
        values.forEach((value) => {
            tempInputConnection.value = value;
            tempOutputConnection.value = null;

            this.orderedModules.forEach((module) => {
                module.process();
            });

            result.push(tempOutputConnection.value);
        });

        // push in nulls until null comes out to account for delays (let network
        // run empty)
        do {
            // clear output
            tempOutputConnection.value = null;

            this.orderedModules.forEach((module) => {
                module.process();
            });

            if (tempOutputConnection.value != null) {
                result.push(tempOutputConnection.value);         
            }
        } while (tempOutputConnection.value != null)

        console.log(result.join(' '));

        firstModuleInputs.pop();
        lastModuleOutputs.pop();
        
    }

    createOperation(operation: String): Operation {
        switch (operation){
            case 'echo':
              return new EchoOperation();
            case 'delay':
              return new DelayOperation();
            case 'reverse':
              return new ReverseOperation();
            case 'noop': 
              return new IdentityOperation();
          }
    }

}

const app =  new App();

var input = `module beta echo
module alpha reverse
connect beta alpha 
process Hello world 
process foo bar`;

let secondInput = `module beta echo
module alpha delay
connect beta alpha 
process Hello world 
process foo bar
process Happy Friday`;

let thirdInput = `
module beta echo
    module alpha reverse
    connect beta alpha 
    process Hello world 
    process foo bar
    process frankfurt AmMain`

export function fireProcess(sinput){
    sinput.split("\n").forEach((value: string) => {
        app.processCommandLine(value);
    });
}

console.log(fireProcess(thirdInput));


