var DelayOperation = /** @class */ (function () {
    function DelayOperation() {
        this.lastState = "hello";
    }
    DelayOperation.prototype.process = function (value) {
        var result = this.lastState;
        this.lastState = value;
        return result;
    };
    return DelayOperation;
}());
var EchoOperation = /** @class */ (function () {
    function EchoOperation() {
    }
    EchoOperation.prototype.process = function (value) {
        if (value == null) {
            return null;
        }
        return value + value;
    };
    return EchoOperation;
}());
var ReverseOperation = /** @class */ (function () {
    function ReverseOperation() {
    }
    ReverseOperation.prototype.process = function (value) {
        if (value == null) {
            return null;
        }
        return value.split("").reverse().join("");
    };
    return ReverseOperation;
}());
var IdentityOperation = /** @class */ (function () {
    function IdentityOperation() {
    }
    IdentityOperation.prototype.process = function (value) {
        return value;
    };
    return IdentityOperation;
}());
var Connection = /** @class */ (function () {
    function Connection() {
        this.value = null;
    }
    return Connection;
}());
var Module = /** @class */ (function () {
    function Module(operation) {
        this.inputs = [];
        this.outputs = [];
        this.operation = operation;
    }
    Module.prototype.process = function () {
        var summedInput = null;
        // only some inputs if they are not null.
        if (!this.inputs.every(function (input) { return input.value == null; })) {
            summedInput = this.inputs.map(function (input) {
                return input.value == null ? "" : input.value;
            }).join("");
        }
        // clear inputs
        this.inputs.forEach(function (input) {
            input.value = null;
        });
        // apply operation
        var transformedInput = this.operation.process(summedInput);
        // fill outputs
        this.outputs.forEach(function (output) {
            output.value = transformedInput;
        });
    };
    return Module;
}());
var App = /** @class */ (function () {
    function App() {
        this.orderedModules = [];
        this.modulesByName = {};
    }
    App.prototype.processCommandLine = function (command) {
        var commandParts = command.split(" ");
        switch (commandParts[0]) {
            case 'module':
                this.addModule(commandParts[1], commandParts[2]);
                break;
            case 'connect':
                this.addConnection(commandParts[1], commandParts[2]);
                break;
            case 'process':
                this.process(commandParts.slice(1));
                break;
        }
        ;
    };
    App.prototype.addModule = function (name, operation) {
        if (this.modulesByName[name] != null) {
            // catch so we don't have inconsistent state
            throw "Module " + name + " already exists";
        }
        var module = new Module(this.createOperation(operation));
        this.orderedModules.push(module);
        this.modulesByName[name] = module;
    };
    App.prototype.addConnection = function (input, output) {
        var inputModule = this.modulesByName[input];
        if (inputModule == null) {
            throw "Input module " + input + " does not exist";
        }
        var outputModule = this.modulesByName[output];
        if (outputModule == null) {
            throw "Output module " + output + " does not exist";
        }
        var connection = new Connection();
        inputModule.outputs.push(connection);
        outputModule.inputs.push(connection);
    };
    App.prototype.process = function (values) {
        var _this = this;
        if (this.orderedModules.length === 0) {
            throw "no network defined";
        }
        var tempInputConnection = new Connection();
        var tempOutputConnection = new Connection();
        var firstModuleInputs = this.orderedModules[0].inputs;
        var lastModuleOutputs = this.orderedModules[this.orderedModules.length - 1].outputs;
        firstModuleInputs.push(tempInputConnection);
        lastModuleOutputs.push(tempOutputConnection);
        var result = [];
        values.forEach(function (value) {
            tempInputConnection.value = value;
            tempOutputConnection.value = null;
            _this.orderedModules.forEach(function (module) {
                module.process();
            });
            result.push(tempOutputConnection.value);
        });
        // push in nulls until null comes out to account for delays (let network
        // run empty)
        do {
            // clear output
            tempOutputConnection.value = null;
            this.orderedModules.forEach(function (module) {
                module.process();
            });
            if (tempOutputConnection.value != null) {
                result.push(tempOutputConnection.value);
            }
        } while (tempOutputConnection.value != null);
        console.log(result.join(" "));
        firstModuleInputs.pop();
        lastModuleOutputs.pop();
    };
    App.prototype.createOperation = function (operation) {
        switch (operation) {
            case 'echo':
                return new EchoOperation();
            case 'delay':
                return new DelayOperation();
            case 'reverse':
                return new ReverseOperation();
            case 'noop':
                return new IdentityOperation();
        }
    };
    return App;
}());
var app = new App();
var input = "\nmodule beta echo\n    module alpha reverse\n    connect beta alpha \n    process Hello world \n    process foo bar";
function fireProcess(sinput) {
    sinput.split("\n").forEach(function (value) {
        return app.processCommandLine(value);
    });
}
console.log(fireProcess(input));
