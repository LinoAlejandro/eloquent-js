function findSolution(goal) {
  function find(current, history) {
    if (current == goal) {
      return history;
    } else if (current > goal) {
      return null;
    } else {
      return (
        find(current + 5, `(${history} + 5)`) ||
        find(current * 3, `(${history} * 3)`)
      );
    }
  }

  return find(1, "1");
}

console.log(findSolution(112));
