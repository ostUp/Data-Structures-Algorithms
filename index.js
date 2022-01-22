// Алгоритми
// !=================================================================
// !============================ToDo!================================
// !=================================================================
// Оцінка
// O(n) де n - кількість операцій

// !=================================================================

// Linear Search O(n)

// const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
// let count = 0;
// function linearSearch(array, item) {
//    for (let i = 0; i < array.length; i++) {
//       count += 1;
//       if (array[i] === item) {
//          return i;
//       }
//    }
//    return null;
// }

// console.log(linearSearch(array, 1));
// console.log("count = ", count);

// !=================================================================

// Binary Search (sort) - O(log2n)

// const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// let count = 0;

// function binarySearch(array, item) {
//    let start = 0;
//    let end = array.length;
//    let middle;
//    let found = false;
//    let position = -1;
//    while (found === false && start <= end) {
//       count += 1;
//       middle = Math.floor((start + end) / 2);
//       if (array[middle] === item) {
//          found = true;
//          position = middle;
//          return position;
//       }
//       if (item < array[middle]) {
//          end = middle - 1;
//       } else {
//          start = middle + 1;
//       }
//    }
//    return position;
// }

// console.log(binarySearch(array, 8));
// console.log("count = ", count);

// function recursiveBinarySearch(array, item, start, end) {
//    let middle = Math.floor((start + end) / 2);
//    count += 1;
//    if (item === array[middle]) {
//       return middle;
//    }
//    if (item < array[middle]) {
//       return recursiveBinarySearch(array, item, 0, middle - 1);
//    } else {
//       return recursiveBinarySearch(array, item, middle + 1, end);
//    }
// }

// console.log(recursiveBinarySearch(array, 0, 0, array.length));
// console.log(count);

// !=================================================================

// Selection Sort

// const arr = [
//    0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6,
//    3, 32,
// ];
// let count = 0;

// function selectionSort(array) {
//    for (let i = 0; i < array.length; i++) {
//       let indexMin = i;
//       for (let j = i + 1; j < array.length; j++) {
//          if (array[j] < array[indexMin]) {
//             indexMin = j;
//          }
//          count += 1;
//       }
//       let tmp = array[i];
//       array[i] = array[indexMin];
//       array[indexMin] = tmp;
//    }
//    return array;
// }

// console.log(selectionSort(arr));
// console.log(arr.length); // O(n*n)
// console.log("count = ", count);

// !=================================================================

// Bubble sort

// const arr = [
//    0, 3, 2, 5, 6, 8, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6,
//    3, 32, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1,
//    7, -1, -5, 23,
// ];
// let count = 0;

// function bubbleSort(array) {
//    for (let i = 0; i < array.length; i++) {
//       for (let j = 0; j < array.length; j++) {
//          if (array[j + 1] < array[j]) {
//             let tmp = array[j];
//             array[j] = array[j + 1];
//             array[j + 1] = tmp;
//          }
//          count += 1;
//       }
//    }
//    return array;
// }

// console.log("length", arr.length);
// console.log(bubbleSort(arr)); // O(n*n)
// console.log("count = ", count);

// !=================================================================

// Quich sort

// const arr = [
//    0, 3, 2, 5, 6, 8, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6,
//    3, 32, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1,
//    7, -1, -5, 23,
// ];
// let count = 0;

// function quickSort(array) {
//    if (array.length <= 1) {
//       return array;
//    }
//    let pivotIndex = Math.floor(array.length / 2);
//    let pivot = array[pivotIndex];
//    let less = [];
//    let greater = [];
//    for (let i = 0; i < array.length; i++) {
//       count += 1;
//       if (i === pivotIndex) continue;
//       if (array[i] < pivot) {
//          less.push(array[i]);
//       } else {
//          greater.push(array[i]);
//       }
//    }
//    return [...quickSort(less), pivot, ...quickSort(greater)];
// }

// console.log(quickSort(arr));
// console.log("count", count);

// !=================================================================
