
// const args = ["hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello"]

const args = Deno.args;

const MAX_WIDTH = 30;
let maxWidthSeen = 0;
let lines: string[] = [];
let index = 0;
let line = "";

function lineLongerThanBestSoFar(len: number) {
    if (len > maxWidthSeen)
        maxWidthSeen = len;
}


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


const dino2 = `
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
const final = bubble + dino2;
console.log(final)
