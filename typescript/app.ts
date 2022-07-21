let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'max'

if (typeof userInput === 'string') {
    userName = userInput;
}

function generateError(message: string, code: number) {
  throw { message: message, errorCode: code };
}

generateError('An error ocurred', 500)



//? tsc <name of file> -watch     on this way typescript will be compiling everytime
//** tsc --init  for make the tsconfig.json and */
//** Then put just "tsc" and "tsc --w" that will compile all the files of TypeScript at the same time*/

/**
 * You can exclude some files from the compilation adding
 * },
 * ]
    "exclude":
    "name_of_the_file_or_files.ts"
 * ]
 *   You can include some files from the compilation adding   
 * ],
 *   "include": [
 *     "name_of_the_file_or_files.ts"
 * ]
 */