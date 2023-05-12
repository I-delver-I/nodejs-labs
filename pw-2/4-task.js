const add = function (...args) {
	let sum = 0;

	for (let i = 0; i < args.length; i++) {
		sum += args[i];
	}

	return sum;
};

const cacheWrapper = function (numberParametersFunction) {
	const cache = {};

	function wrappedFunction(...numbers) {
		const joinedNumbers = numbers.sort().join(',');

		if (Object.hasOwn(cache, joinedNumbers)) {
			console.log('Took from cache');

			return cache[joinedNumbers];
		}

		const result = numberParametersFunction(...numbers);
		cache[joinedNumbers] = result;

		return result;
	}

	return wrappedFunction;
};

export default {cacheWrapper, add};
