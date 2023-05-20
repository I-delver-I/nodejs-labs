type AddToSum = (number2?: number) => number | AddToSum;

function add(number: number): AddToSum {
  let sum = number;

  const addToSum: AddToSum = function (numberToAdd?) {
    if (numberToAdd !== undefined) {
      sum += numberToAdd;

      return addToSum;
    }

    return sum;
  };

  return addToSum;
}

export default {add};
