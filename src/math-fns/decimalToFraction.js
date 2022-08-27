const gcd = (a, b) => {
  return b ? gcd(b, a % b) : a;
};

export const decimalToFraction = (value) => {
  if (!value?.toString().includes(".")) return value;

  const wholeNumber = parseFloat(value.toString().split(".")[0]);
  const decimalPlaces = value.toString().split(".")[1].length;

  const numerator = parseFloat(value.toString().split(".")[1]);
  const denominator = 10 ** decimalPlaces;

  const _gcd = gcd(numerator, denominator);

  return `${wholeNumber !== 0 ? `${wholeNumber} ` : ""}${numerator / _gcd}/${
    denominator / _gcd
  }`;
};
