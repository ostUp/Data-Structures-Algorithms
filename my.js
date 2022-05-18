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

