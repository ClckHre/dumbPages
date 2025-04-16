function interpret(codestring) {
  code = Array.from(codestring);
  array = [];
  amount = 20000;
  aIndex = 0;
  cIndex = 0;
  for (let i = 0; i < amount; i++) {
    array.push(0);
  while (cIndex < code.length) {
    
      if (code[cIndex] === "+") {
        array[aIndex] += 1
      }
    }
  }
  return array[aIndex]
}
