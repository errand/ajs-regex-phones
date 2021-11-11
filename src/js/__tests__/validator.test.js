/* eslint-disable quotes */
import Validator from '../Validator';

const validator = new Validator();

test('Russian Phone should transform', () => {
  const phone = '8 (927) 000-00-00';
  const expected = '+79270000000';
  expect(validator.transformPhone(phone)).toBe(expected);
});

test('Spaces in phone should be cleared', () => {
  const phone = '+7 960 000 00 00';
  const expected = '+79600000000';
  expect(validator.transformPhone(phone)).toBe(expected);
});

test('Chineese phone should be formatted', () => {
  const phone = '+86 000 000 0000';
  const expected = '+860000000000';
  expect(validator.transformPhone(phone)).toBe(expected);
});

test('Throw error if contain bad characters', () => {
  const phone = '+7 960d 000 00 00';
  expect(() => validator.transformPhone(phone)).toThrow();
});
