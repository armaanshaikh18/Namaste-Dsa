function countDigit(n) {
  if (n === 0) return 1;

  //   converting negative number to positive
  n = Math.abs(n);
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

let num = 1627;

let result = countDigit(num);
console.log(result);

// write a function to find the palindrome problem
function palindrome(n) {
  if (n < 0) return false;
  let nCopy = n;
  let rev = 0;
  while (n > 0) {
    let rem = n % 10;
    console.log(rem);
    rev = 10 * rev + rem;
    console.log(rev);
    n = Math.floor(n / 10);
  }
  return rev === nCopy;
}

let palin = 2552;
let res = palindrome(palin);
console.log(res);

// write an program to reverse the number
function reverseNumber(x) {
  let xcopy = x;
  x = Math.abs(x);
  let reverse = 0;

  while (x > 0) {
    let last = x % 10;
    reverse = 10 * reverse + last;
    x = Math.floor(x / 10);
  }

  let limit = Math.pow(2 * 31);
  if (reverse < -limit || reverse > limit) return 0;
  return xcopy < 0 ? -reverse : reverse;
}

let x = 4321;
let l = reverseNumber(x);
console.log(l);

// write an program to remove duplicate from sorted array

function duplicateArray(nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x = x + 1;
      nums[x] = nums[i];
    }
  }
  return x + 1;
}

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let p = duplicateArray(nums);
console.log(p);

// write an program to remove number from an array

function removeElement(ele, val) {
  let xz = 0;
  for (let i = 0; i < ele.length; i++) {
    if (ele[i] !== val) {
      ele[xz] = ele[i];
      xz++;
    }
  }
  return xz;
}

let ele = [2, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let pl = duplicateArray(ele, 2);
console.log(pl);

// write an program to reverse dtrinf from an given array

function reverseString(str) {
  let len = str.length;
  let halflen = Math.floor(len / 2);

  for (let i = 0; i < halflen; i++) {
    let temp = str[i];
    str[i] = str[len - 1 - i];
    str[len - 1 - i] = temp;
  }
  return str;
}

let str = ["h", "e", "l", "l", "o"];
let main = reverseString(str);
console.log(main);

// write an program to check the Best time to buy and sell stock

function buySellStock(stock) {
  let min = stock[0];
  let maxProfit = 0;

  for (let i = 1; i < stock.length; i++) {
    if (stock[i] - min > maxProfit) {
      maxProfit = stock[i] - min;
    }

    if (maxProfit < min) {
      min = stock[i];
    }
  }
  return maxProfit;
}
let stock = [7, 1, 5, 3, 6, 4];
let prg = buySellStock(stock);
console.log(prg);

function mergeSortArr(nums1, nums2) {
  let tempNums = nums1.slice(0, nums1.length);
  console.log(tempNums);
  let p1 = 0;
  let p2 = 0;

  let m = nums1.length + nums2.length;

  for (let i = 0; i < m; i++) {
    if ((p1 < nums1.length && tempNums[p1] < nums2[p2]) || p2 >= nums2.length) {
      nums1[i] = tempNums[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }

  return nums1;
}

let nums1 = [1, 2, 3];
let nums2 = [2, 5, 6];

let sortArr = mergeSortArr(nums1, nums2);
console.log(sortArr);

function moveZero(arr) {
  let z = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[z] = arr[i];
      z++;
    }
  }

  for (let y = z; y < arr.length; y++) {
    arr[y] = 0;
  }
  return arr;
}
let sumzero = [0, 1, 0, 3, 12];
let sum = moveZero(sumzero);
console.log(sum);

function maxConsecutive(max) {
  let curr = 0;
  let maxCount = 0;

  for (let i = 0; i < max.length; i++) {
    if (max[i] === 1) {
      curr++;
    } else {
      maxCount = Math.max(curr, maxCount);
      curr = 0;
    }
  }
  return Math.max(curr, maxCount);
}
let maxEle = [1, 1, 0, 0, 1, 1, 1, 0, 1];
let consecutive = maxConsecutive(maxEle);
console.log(consecutive);

function missingNum(nums) {
  let n = nums.length;
  let sums = (n * (n + 1)) / 2;

  console.log(sums);
  let partialSum = 0;
  for (let i = 0; i < n; i++) {
    partialSum = partialSum + nums[i];
    console.log(partialSum);
  }
  return sums - partialSum;
}

let ios = [4, 1, 3, 0, 5, 6];
let app = missingNum(ios);
console.log(app);

function singleNumber(num) {
  let xor = 0;

  for (let i = 0; i < num.length; i++) {
    xor = xor ^ num[i];
  }
  return xor;
}

let single = [3, 5, 1, 1, 5];
let items = singleNumber(single);
console.log(items);
