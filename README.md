# dinosay
A command line utility for echoing with the help of a dinosaur

## Code
The code was originally written in TypeScript for use with the Deno runtime but has been ported to C++ to shrink the size of the executable.

## Using dinosay
To use dinosay:
1. Download dinosay.exe
2. Place the .exe somewhere safe
3. Add the path to the .exe to your PATH environment variable
4. Restart your terminal
5. type `dinosay hello world!` or `dinosay -d hello world!`
 
## Making changes
To make changes to the code, download and modify `dinosay.cpp`.

## Options
- `--help` will display how the executable is to be used
- `--version` will display the version information
- `-t` or `--trex` will echo your text in the trex format (this is the default)
- `-d` or `--deno` will echo your text in the deno dinosaur format
