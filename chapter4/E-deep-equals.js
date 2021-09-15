function deepEqual(a, b) {
  if (typeof a === "object" && typeof b === "object") {
    for (let key of Object.keys(a))
      if (!deepEqual(a[key], b[key])) return false;
    return true;
  } else {
    return a === b;
  }
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, { here: 1, object: 2 }));

console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));

console.log(deepEqual(obj, { here: { is: "ab" }, object: 2 }));
