// function getSuccessRateImproved(statistic) {
// 	let successCounter = 0;
// 	const statArr = statistic.replace(/\D/g, '');
// 	for (let i = 0; i < statArr.length; i++) {
// 		if (statArr[i] != 0) {
// 			successCounter++;
// 		}
// 	}
// 	return (successCounter / statArr.length) * 100;
// }
// getSuccessRateImproved('11cool0-0o7k0');

// =================

// function isWerewolf(target) {
// 	return (
// 		target
// 			.toLowerCase()
// 			.replace(/[\W_]+/g, '')
// 			.split('')
// 			.join('') ==
// 		target
// 			.toLowerCase()
// 			.replace(/[\W_]+/g, '')
// 			.split('')
// 			.reverse()
// 			.join('')
// 	);
// }

// console.log(isWerewolf('eva, can i see bees in a cave'));
// console.log(isWerewolf('red rum sir is murder'));
// console.log(isWerewolf('I did, did I'));

// ======================

// function makeStickers(detailsCount, robotPart) {
// 	let resArr = [];
// 	for (let i = 1; i <= detailsCount; i++) {
// 		resArr.push(`${robotPart} detail #${i}`);
// 	}
// 	return resArr;
// }

// =============================

// function countMs(text) {
// 	let counter = 0;
// 	let textArr = text.toLowerCase().split('');
// 	for (let i = 0; i < textArr.length; i++) {
// 		if (textArr[i] == 'm') {
// 			counter++;
// 		}
// 	}
// 	return counter;
// }

// console.log(countMs('Mermaid'));

// =============================

// function isSubstring(phrase, part) {
// 	if (phrase.includes(part)) {
// 		return true
// 	} else {
// 		return false
// 	}
// }
// console.log(isSubstring('string', 's'));
// console.log(isSubstring('string', 'bring'));

// =============================

// function getSuccessRate(statistic) {
// 	let successCounter = 0;
// 	if (Number.isNaN(statistic)) {
// 		return 0;
// 	}
// 	const statArr = statistic.replace(/\D/g, '');
// 	for (let i = 0; i < statArr.length; i++) {
// 		if (statArr[i] != 0) {
// 			successCounter++;
// 		}
// 	}
// 	return Math.round((successCounter / statArr.length) * 100);
// }

// console.log(getSuccessRate(''));
// console.log(getSuccessRate('11111'));

// =============================

// function getSpeedStatistic(testResults) {
// 	if (testResults.length === 0) {
// 		return [0, 0, 0];
// 	}

// 	let sum = 0;

// 	for (let i = 0; i < testResults.length; i++) {
// 		sum += testResults[i];
// 	}

// 	const max = Math.max(...testResults);
// 	const min = Math.min(...testResults);
// 	const average = Math.floor(sum / testResults.length);

// 	return [min, max,  average];
// }

// console.log(getSpeedStatistic([10, 10, 11, 9, 12, 8]));
// console.log(getSpeedStatistic([10]));
// console.log(getSpeedStatistic([]));

// =============================

// function compareRobots(firstRobotResults, secondRobotResults) {
// 	if (
// 		firstRobotResults.reduce((partialSum, a) => partialSum + a, 0) >
// 		secondRobotResults.reduce((partialSum, a) => partialSum + a, 0)
// 	) {
// 		return 'First robot for sale!';
// 	} else if (
// 		firstRobotResults.reduce((partialSum, a) => partialSum + a, 0) <
// 		secondRobotResults.reduce((partialSum, a) => partialSum + a, 0)
// 	) {
// 		return 'Second robot for sale!';
// 	} else {
// 		return 'Both robots for sale!';
// 	}
// }

// console.log(compareRobots([9, 7, 9], [1, 3, 4, 5, 12]));
// console.log(compareRobots([1, 3, 4], [1, 1, 4, 5]));

// ============================

// function isSorted(boxNumbers) {
// 	for (let i = 0; i < boxNumbers.length; i++) {
// 		if (boxNumbers.length === 0) {
// 			return false;
// 		} else if (boxNumbers[i] < boxNumbers[i - 1]) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

// console.log(isSorted([1, 2, 3, 4, 5]));
// console.log(isSorted([0, 3, 1, 2, 2, 2]));

// ============================

// function createArray(N) {
// 	let arr = [];
// 	for (let i = 1; i <= N; i++) {
// 		arr.push(i);
// 	}
// 	return arr;
// }

