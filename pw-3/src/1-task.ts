type AddToSum = (number2: number) => number | AddToSum;

export const add = function (number: number): AddToSum {
	let sum = number;

	function addToSum(number2?: number): AddToSum | number {
		if (number2 !== undefined) {
			sum += number2;

			return addToSum;
		}

		return sum;
	}

	return addToSum;
};
