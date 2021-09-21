function gratherThan(n) {
  return (m) => m > n;
}

const gratherThan10 = gratherThan(10);

console.log(gratherThan10(11));

function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("returns", result);
    return result;
  };
}

noisy(Math.min)(1, 2, 3);

function repeat(n, f) {
  for (let c = 0; c < n; c++) f(c);
}

function unless(test, then) {
  if (test) then();
}

function isEven(number) {
  return number % 2 == 0
}

repeat(10, (i) => unless(isEven(i), () => console.log(`${i} is even`)));
