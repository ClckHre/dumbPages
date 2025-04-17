
function IndexBrackets(code) {
  cIndex = 0;
  out = [];
  indexCounter = 0;
  for (let i = 0; i < code.length; i++) {
    out.push("balls");
  }
  while (cIndex < code.length) {
    if (code[cIndex] === "[") {
      out[cIndex] = indexCounter;
      indexCounter += 1;
    }
    if (code[cIndex] === "]") {
      indexCounter += -1;
      out[cIndex] = indexCounter;
    }

    cIndex += 1;
  }

  return out;
}

function getPartner(code,a) {
    target = IndexBrackets(code)[a];

  if (code[a] != "[") {
    if (code[a] != "]") {
      return a
    }
  }

  if (code[a] === "[") {
    for (let i = 0; i < code.length - a; i++) {
      if (code[a + i] === "]") {
        if (IndexBrackets(code)[a + i] == target) {
          return (a + i);
        }
      }
    }
  }

  if (code[a] === "]") {
    for (let i = 0; i < a; i++) {
      if (code[a - i] === "[") {
        if (IndexBrackets(code)[a - i] === target) {
          return (a - i);
        }
      }
    }
  }
}

function fun(codestring) {
  code = Array.from(codestring)
  output = []
  for (i = 0; i < code.length; i++) {
    output.push(getPartner(code, i))
  }
  return output
}

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
          cIndex = getPartner(code, cIndex)
        }
      }

      if (code[cIndex] === "]") {
        if (array[aIndex] != 0) {
          cIndex = getPartner(code, cIndex)
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
