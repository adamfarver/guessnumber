export default function formalNumberInput(number) {
  if (typeof number === 'number') {
    return number.toLocaleString('en');
  }
  if (typeof number === 'string') {
    number = Number(number.replace(/\D/g, ''));
    return number.toLocaleString('en');
  }
}
