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

// Recursion

// const factorial = (n) => {
//    if (n === 1) {
//       return 1;
//    }
//    return n * factorial(n - 1);
// };

// Числа фібаначі -  1,1,2,3,5,8,13,21

// const fibonachi = (n) => {
//    if (n === 1 || n === 2) {
//       return 1;
//    }
//    return fibonachi(n - 1) + fibonachi(n - 2);
// };

// console.log(fibonachi(8));

// !=================================================================

// Пошук в ширину в графі

// const graph = {};
// graph.a = ["b", "c"];
// graph.b = ["f"];
// graph.c = ["d", "e"];
// graph.d = ["f"];
// graph.e = ["f"];
// graph.f = ["g"];

// function breadthSearch(graph, start, end) {
//    let queue = [];
//    queue.push(start);
//    while (queue.length > 0) {
//       const current = queue.shift();
//       if (!graph[current]) {
//          graph[current] = [];
//       }
//       if (graph[current].includes(end)) {
//          return true;
//       } else {
//          queue = [...queue, ...graph[current]];
//       }
//    }
//    return false;
// }

// console.log(breadthSearch(graph, "a", "e"));

// !=================================================================

// Матриця суміжності

// const matrix = [
//    [0, 1, 1, 0, 0, 0, 0],
//    [0, 0, 0, 0, 1, 0, 0],
//    [0, 0, 0, 1, 0, 1, 0],
//    [0, 0, 0, 0, 1, 0, 0],
//    [0, 0, 0, 0, 0, 0, 1],
//    [0, 0, 0, 0, 1, 0, 0],
//    [0, 0, 0, 0, 0, 0, 0],
// ];

// !=================================================================

// Пошук найкоротшого шляху в графі

// Поиск кратчайшего пути в графе

// const graph = {};
// graph.a = { b: 2, c: 1 };
// graph.b = { f: 7 };
// graph.c = { d: 5, e: 2 };
// graph.d = { f: 2 };
// graph.e = { f: 1 };
// graph.f = { g: 1 };
// graph.g = {};

// function shortPath(graph, start, end) {
//    const costs = {};
//    const processed = [];
//    let neighbors = {};
//    Object.keys(graph).forEach((node) => {
//       if (node !== start) {
//          let value = graph[start][node];
//          costs[node] = value || 100000000;
//       }
//    });
//    let node = findNodeLowestCost(costs, processed);
//    while (node) {
//       const cost = costs[node];
//       neighbors = graph[node];
//       Object.keys(neighbors).forEach((neighbor) => {
//          let newCost = cost + neighbors[neighbor];
//          if (newCost < costs[neighbor]) {
//             costs[neighbor] = newCost;
//          }
//       });
//       processed.push(node);
//       node = findNodeLowestCost(costs, processed);
//    }
//    return costs;
// }

// function findNodeLowestCost(costs, processed) {
//    let lowestCost = 100000000;
//    let lowestNode;
//    Object.keys(costs).forEach((node) => {
//       let cost = costs[node];
//       if (cost < lowestCost && !processed.includes(node)) {
//          lowestCost = cost;
//          lowestNode = node;
//       }
//    });
//    return lowestNode;
// }

// console.log(shortPath(graph, "a", "g"));

