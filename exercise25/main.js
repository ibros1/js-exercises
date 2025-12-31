// const numbers = [1, 2, 3, 4];
// const extraNum = [...numbers, 5, 6, 7, 8, 9];
// console.log(extraNum);

function sum(...numbers) {
  return numbers.reduce((total, sum) => total + sum, 0);
}

console.log(sum(3, 3, 3, 3, 3, 3, 3, 3));
