# input defines a network of modules & a stream of input

input = """
module alpha reverse  
module beta delay
connect alpha beta
process hello world
"""

def read_all(list):
    lines = []
    for l in list:
        # remove whitespaces, tabs, and new lines at the beginning
        # and end of the line
        l = l.strip()

        # if the line is empty, we do not need it
        if l:
            lines.append(l)
    
    return lines

def parseInput(input):
    modules = {}
    connects = []
    process = []

    lines = input.split("\n")
    lines = read_all(lines)

    # 1st: read all modules
    for i, l in enumerate(lines):
        words = l.split(" ")
        if len(words) < 3:
            raise Exception("Line must have at least 3 words: " + l)

        verb = words[0]
        if verb == "module":
            _, name, option = words
            modules[name] = option
    # 2nd: wait until connect and in connect var
        if verb == "connect": 
            connects.extend(words[1:])
    # 3nd: wait until process and in process var
        if verb == "process": 
            # function call 
            process.extend(words[1:])
            # process => ["123123"]
            # words => ["adsf", "ssdfasdf"]
            # process => append => ["123123", ["asdf", "ssdsdf"]] 
            # process => extend => ["123123", "asdf", "ssdsdf"]

    print('modules', modules, 'connects',connects, 'process',process)


    # echo: output string is input string concat to itself 
    # reverse: output string is input string reverserd
    # delay: output string is previous input string, initial output is hello 
    # noop: input unchanged 
 


if __name__ == "__main__":
    print(parseInput(input))