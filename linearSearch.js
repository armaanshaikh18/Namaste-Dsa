// Linear search

function linearSearch(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

let arr = [9, 7, 4, 1, 3];

console.log(linearSearch(arr, 3));

// Bubble Sort
function bubbleSort(nums) {
  let n = nums.length;

  for (let i = 0; i < n - 1; i++) {
    let isSwapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;

        isSwapped = true;
      }
    }

    if (!isSwapped) break;
  }
  return nums;
}

let nums = [5, 3, 4, 2, 1];
console.log(bubbleSort(nums));

// Selection sort
function selectionSort(a) {
  let n = a.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (a[j] < a[min]) {
        min = j;
      }
    }

    if (min != i) {
      let temp = a[i];
      a[i] = a[min];
      a[min] = temp;
    }
  }
  return a;
}

let a = [9, 2, 3, 7, 0, 1];
console.log(selectionSort(a));

// Insertion Sort
function insertionSort(arr1) {
  let n = arr1.length;

  for (let i = 1; i < n; i++) {
    let curr = arr1[i];
    let prev = i - 1;
    console.log(prev);
    while (arr1[prev] > curr && prev >= 0) {
      arr1[prev + 1] = arr1[prev];
      prev--;
    }

    arr1[prev + 1] = curr;
  }
  return arr1;
}

let arr1 = [8, 2, 3, 5, 7, 1];
console.log(insertionSort(arr1));
