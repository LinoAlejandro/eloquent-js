function loop(val, test, update, body) {
  for(let c = val; test(c); c = update(c)) 
    body(c)
}

loop(3, n => n > 0, n => n - 1, console.log);