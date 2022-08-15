function prepend(numSpaces: number, inputString: string) {
  let str = "";
  for(let i = 0; i <= numSpaces; i++) {
    str = str + " ";
  }
  let paddedStr = str+inputString;
  return paddedStr;
}

let paddedStr = prepend(4,"DillyDilly");
console.log(paddedStr);