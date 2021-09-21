let total = 0,
  count = 1;

while (count <= 10) {
  total += count;
  count++;
}

console.log(total);

function sum(numbers) {
  let total = 0;
  for (const number of numbers) total += number;
  return total;
}

function range(init, end, step = 1) {
  let list = []
  
  while(init <= end) {
    list.push(init)
    init += step
  }

  return list
}

console.log(sum(range(1,10)))
