function max(...numbers) {
  let result = -Infinity;
  for (const number of numbers) if (number > result) result = number;
  return result;
}

let numbers = [1, 2, 6, 5, 4, 3];

console.log(max(...numbers));
