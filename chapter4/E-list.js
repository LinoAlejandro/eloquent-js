function arrayToList(array) {
  let rest;
  for (let c = array.length - 1; c >= 0; c--) {
    const element = array[c];
    rest = {
      value: element,
      rest,
    };
  }

  return rest;
}

function listToArray(list) {
  const array = [];
  for (let node = list; node; node = node.rest) array.push(node.value);
  return array;
}

function prepend(value, list) {
  return {
    value,
    rest: list,
  };
}

function nth(list, index) {
  if (!list) return;
  else if (index == 0) return list.value;
  else return nth(list.rest, index - 1);
}

let list = arrayToList([1, 2, 3, 4, 5, 6]);

console.log(list);
console.log(listToArray(list));

list = prepend(5, list);
console.log(list);
console.log(nth(list, 0));
