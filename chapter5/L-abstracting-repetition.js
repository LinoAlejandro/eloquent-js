function repeat(n, action) {
  for(let c = 0; c < n; c++) {
    action(c)
  }
}

repeat(5, console.log)

let labels = []
repeat(4, i => labels.push(`Unit ${i + 1}`))
console.log(labels)