// ============================

// function getPlan(startProduction, numberOfMonths, percent) {

// }
// console.log(getPlan(200, 3, 50));
// console.log(getPlan(10, 4, 30));

// ============================

// function getLocation(coordinates, commands) {
// 	let arr = coordinates.slice();
// 	commands.forEach((cmd) => {
// 		arr[0] += cmd === 'left' ? -1 : cmd === 'right' ? 1 : 0;
// 		arr[1] += cmd === 'back' ? -1 : cmd === 'forward' ? 1 : 0;
// 	});
// 	return arr;
// }

// console.log(getLocation([0, 0], ['forward', 'right']));

// ============================

// function getPlan(startProduction, numberOfMonths, percent) {
// 	const targets = [];
// 	let target = startProduction;
// 	for (let month = 1; month <= numberOfMonths; month++) {
// 		target += Math.floor((target * percent) / 100);
// 		targets.push(target);
// 	}
// 	return targets;
// }
// console.log(getPlan(200, 3, 50));
// console.log(getPlan(1000, 6, 20));

// ============================

// function checkNumber(number) {
// 	let arr = [];
// 	if (number > 0 && number % 2 == 0 && number % 10 == 0) {
// 		arr.push(true, true, true);
// 	} else if (number > 0 && number % 10 == 0) {
// 		arr.push(true, false, true);
// 	} else if (number > 0 && number % 2 == 0) {
// 		arr.push(true, true, false);
// 	} else if (number === 0) {
// 		arr.push(false, true, true);
// 	} else if (number < 0 && number % 2 == 0) {
// 		arr.push(false, true, false);
// 	} else if (number < 0) {
// 		arr.push(false, false, false);
// 	} else if (number > 0) {
// 		arr.push(true, false, false);
// 	}
// 	return arr;
// }
// console.log(checkNumber(10));

// ============================

// function combineArrays(first, second) {
// 	if (first.length == 0) {
// 		return [];
// 	}
// 	let resArr = [];
// 	for (let i = 0; i < first.length; i++) {
// 		resArr.push(first[i] + second[i]);
// 	}
// 	return resArr;
// }

// console.log(combineArrays([1, 2, 5], [3, 6, 1]));

// ============================

// function splitString(str) {
// 	const arr = str.split('');

// 	return arr.map((el, i) => el + (arr.splice(i + 1, 1)[0] || '_')).filter((el) => el);
// }
// console.log(splitString('abfkmdkgmdfkmkfmlkmfdc'));

// =============================

// function getAverageAge(years) {
// 	let res = [0, 0];
// 	for (let i = 0; i < years.length; i++) {
// 		if (+years[i].slice(0, 4) < +years[i].slice(5, 9)) {
// 			res[0] += +years[i].slice(5, 9) - +years[i].slice(0, 4);
// 			res[1] += 1;
// 		}
// 	}
// 	return Math.round(res[0] / res[1]);
// }

// getAverageAge([
// 	'1907-1997',
// 	'1761-1833',
// 	'1535-1582',
// 	'1918-2012',
// 	'1877-1968',
// 	'1696-1724',
// 	'1602-1642',
// 	'1692-1743',
// 	'1695-1762',
// 	'1570-1636',
// 	'1762-1807',
// 	'1668-1731',
// ]);

// --------------

// function removeVowelKeys(keys) {
// 	let res = [];
// 	for (let i = 0; i < keys.length; i++) {
// 		if (
// 			keys[i].charAt(0).toLowerCase() !== 'a' &&
// 			keys[i].charAt(0).toLowerCase() !== 'e' &&
// 			keys[i].charAt(0).toLowerCase() !== 'i' &&
// 			keys[i].charAt(0).toLowerCase() !== 'o' &&
// 			keys[i].charAt(0).toLowerCase() !== 'u' &&
// 			keys[i].charAt(0).toLowerCase() !== 'y'
// 		) {
// 			res.push(keys[i]);
// 		}
// 	}
// 	return res;
// }
// removeVowelKeys(['alarm', 'chip', 'isValid', 'Advice', 'onClick']);

// ===============

// function validatePassword(password) {
// 	if (
// 		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password)
// 	) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// console.log(validatePassword('@dmiN122'));
// console.log(validatePassword('password'));
// console.log(validatePassword('Admin12'));
// console.log(validatePassword('Admin123'));