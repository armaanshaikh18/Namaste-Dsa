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

let arr = [5, 2, 3, 0, 4];

function recursionsum(n) {
  if (n == 0) return arr[n];

  return arr[n] + recursionsum(n - 1);
}

console.log(recursionsum(arr.length - 1));

function oddSum(n) {
  let isOdd = arr[n] % 2 != 0;

  if (n == 0) return isOdd ? arr[n] : 0;

  return (isOdd ? arr[n] : 0) + oddSum(n - 1);
}

console.log(oddSum(arr.length - 1));

function fibo(n) {
  if (n <= 1) return n;
  return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(5));
