module.exports = function check(str, bracketsConfig) {
  const bracketsConfigOpen = ['(', '{', '[','|' , '1', '3', '5', '7', '8'];
  const bracketsConfigPair = {
    [')']: '(',
    ['}']: '{',
    ['[']: ']',
    ['|']: '|',
    ['1']: '2',
    ['3']: '4',
    ['5']: '6',
    ['7']: '7',
    ['8']: '8',
  };

  function isBracketsOk(str) {
    let stack =[];
    for (let i = 0; i < str.length; i++) {
      let currentBracket = str[i];
      if (bracketsConfigOpen.includes(currentBracket)) {
        stack.push(currentBracket);
      } else {
        if (stack.length === 0) {
          return false;
        }
        let topBracket = stack[stack.length - 1];
        if (bracketsConfigPair[currentBracket] === topBracket) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
    return stack.length === 0;
  }
  console.log('([{}])-', isBracketsOk('([{}])'));
  console.log('[(])-', isBracketsOk('[(])'));
  console.log('[]()-', isBracketsOk('[]()'));
}


 
