#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>

struct Flags {
    bool deno = false;
    bool trex = false;
    bool help = false;
    bool version = false;
};

Flags getFlags(const std::vector<std::string>& args) {
    Flags flags;
    if (args.empty()) {
        flags.help = true;
    }
    for (const std::string& arg : args) {
        if (arg == "--help" || arg == "-h") {
            flags.help = true;
        } else if (arg == "--version" || arg == "-v") {
            flags.version = true;
        } else if (arg == "--deno" || arg == "-d") {
            flags.deno = true;
        } else if (arg == "--trex" || arg == "-t") {
            flags.trex = true;
        }
    }
    return flags;
}

std::vector<std::string> removeFlags(const std::vector<std::string>& args) {
    std::vector<std::string> newArgs;
    for (const std::string& arg : args) {
        if (arg != "--help" && arg != "-h" && arg != "--version" && arg != "-v" && arg != "--deno" && arg != "-d" && arg != "--trex" && arg != "-t") {
            newArgs.push_back(arg);
        }
    }
    return newArgs;
}

int maxWidthSeen = 0;

void lineLongerThanBestSoFar(int len) {
    if (len > maxWidthSeen) {
        maxWidthSeen = len;
    }
}

int main(int argc, char* argv[]) {
    std::vector<std::string> args(argv + 1, argv + argc);
    Flags flags = getFlags(args);

    if (flags.help) {
        std::cout << "Usage: dinosay [options] [text]" << std::endl;
        std::cout << "Options:" << std::endl;
        std::cout << "  -h, --help     Show this help message" << std::endl;
        std::cout << "  -v, --version  Show version information" << std::endl;
        std::cout << "  -d, --deno     Use the Deno dinosaur" << std::endl;
        std::cout << "  -t, --trex     Use the T-Rex dinosaur" << std::endl;
        return 0;
    }
    if (flags.version) {
        std::cout << "dinosay v1.0.0" << std::endl;
        return 0;
    }

    std::vector<std::string> textArgs = removeFlags(args);

    const int MAX_WIDTH = 30;
    std::vector<std::string> lines;
    int index = 0;
    std::string line = "";

    while (index < textArgs.size()) {
        if (line.length() + textArgs[index].length() + (line.empty() ? 0 : 1) > MAX_WIDTH) {
            lines.push_back(line);
            lineLongerThanBestSoFar(line.length());
            line = "";
        }
        if (!line.empty()) {
            line += " ";
        }
        line += textArgs[index];
        if (index == textArgs.size() - 1) {
            lines.push_back(line);
        }
        lineLongerThanBestSoFar(line.length());
        index++;
    }

    std::string bubble = "          __";
    for (int i = 0; i < maxWidthSeen; ++i) {
        bubble += "_";
    }
    bubble += "\n         /  ";
    for (int i = 0; i < maxWidthSeen; ++i) {
        bubble += " ";
    }
    bubble += "\\";

    for (const std::string& currentLine : lines) {
        bubble += "\n        |  ";
        bubble += currentLine;
        if (currentLine.length() != maxWidthSeen) {
            int difference = maxWidthSeen - currentLine.length();
            for (int i = 0; i < difference; ++i) {
                bubble += " ";
            }
        }
        bubble += "  |";
    }

    bubble += "\n         \\__";
    for (int i = 0; i < maxWidthSeen; ++i) {
        bubble += "_";
    }
    bubble += "/";

    const std::string trex = R"(
            \/
            ___________
           /' O   O    \
           \            \
            `^^^^^^\     \
                   /      \                       <==~,
             /^^^^^        \                         \ \
             \______        \                         | |
                    \        \_________              /  |
                     |         ____    ``----_____--`  /
                   >-|        /    \           _____--` 
                    >-\      (      )______-----
                       \______\     \
                           \   \     \
                            \   \     \
                            /   /     /
                          _/  _/     /
                         /___/______/
)";
    const std::string deno = R"(
            \/
       __
      / •) 
     /  /    ____
     \  \_-``    ``-_     
      \              `-_  ,
       `-,_   ___  ___--``
          ||_|  ||_|  
)";

    std::string final = bubble;
    if (flags.deno) {
        final += deno;
    } else {
        final += trex;
    }
    std::cout << final << std::endl;

    return 0;
}