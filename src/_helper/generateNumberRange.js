export default function generateNumberRange(digits) {
  let low = '1';
  let high = '1';
  digits = Number(digits);
  let zeroes = digits;
  for (let i = 0; i < zeroes - 1; i++) {
    low = low + '0';
  }

  for (let i = 0; i < zeroes; i++) {
    high = high + '0';
  }
  return [Number(low), Number(high)];
}
