function flatten(arrays) {
  return arrays.reduce((a, b) => a.concat(b))
}

console.log(flatten([[1,2,3], [4,5,6]]))