export default function formalNumberInput(number) {
  if (typeof number === 'number') {
    return number.toLocaleString('en');
  }
  if (typeof number === 'string') {
    number = Number(number.split(',').join(''));
    return number.toLocaleString('en');
  }
}
