function reverseArray(array) {
  let reverse = [];

  for (let c = array.length - 1; c >= 0; c--) reverse.push(array[c]);

  return reverse;
}

function reverseInPlace(array) {
  for (let c = 0; c < Math.floor(array.length / 2); c++) {
    const old = array[c];
    array[c] = array[array.length - 1 - c];
    array[array.length - 1 - c] = old;
  }
}

console.log(reverseArray([1, 2, 3, 4, 5]));
let array = [9, 8, 7, 6, 5];
reverseInPlace(array);
console.log(array);
