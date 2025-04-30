# dinosay
A command line utility for echoing with the help of a dinosaur

## Code
The code is written in TypeScript. It can be compiled to an executable using the Deno runtime.

## Using dinosay
To use dinosay:
1. Download the `dinosay.ts` source file.
2. Download  and install (if you don't already have it) the Deno JS/TS runtime (https://deno.com/)
3. Use the `deno compile myPath/dinosay.ts` command to create the executable
4. Add the path to the folder containing your `dinosay.exe` to your PATH (system environment variables)
5. Restart your terminal
6. Type `dinosay hello world!` into your terminal
 
## Making changes
Making changes simply requires editing the TypeScript source file. To compile it to an executable, download the deno runtime (https://deno.com/), install it, and run `deno compile myPathToDinosaySource/dinosay.ts`. Your executable will be generated. Add this to your PATH or override the previous .exe with it. 

## Options
- `--help` will display how the executable is to be used
- `--version` will display the version information
- `-t` or `--trex` will echo your text in the trex format (this is the default)
- `-d` or `--deno` will echo your text in the deno dinosaur format
