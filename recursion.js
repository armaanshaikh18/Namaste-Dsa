// write an program for recursion

function recursion(nums) {
  if (nums === 0) return;
  console.log(nums);
  nums = nums - 1;
  recursion(nums);
}

let nums = 8;
recursion(nums);

function sum(n) {
  if (n === 0) return 0;
  return (n = n + sum(n - 1));
}

console.log(sum(5));
