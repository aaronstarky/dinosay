# dinosay
A command line utility for echoing with the help of a dinosaur

### Code
The code is written in TypeScript. It can be compiled to an executable using the Deno runtime. In case that is not possible, the exe is provided also.

### Using dinosay
To use dinosay from the .exe, download the executable and put it in a memorable location on your machine. Add the folder containing it to your PATH. Restart your terminal and type `dinosay hello world!`. Your dino will appear.

### Making changes
Making changes simply requires editing the TypeScript source file. To compile it to an executable, download the deno runtime (https://deno.com/), install it, and run `deno compile myPathToDinosaySource/dinosay.ts`. Your executable will be generated. Add this to your PATH or override the previous .exe with it. 
