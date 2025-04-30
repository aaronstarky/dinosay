function getFlags(args: string[]) {
    const flags = {
        deno: false,
        trex: false,
        help: false,
        version: false,
    };
    if (args.length == 0) {
        flags.help = true;
    }
    for (let i = 0; i < args.length; i++) {
        if (args[i] == "--help" || args[i] == "-h") {
            flags.help = true;
        } else if (args[i] == "--version" || args[i] == "-v") {
            flags.version = true;
        } else if (args[i] == "--deno" || args[i] == "-d") {
            flags.deno = true;
        } else if (args[i] == "--trex" || args[i] == "-t") {
            flags.trex = true;
        }
    }
    return flags;
}

function removeFlags(args: string[]) {
    const newArgs: string[] = [];
    for (let i = 0; i < args.length; i++) {
        if (args[i] != "--help" && args[i] != "-h" && args[i] != "--version" && args[i] != "-v" && args[i] != "--deno" && args[i] != "-d" && args[i] != "--trex" && args[i] != "-t") {
            newArgs.push(args[i]);
        }
    }
    return newArgs;
}


function lineLongerThanBestSoFar(len: number) {
    if (len > maxWidthSeen)
        maxWidthSeen = len;
}

const flags = getFlags(Deno.args);
if (flags.help) {
    console.log("Usage: dinosay [options] [text]");
    console.log("Options:");
    console.log("  -h, --help     Show this help message");
    console.log("  -v, --version  Show version information");
    console.log("  -d, --deno     Use the Deno dinosaur");
    console.log("  -t, --trex     Use the T-Rex dinosaur");
    Deno.exit(0);
}
if (flags.version) {
    console.log("dinosay v1.0.0");
    Deno.exit(0);
}

const args = removeFlags(Deno.args);


const MAX_WIDTH = 30;
let maxWidthSeen = 0;
let lines: string[] = [];
let index = 0;
let line = "";

while (index < args.length) {
    if (line.length + args[index].length > MAX_WIDTH) {
        lines.push(line)
        lineLongerThanBestSoFar(line.length);
        line = ""
    }
    line += " " + args[index]
    if (index == args.length - 1) {
        lines.push(line)
    }
    lineLongerThanBestSoFar(line.length);
    index++;
}

let bubble = "        __"
for (let i = 0; i < maxWidthSeen; i++) {
    bubble += "_";
}
bubble += "\n       /  "
for (let i = 0; i < maxWidthSeen; i++) {
    bubble += " "
}
bubble += "\\";

// Actually print the text
for (const line of lines) {
    bubble += "\n"
    bubble += "      |  "
    bubble += line
    if (line.length != maxWidthSeen) {
        const difference = maxWidthSeen - line.length;
        for (let i = 0; i < difference; i++) {
            bubble += " ";
        }
    }
    bubble += "  |"
}

// Close the bubble
bubble += "\n       \\  "
for (let i = 0; i < maxWidthSeen; i++) {
    bubble += "_";
}
bubble += "/"


const trex = `
        \\/
            ___________
           /' O   O    \\
           \\            \\
            \`^^^^^\\      \\                          ___
                  /       \\                        {_  \\
             /^^^^^        \\                         \\  |
             \\_____         \\                         | |
                    \\        \\_________            __/ /
                     |         ___     -----_____--   /
                   >-|        /   \\           _____--\`
                    >-\\      (     ) _____-----
                       \\______\\    \\-
                           \\   \\    \\
                            \\   \\    \\
                            /   /    /
                          _/  _/    /
                         /___/_____/
			`
const deno = `
        \\/
       __
      / •) 
     /  /    ____
     \\  \\_-\`\`    \`\`-_     
      \\              \`-_  ,
       \`-,_   ___  ___--\`\`
          ||_|  ||_|                
`
let final = bubble;
if (flags.deno) {
    final += deno;
} else {
    final += trex;
}
console.log(final)
