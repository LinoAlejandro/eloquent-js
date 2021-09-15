function range(init, end, step = 1) {
  let array = [];

  if (step > 0) {
    while (init <= end) {
      array.push(init);
      init += step;
    }
  } else {
    while (init >= end) {
      array.push(init);
      init += step;
    }
  }

  return array;
}

function sum(numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

console.log(sum(range(0, 10)));
console.log(range(0, 10, 2));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
