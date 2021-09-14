for (let c = 1; c <= 100; c++) {
  let string = "";
  if (c % 3 == 0) string += "fizz";
  if (c % 5 == 0) string += "buzz";

  console.log(string || c);
}
