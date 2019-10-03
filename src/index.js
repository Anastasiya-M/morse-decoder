const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '': ' '
};

function decode(expr) {
    let bufferArray = [];
    let i = 0;
    while(i < expr.length) {
        bufferArray.push("" + Number(expr.substr(i, 10)));
        i += 10;
    }

    let stringArray = bufferArray.map(function(item) {
        let resultString = '';
        for(let i = 0; i < item.length; i += 2) {
            if(item[i] == 1 && item[i + 1] == 0) resultString += '.';
            if(item[i] == 1 && item[i + 1] == 1) resultString += '-';
        }
        
        return resultString;
    });

    let finalArray = stringArray.map(function(item) {
        return MORSE_TABLE[item];
    });

    return finalArray.join('');
}

module.exports = {
    decode
}
