function countChar(phrase, char) {
  let total = 0;
  for (let c = 0; c < phrase.length; c++) {
    if (phrase[c] === char) total++;
  }
  return total;
}

console.log(countChar("this is a phrase", "i"))
