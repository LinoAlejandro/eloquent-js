let obj = { left: "left", right: "right" };

console.log(obj.left);
delete obj.left;
console.log(obj.left);
console.log(obj.right);
console.log("left" in obj);
console.log("right" in obj);

console.log(Object.keys({ a: "a", b: "b", c: "c" }));

obj = { left: "left", right: "right" };
Object.assign(obj, { right: "right1", up: "up", down: "down" });
console.log(obj);
