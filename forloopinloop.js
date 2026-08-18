let arr = [10, -20, -5, 8, 50, -12, 0, -11, -89, 80];

// Find the index from the given number in the array
function searchElement(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == val) {
      return i;
    }
  }
  return -1;
}

const ele = searchElement(arr, 50);
console.log(ele);

// Write a program to find negative numbers in the array

function negativeNumber(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      counter++;
    }
  }
  return counter;
}

const number = negativeNumber(arr);
console.log(number);

// Write an program to find the largest/smallest number in an array

function largestNumber(arr) {
  let num = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      num = arr[i];
    }
  }
  return num;
}

const largeNum = largestNumber(arr);
console.log(largeNum);

// write a program to find the second largest number from an array

function secondLargest(newarr) {
  if (newarr.length < 2) {
    return null;
  }
  let first = -Infinity;
  let second = -Infinity;
  for (let i = 0; i < newarr.length; i++) {
    if (newarr[i] > first) {
      second = first;
      first = newarr[i];
    } else if (newarr[i] > second && newarr[i] !== first) {
      second = newarr[i];
    }
  }
  return second;
}

let newarr = [8, 9, 10, 11, 11, 2, 0, 7, 4];

const largestNum = secondLargest(newarr);
console.log(largestNum);

// write an program with loop in loop

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log("i=" + i + " j=" + j);
  }
}
// 2nd scenario
for (let i = 0; i < 3; i++) {
  for (let j = 0; j <= 3; j++) {
    console.log("i=" + i + " j=" + j);
  }
}

// 3rd scenario
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < i; j++) {
    console.log("i=" + i + " j=" + j);
  }
}
// 4th scenario
for (let i = 0; i < 3; i++) {
  for (let j = i; j <= i; j++) {
    console.log("i=" + i + " j=" + j);
  }
}
// 5th scenario
for (let i = 0; i < 3; i++) {
  for (let j = i; j > 0; j--) {
    console.log("i=" + i + " j=" + j);
  }
}

for (let i = 0; i < 4; i++) {
  let row = "";
  for (let j = 0; j < 4; j++) {
    row = row + "*";
  }
  console.log(row);
}

// star pattern 1to4
for (let i = 0; i < 4; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + "*";
  }
  console.log(row);
}

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}
for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + (i + 1);
  }
  console.log(row);
}

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j < 5 - i; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j < 5 - (i + 1); j++) {
    row = row + "_";
  }
  for (let k = 0; k <= i; k++) {
    row = row + "*";
  }
  console.log(row);
}

for (let i = 0; i < 5; i++) {
  let row = "";
  let toggle = 1;
  for (let j = 0; j <= i; j++) {
    row = row + toggle;
    if (toggle === 1) {
      toggle = 0;
    } else {
      toggle = 1;
    }
  }
  console.log(row);
}
