import Validator from './Validator';

const validator = new Validator();

console.log(validator.transformPhone('8 (927) 000-00-00'));
console.log(validator.transformPhone('+7 960 000 00 00'));
console.log(validator.transformPhone('+86 000 000 0000'));
console.log(validator.transformPhone('+7 960 000 00 00'));
