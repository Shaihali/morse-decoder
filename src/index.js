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
};

function decode(expr) {
    let splitString = expr.match(/.{1,10}/g)
    let splitStringToString = []
    let noZeros = [];
    let decoderArr = [];
    let resultStr = '';
  
    splitString.forEach(element => {
      splitStringToString.push(element.match(/.{1,2}/g))     
    });
    
    for(let i = 0; i < splitStringToString.length; i++){
      noZeros.push(splitStringToString[i].filter((item)=> item != 00))
    }
    
    noZeros.map((item) => {
      let noZerosElem = item.map((elem, i) => {
        if(elem === '10') {
          return item[i] = '.';
        }
        if(elem === '11') {
          return item[i] = '-';
        }
        if(elem === '**') {
          return item[i] = ' ';
        }
      })
      decoderArr.push(noZerosElem.join(''))
  
    })
    
    for(let val of decoderArr) {
      if(val !== '     '){
        resultStr += MORSE_TABLE[val]
      }else {
        resultStr += ' ';
      }
    }
    return resultStr
    
  }

module.exports = {
    decode
}