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

