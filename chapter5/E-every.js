function every(array, predicate) {
  for (const element of array) if (!predicate(element)) return false;
  return true;
}

function every2(array, predicate) {
  return !array.some((n) => !predicate(n))
}

console.log(every([2, 4, 6, 8], (n) => n % 2 == 0));
console.log(every([2, 4, 6, 8, 9], (n) => n % 2 == 0));

console.log(every2([2, 4, 6, 8], (n) => n % 2 == 0));
console.log(every2([2, 4, 6, 8, 9], (n) => n % 2 == 0));
