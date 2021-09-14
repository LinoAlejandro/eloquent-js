function multiplier(factor) {
  return (number) => factor * number;
}

const twice = multiplier(2);
console.log(twice(5));
