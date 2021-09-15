const list = [];

function remember(action) {
  list.push(action);
}

function rememberUrgently(action) {
  list.unshift(action);
}

function getTask() {
  return list.shift();
}

remember("buy milk");
remember("buy eggs");
remember("buy butter");
rememberUrgently("buy watter");

console.log(list);
console.log(getTask());
console.log(list);

console.log([1, 2, 3, 4, 3, 2, 1].indexOf(1));
console.log([1, 2, 3, 4, 3, 2, 1].lastIndexOf(1));

console.log([1, 2, 3, 4, 5].slice(2, 4));
console.log([1, 2, 3, 4, 5].slice(2));

function remove(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1));
}

console.log(remove([1, 2, 3, 4, 5, 6], 2));
