import formalNumberInput from './formatNumberInput';

describe('Format Input Number', () => {
  it('Returns type of string', () => {
    expect(formalNumberInput(1)).toEqual('1');
  });
  it('Returns properly formatted string', () => {
    expect(formalNumberInput(1000)).toEqual('1,000');
  });
  it('Deals with strings', () => {
    expect(formalNumberInput('1,000,000')).toEqual('1,000,000');
  });
});
