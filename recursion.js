// write an program for recursion

function recursion(num) {
  if (num === 0) return;
  console.log(num);
  num = num - 1;
  recursion(num);
}

let num = 8;
recursion(num);

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

// Merge Sort Algorithm

function mergeSort(left, right) {
  let res = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }
  return [...res, ...left.slice(i), ...right.slice(j)];
}

function sortArray(nums) {
  if (nums.length <= 1) return nums;

  let mid = Math.floor(nums.length / 2);
  let left = sortArray(nums.slice(0, mid));
  let right = sortArray(nums.slice(mid));

  return mergeSort(left, right);
}

let nums = [5, 3, 8, 2, 1];

console.log(sortArray(nums), "nums");
