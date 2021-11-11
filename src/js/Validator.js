/** @module Validator
 * Class validating input string.
 */
export default class Validator {
  /**
   * Create a point.
   * @param {regexp} goodCharactersRule - Regex rule to test if string contain only letters, numbers, - and _
   * @param {regexp} russian8 - Regex rule to test if string starts with 8 .
   */

  constructor() {
    this.goodCharactersRule = /^\+?[0-9]{1,2}? ?\(?[0-9]{1,3}\)? ?[0-9]{1,3} ?-?[0-9]{1,2}-? ?[0-9]{1,2}$/gm;
    this.russian8 = /^8 /g;
  }

  /**
   * Check if Username fit the Rules
   * @param {string} str - The string containing username to check.
   * @return {string} true if OK.
   */
  transformPhone(str) {
    if (!this.goodCharactersRule.test(str)) {
      throw new Error('Phone should conatin digits, (), - or spaces');
    }

    return str
      .replace(this.russian8, '+7')
      .replace('(', '')
      .replace(')', '')
      .replaceAll('-', '')
      .replaceAll(' ', '');
  }
}
