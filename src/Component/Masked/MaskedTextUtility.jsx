export function getAllCharacters(text, usedLetters) {
    // This function will return a string with all the characters of the word that have been guessed so far
    usedLetters = usedLetters.map(letter => letter.toUpperCase()); // ['b', 'e'] -> ['B', 'E']
    const guessedLetters = new Set(usedLetters); // {'B', 'E'}
    const characters = text.toUpperCase().split('').map(char => {
        if (guessedLetters.has(char) && char!=' ') {
            return char;
        }
       else if(char ==' ')
             return ' '
            else
        return '_';
    }); // ['_', '_', '_', 'B', '_', 'E']
    return characters.join(''); // ___B_E
}

