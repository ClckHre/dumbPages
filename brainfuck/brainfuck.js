function interpret(codestring) {
  code = Array.from(codestring);
  array = [];
  amount = 20000;
  aIndex = 0;
  cIndex = 0;
  output = []
  for (let i = 0; i < amount; i++) {
    array.push(0);
  }
  while (cIndex < code.length) {
    
      if (code[cIndex] === "+") {
        array[aIndex] += 1;
      }
      if (code[cIndex] === "-") {
        array[aIndex] += -1;
      }
      if (code[cIndex] === ">") {
        aIndex += 1;
      }
      if (code[cIndex] === "<") {
        aIndex += -1;
      }

      if (code[cIndex] === "[") {
        if (array[aIndex] === 0) {
          for (let n = 0; n < code.length - cIndex - 1; n++) {
            if (code[cIndex + n] === "]") {
              cIndex += n + 1
            }
          }
        }
      }

      if (code[cIndex] === "]") {
        if (array[aIndex] != 0) {
          for (let n = 0; n < cIndex; n++) {
            if (code[n] === "[") {
              cIndex = n;
            }
          }
        }
      }
      
      if (code[cIndex] === ".") {
        output.push(array[aIndex]);
      }

      if (aIndex < 0) {
        aIndex = amount - 1;
      }
      if (aIndex > amount - 1) {
        aIndex = 0;
      }

      if (array[aIndex] < 0) {
        array[aIndex] = 255;
      }
      if (array[aIndex] > 255) {
        array[aIndex] = 0;
      }

      cIndex += 1
    }

  return output
  }
