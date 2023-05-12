const add = function (number) {
	let sum = number;

	function addToSum(number2) {
		if (number2 !== undefined) {
			sum += number2;

			return addToSum;
		}

		return sum;
	}

	return addToSum;
};

export default {add};
