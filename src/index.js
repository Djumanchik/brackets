function check(str, bracketsConfig) {
  const bracketsConfigPair = bracketsConfig.reduce((acc, [open, close]) => { // разбивка входных данных на частный конфиг
    acc[close] = open;
    return acc;
  }, {});

  const stack =[];
  for (let i = 0; i < str.length; i++) { // счетчик строки для набивки стэка
    let currentBracket = str[i];

    const topBracket = stack.length && stack[stack.length - 1] || '';

    if (!topBracket) {
      stack.push(currentBracket); 
    } else if (bracketsConfigPair[currentBracket] === topBracket) { 
      stack.pop(); 
    } else {
      stack.push(currentBracket);
    }
  }

    return !stack.length; // даст true если стэк окажется в итоге пустым
}

module.exports = check;

